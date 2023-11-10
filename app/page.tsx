"use client";

import Aside from "@/components/aside";
import Menu from "@/components/menu";
import Navbar from "@/components/navbar";
import Previews from "@/components/previews";
import Quill from "@/components/quill";

export default function Home() {
  return (
    <div className="w-full">
      <header className="fixed w-full z-50">
        <Navbar />
      </header>
      <main className="flex flex-row m-0 w-full h-screen">
        <section className="hidden mt-[43px] md:flex flex-col md:w-[250px] bg-[#121314] border-r border-r-[#6363634d] fixed h-screen">
          <Menu />
        </section>
        <section className="flex flex-col items-center w-full overflow-y-auto">
          <div className="mr-margin-minus-menus mt-48">
            <div className="mb-6 flex flex-col items-center 2xl:items-start">
              <h3 className="text-2xl xl:text-4xl 2xl:text-5xl font-light text-[#b5b6ba] text-center">
                <span className="text-white font-normal">Capture</span> at the
                speed of thought
              </h3>
              <p className="mt-3 text-[#b5b6ba8e] font-light text-center xl:text-left">
                {" "}
                Hey User, Start organizing your digital workspace in a{" "}
                <span className="text-gray-300 font-normal">
                  lazier
                </span> way.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center 2xl:items-start">
              <Quill />
            </div>
          </div>
          <div className="w-previews-width mr-margin-minus-menus z-20">
            <Previews />
          </div>
        </section>
        <section className="hidden mt-[43px] md:flex flex-col w-[350px] bg-[#121314] border-l border-l-[#6363634d] fixed h-screen right-0">
          <Aside />
        </section>
      </main>
    </div>
  );
}
