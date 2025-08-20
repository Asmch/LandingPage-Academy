import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Full-Stack Developer!", "Data Scientist!", "App Developer!", "AI Engineer!", "Devops Engineer!","UI-UX Designer!"];

  return (
    <div className="h-auto flex justify-center items-center px-2 sm:px-4">
      <div className="text-base sm:text-2xl md:text-3xl lg:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center leading-snug">
        Kickstart your journey 
        <FlipWords words={words} /> <br />
        <div className="text-center">with <span>Academy</span></div>
      </div>
    </div>
  );
}

