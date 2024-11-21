"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import Meteorscomp from "@/components/Meteorscomp";
import LinkPreviewcomp from "./components/LinkPreviewcomp";
import { LinkPreview } from "./components/ui/link-preview";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
  GlowingStarsDescription,
} from "./components/ui/glowing-stars";
import StickyScrollcomp from "./components/StickyScrollcomp";
import Navbar from "./components/Navbar";

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* Section 1: Intro */}
      <section id="Home" className="h-screen">
        <BackgroundLines
          className="p-8 flex flex-col justify-center items-center"
          svgOptions={{ stroke: "blue", strokeWidth: 5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Hello World!, I am
            </h1>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 w-full mt-4 drop-shadow-lg">
              <FlipWords words={["Aadi Jain", "A Developer"]} duration={2000} />
            </h1>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              From concept to code, I create high-performance web apps with React
              and Next.js. Check out my portfolio!
            </p>
          </div>
        </BackgroundLines>
      </section>
      
      {/* Section 2: About */}
      <section id="About" className="min-h-screen">
        <StickyScrollcomp />
      </section>

      {/* Section 3: Projects */}
      <section
        className="relative min-h-screen w-screen bg-black flex justify-center items-center "
        id="Projects"
      >
        <Meteorscomp />
        <LinkPreviewcomp />
      </section>
    </div>
  );
};

export default Page;
