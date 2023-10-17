"use client";

import Menu from "@/components/menu";
import Navbar from "@/components/navbar";
import Quill from "@/components/quill";

export default function Home() {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-row m-0 justify-between">
        <section className="w-[270px] bg-[#121314] border-r border-r-[#6363634d]">
          <Menu />
        </section>
        <section className="flex min-h-screen flex-col items-center p-24">
          <Quill />
        </section>
      </main>
    </div>
  );
}
