import { redirect } from "next/navigation";
import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { Quiz } from "../quiz";

const LessonIDPage = async ({
  params: { lessonId },
}: {
  params: { lessonId: number };
}) => {
  const lessonData = getLesson(+lessonId);
  const userProgressData = getUserProgress();
  const userSubscription = await getUserSubscription();
  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscription,
  ]);

  if (!lesson || !userProgress) redirect("/learn");

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.complete).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription}
    />
  );
};

export default LessonIDPage;
