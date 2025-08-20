"use client";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";
import { CoverDemo } from "./CoverDemo";
import Link from "next/link";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Launch",
    },
    {
      text: "your",
    },
    {
      text: "coding",
    },
    {
      text: "journey",
    },
    {
      text: "with",
    },
    {
      text: "Academy.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] sm:min-h-screen pt-12 sm:pt-20 pb-6 sm:pb-8 px-4">
      <CoverDemo/>
      <AnimatedTestimonialsDemo/>
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-sm md:text-base mt-10 sm:mt-16">
        Unlock Your Tech Potential With Pro Coders
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-4 mt-4">
        {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:font-bold cursor-pointer">
          Unveil the Secrets
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm cursor-pointer hover:bg-transparent hover:text-white">
          Signup
        </button> */}
        <button className="w-full sm:w-56 lg:w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer">
            <Link href="/Courses">Unveil the Secrets</Link>
          </button>
          <button className="w-full sm:w-56 lg:w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 cursor-pointer">
            <Link href="/Signup">Sign up</Link>
          </button>
      </div>
      <InfiniteMovingCardsDemo/>
    </div>
  );
}
