import { HomepageHeader } from "@/components/homepage-header";

type Props = {
  children: React.ReactNode;
};

const HomepageLayout = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col items-center justify-center px-5 mx-auto overflow-hidden sm:px-10">
      <HomepageHeader />
      <main className="flex flex-col items-center justify-center flex-1 mx-auto">
        {children}
      </main>
    </div>
  );
};

export default HomepageLayout;
