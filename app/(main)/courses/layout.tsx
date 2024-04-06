import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore a world of languages with LEAF! Our comprehensive courses, available in multiple languages, provide immersive learning experiences. Start your language journey with LEAF today!",
};

type Props = {
  children: React.ReactNode;
};

const CoursesLayout = ({ children }: Props) => {
  return <div className="">{children}</div>;
};

export default CoursesLayout;
