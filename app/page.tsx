"use client";

import Aside from "@/components/aside";
import Menu from "@/components/menu";
import Navbar from "@/components/navbar";
import Quill from "@/components/quill";

export default function Home() {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-row m-0 justify-between h-screen-minus-40">
        <section className="hidden md:flex flex-col md:w-[270px] bg-[#121314] border-r border-r-[#6363634d]">
          <Menu />
        </section>
        <section className="flex max-h-screen flex-col items-center px-2 pt-24">
          <div className="mx-12 mb-6 flex flex-col items-center 2xl:items-start">
            <h3 className="text-2xl xl:text-4xl 2xl:text-5xl font-light text-[#b5b6ba] text-center"><span className="text-white font-normal">Capture</span> at the speed of thought</h3>
            <p className="mt-3 text-[#b5b6ba8e] font-light text-center xl:text-left"> Hey User, Start organizing your digital workspace in a <span className="text-gray-300 font-normal">lazier</span> way. </p>
          </div>
          <div className="flex flex-col items-center">
          <Quill />
          </div>
        </section>
        <section className="hidden md:flex flex-col w-[300px] bg-[#121314] border-l border-l-[#6363634d]">
          <Aside />
        </section>
      </main>
    </div>
  );
}
