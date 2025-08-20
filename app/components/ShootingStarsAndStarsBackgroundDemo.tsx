"use client";
import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="min-h-[6rem] sm:min-h-[8rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full px-4">
      <ShootingStars />
      <StarsBackground />

      {/* Footer Content */}
      <footer className="absolute bottom-2 text-center text-gray-300 text-xs sm:text-sm">
        <p>
          © {new Date().getFullYear()} Academy Built with ❤️ by Asmita
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-1">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Terms
          </a>
          <a
            href="/Contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

