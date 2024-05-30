import Image from "next/image";
import { Loader } from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const HomepageHeader = () => {
  return (
    <header className="z-10 w-full h-20 px-4 border-b-2 border-slate-200">
      <div className="flex items-center justify-between h-full mx-auto lg:max-w-screen-lg">
        <div className="flex items-center pt-8 pl-4 pb-7 gap-x-3">
          <Image src="/logo.webp" height={40} width={40} alt="Leaf" />
          <h1 className="text-2xl font-extrabold tracking-widest text-green-600">
            LEAF
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
