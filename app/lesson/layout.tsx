import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lesson",
  description:
    "Master a new language with our interactive lessons. Answer questions, get instant feedback, and learn at your own pace. Start your language learning journey today!",
};

const LessonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full ">
      <div className="flex flex-col h-full w-full">{children}</div>
    </div>
  );
};

export default LessonLayout;
