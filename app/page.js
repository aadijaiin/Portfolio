"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import {CardHover} from "@/components/CardHover";
import StickyScrollcomp from "./components/StickyScrollcomp";
import Navbar from "./components/Navbar";
import Bgbox from "./components/Bgbox";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import FavoriteSong from "@/components/FavoriteSong";



const Page = () => {
  return (
    <div className="overflow-x-hidden">
  <Navbar />
  {/* Section 1: Intro */}
  <section id="Home" className="h-screen flex items-center justify-center bg-black sm:bg-transparent">
    <BackgroundLines
      className="p-8 flex flex-col justify-center items-center"
      svgOptions={{ stroke: "blue", strokeWidth: 5 }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Hello World!, I am
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 w-full mt-4 drop-shadow-lg">
          <FlipWords words={["Aadi Jain", "A Developer"]} duration={2000} />
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4 max-w-xl sm:max-w-2xl mx-auto">
          From concept to code, I create high-performance web apps with React and Next.js. Check out my portfolio!
        </p>
      </div>
    </BackgroundLines>
  </section>




      
      {/* Section 2: About */}
      <section id="About" >
        <StickyScrollcomp />
      </section>
      <section id="projects" className="min-h-screen w-screen bg-black bg-grid-white/[0.12] flex justify-center items-center flex-wrap">

      <CardHover />

      </section>
    {/* <Bgbox /> */}
    <section id='vibe'>
    <BackgroundBeamsWithCollision >

      <FavoriteSong />
      
    </ BackgroundBeamsWithCollision >
    </section>
      

      
    </div>
  );
};

export default Page;