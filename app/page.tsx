import React from "react";
import { HeroSectionOne } from "./components/ui/HeroSectionOne";
import { SpotlightNewDemo } from "./components/SpotlightNewDemo";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import { ShootingStarsAndStarsBackgroundDemo } from "./components/ShootingStarsAndStarsBackgroundDemo";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSectionOne/>
      <SpotlightNewDemo/>
      <BackgroundBeamsWithCollisionDemo/>
      <ShootingStarsAndStarsBackgroundDemo/>
    </div>
    
  );
}
