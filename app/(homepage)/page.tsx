import Link from "next/link";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { ChevronRight, Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import Team from "@/components/team";
import Footer from "@/components/footer";
import Features from "@/components/features";
import { Button } from "@/components/ui/button";
import Testimonials from "@/components/testimonials";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generated-effect";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

export default function Home() {
  return (
    <div className="items-center justify-center w-full gap-2 mx-auto overflow-hidden max-w-7xl">
      <section className="pt-0 pb-20" id="hero">
        <div>
          <Spotlight
            className="h-screen -top-40 -left-10 md:-left-32 md:-top-20"
            fill="green"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div
          className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.05]
       absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient for the container to give a faded look */}
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>
        <div className="relative z-10 flex justify-center my-20">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <AnimatedGradientText>
              🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-green-500 via-sky-500 to-green-500 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Start your linguistic journey
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>

            <TextGenerateEffect
              words=" Unfold Your Potential, Language by Language with LEAF"
              className="text-center text-[40px] md:text-4xl lg:text-5xl"
            />

            <p className="mb-4 text-sm text-center md:tracking-wider md:text-lg lg:text-xl">
              Master new languages, enhance your skills and unfold your
              potential
            </p>

            <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
              <ClerkLoading>
                <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
              </ClerkLoading>
              <ClerkLoaded>
                <SignedOut>
                  <SignUpButton
                    mode="modal"
                    afterSignInUrl="/learn"
                    afterSignUpUrl="/learn"
                  >
                    <Button size="lg" variant="secondary" className="w-full">
                      Get Started
                    </Button>
                  </SignUpButton>
                  <SignInButton
                    mode="modal"
                    afterSignInUrl="/learn"
                    afterSignUpUrl="/learn"
                  >
                    <Button
                      size="lg"
                      variant="primaryOutline"
                      className="w-full bg-transparent"
                    >
                      I already have an account
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full"
                    asChild
                  >
                    <Link href="/learn">Continue Learning</Link>
                  </Button>
                </SignedIn>
              </ClerkLoaded>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
}
