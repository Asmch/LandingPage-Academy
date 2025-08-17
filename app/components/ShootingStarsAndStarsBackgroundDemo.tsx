"use client";
import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-[5rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <ShootingStars />
      <StarsBackground />

      {/* Footer Content */}
      <footer className="absolute bottom-2 text-center text-gray-300 text-sm">
        <p>
          © {new Date().getFullYear()} Academy Built with ❤️ by Asmita
        </p>
        <div className="flex justify-center gap-4 mt-1">
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
