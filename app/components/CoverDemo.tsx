import React from "react";
import { Cover } from "./ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 mt-6 sm:mt-4 md:mt-0 px-4 bg-clip-text text-transparent dark:via-white dark:to-white">
        Our <br /> at <Cover>Testimonials</Cover>
      </h1>
    </div>
  );
}
