"use client";

import { motion } from "motion/react";
import { NavbarDemo } from "../NavbarDemo";
import { BackgroundBeams } from "./background-beams";
import { AnimatedTooltipPreview } from "../AnimatedTooltipPreview";
import { FlipWordsDemo } from "../FlipWordsDemo";
import { FeaturesSectionDemo } from "../FeaturesSectionDemo";
import Link from "next/link";

export function HeroSectionOne() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center min-h-screen">
      <Navbar />
      <BackgroundBeams />

      {/* Gradient Lines (keep as is) */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="px-3 sm:px-4 py-8 sm:py-16 md:py-20 mt-8 sm:mt-20">
        {/* Title */}
        <h1 className="relative z-10 tracking-wide leading-tight mx-auto max-w-5xl text-center text-xl font-bold text-slate-700 sm:text-4xl md:text-5xl lg:text-7xl dark:text-slate-300">
          {"Fast-Track Your Learning with Expert Mentors"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-lg sm:max-w-2xl px-2 text-center text-sm sm:text-base md:text-lg font-normal 
        text-neutral-600 dark:text-neutral-400 mt-3 sm:mt-4" 
        >
          "Transform your career with our industry-leading coding programs — 
          master today’s most in-demand tech skills and step confidently into 
          high-paying, future-ready roles."
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={"/Courses"}
            className="w-full sm:w-48 lg:w-60 text-center transform rounded-lg bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Explore Now
          </Link>
          <Link
            href={"/Signup"}
            className="w-full sm:w-48 lg:w-60 text-center transform rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Extra Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-12 sm:mt-20 lg:mt-32"
        >
          <FlipWordsDemo />
          <AnimatedTooltipPreview />
        </motion.div>

        <FeaturesSectionDemo />
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-4 py-4">
      <NavbarDemo />
    </nav>
  );
};
