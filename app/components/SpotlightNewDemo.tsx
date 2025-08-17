"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { BentoGridDemo } from "./BentoGridDemo";

export function SpotlightNewDemo() {
  return (
    <div className="h-[40rem] sm:h-[50rem] md:h-[60rem] lg:h-[80rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <BentoGridDemo/>
    </div>
  );
}
