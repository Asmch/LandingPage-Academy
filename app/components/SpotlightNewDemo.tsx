"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { BentoGridDemo } from "./BentoGridDemo";

export function SpotlightNewDemo() {
  return (
    <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[90vh] w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <BentoGridDemo/>
    </div>
  );
}

