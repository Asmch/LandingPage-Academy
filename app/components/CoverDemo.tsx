import React from "react";
import { Cover } from "./ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 -mt-20 bg-clip-text text-transparent  dark:via-white dark:to-white">
        Our <br /> at <Cover>Testimonials</Cover>
      </h1>
    </div>
  );
}
