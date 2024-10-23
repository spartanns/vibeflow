import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {

  return (
    <section className="relative flex">
      <Sidebar />
      <article className="flex flex-col flex-1 bg-gradient-to-br from-black to-[#082F49]">
        {/* <Search /> */}
        <div className="px-6 h-screen overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            {children}
          </div>
        </div>
      </article>
    </section>
  );
};

export default HomeLayout;
