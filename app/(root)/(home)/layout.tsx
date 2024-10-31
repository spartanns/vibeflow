"use client";
import MusicPlayer from "@/components/MusicPlayer";
import Searchbar from "@/components/Searchbar";
import Sidebar from "@/components/Sidebar";
import TopPlay from "@/components/TopPlay";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider, useSelector } from "react-redux";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <Provider store={store}>
      <section className="relative flex">
        <Sidebar />
        <article className="flex flex-col flex-1 bg-gradient-to-br from-black to-[#082F49]">

          <Searchbar />
          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              {children}
            </div>
            <div className="xl:sticky relative top-0 h-fit">
              <TopPlay />
            </div>
          </div>
        </article>

        {activeSong?.album?.name && (
          <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#082F49] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}
      </section>
    </Provider>
  );
};

export default HomeLayout;
