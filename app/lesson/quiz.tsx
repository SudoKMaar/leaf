"use client";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { useAudio, useWindowSize, useMount } from "react-use";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { challengeOptions, challenges } from "@/db/schema";
import { Header } from "./header";
import { QuestionBubble } from "./question-bubble";
import { Challenge } from "./challenge";
import { Footer } from "./footer";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { reduceHearts } from "@/actions/user-progress";
import { ResultCard } from "./result-card";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { usePracticeModal } from "@/store/use-practive-modal";

type Props = {
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    complete: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  initialHearts: number;
  initialPercentage: number;
  userSubscription: any;
};

export const Quiz = ({
  initialHearts,
  initialLessonChallenges,
  initialLessonId,
  initialPercentage,
  userSubscription,
}: Props) => {
  const router = useRouter();
  const { open: openHeartsModal } = useHeartsModal();
  const { open: openPracticeModal } = usePracticeModal();
  useMount(() => {
    if (initialPercentage === 100) {
      openPracticeModal();
    }
  });
  const { width, height } = useWindowSize();
  const [finishAudio] = useAudio({
    src: "/finish.mp3",
    autoPlay: true,
  });

  const [correctAudio, _c, correctAudioControls] = useAudio({
    src: "/correct.wav",
  });

  const [incorrectAudio, _i, incorrectAudioControls] = useAudio({
    src: "/incorrect.wav",
  });
  const [isPending, startTransition] = useTransition();
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(() => {
    return initialPercentage === 100 ? 0 : initialPercentage;
  });
  const [lessonId] = useState(initialLessonId);
  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      (challenge) => !challenge.complete
    );
    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });

  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");
  const challenge = challenges[activeIndex];
  const options = challenge?.challengeOptions ?? [];

  const onNext = () => {
    setActiveIndex((current) => current + 1);
  };
  const onContinue = () => {
    if (!selectedOption) return;
    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }
    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }
    const correctOption = options.find((option) => option.correct);
    if (!correctOption) {
      return;
    }
    if (correctOption.id === selectedOption) {
      startTransition(() => {
        upsertChallengeProgress(challenge.id)
          .then((response) => {
            {
              if (response?.error === "hearts") {
                console.error("Missing Hearts");
                return;
              }
              correctAudioControls.play();
              setStatus("correct");
              setPercentage((prev) => prev + 100 / challenges.length);
              if (initialPercentage === 100) {
                setHearts((prev) => Math.min(prev + 1, 5));
              }
            }
          })
          .catch(() => toast.error("Something went wrong. Please try again."));
      });
    } else {
      startTransition(() => {
        reduceHearts(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }
            incorrectAudioControls.play();
            setStatus("wrong");
            if (!response?.error) {
              setHearts((prev) => Math.max(prev - 1, 0));
            }
          })
          .catch(() => toast.error("Something went wrong. Please try again."));
      });
    }
  };
  const onSelect = (id: number) => {
    if (status !== "none") return;
    setSelectedOption(id);
  };

  if (!challenge) {
    return (
      <>
        {finishAudio}
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          tweenDuration={10000}
        />
        <div className="flex flex-col gap-y-4 lg:gap-y-8 max-w-lg mx-auto items-center justify-center text-center h-full">
          <Image
            src="/finish.svg"
            alt="Finished"
            height={100}
            width={100}
            className="hidden lg:block"
          />
          <Image
            src="/finish.svg"
            alt="Finished"
            height={50}
            width={50}
            className="block lg:hidden"
          />
          <h1 className="text-xl lg:text-3xl text-neutral-700 font-bold">
            Great job ! <br /> You&apos;ve completed the lesson.
          </h1>
          <div className="flex items-center gap-x-4 w-full">
            <ResultCard variant="points" value={challenges.length * 10} />

            <ResultCard variant="hearts" value={hearts} />
          </div>
        </div>
        <Footer
          lessonId={lessonId}
          status="completed"
          onCheck={() => router.push("/learn")}
        />
      </>
    );
  }

  const title =
    challenge.type === "ASSIST"
      ? "Select the correct meaning"
      : challenge.question;

  return (
    <>
      {correctAudio}
      {incorrectAudio}

      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />

      <div className="flex-1 ">
        <div className="h-full flex items-center justify-center">
          <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
            <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
              {title}
            </h1>
            {challenge.type === "ASSIST" && (
              <QuestionBubble question={challenge.question} />
            )}
            <Challenge
              options={options}
              onSelect={onSelect}
              status={status}
              selectedOption={selectedOption}
              disabled={isPending}
              type={challenge.type}
            />
          </div>
        </div>
      </div>
      <Footer
        disabled={!selectedOption || isPending}
        status={status}
        onCheck={onContinue}
      />
    </>
  );
};
