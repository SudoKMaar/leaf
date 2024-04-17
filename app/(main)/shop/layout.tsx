import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping page",
  description:
    "Spend your points on cool stuff, or Get pro for unlimited hearts.",
};

type Props = {
  children: React.ReactNode;
};

const LearnLayout = ({ children }: Props) => {
  return <div className="">{children}</div>;
};

export default LearnLayout;
