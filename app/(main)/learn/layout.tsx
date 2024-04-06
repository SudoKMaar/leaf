import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Master a new language with our interactive learning platform LEAF. Track your progress, unlock levels, and immerse yourself in the joy of learning. Start your language journey today!",
};

type Props = {
  children: React.ReactNode;
};

const LearnLayout = ({ children }: Props) => {
  return <div className="">{children}</div>;
};

export default LearnLayout;
