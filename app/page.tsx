import { HeroSectionOne } from "./components/ui/HeroSectionOne";
import { TypewriterEffectSmoothDemo } from "./components/TypewriterEffectSmoothDemo";
import { BentoGridDemo } from "./components/BentoGridDemo";
import { SpotlightNewDemo } from "./components/SpotlightNewDemo";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import { LampDemo } from "./components/LampDemo";
import { ShootingStarsAndStarsBackgroundDemo } from "./components/ShootingStarsAndStarsBackgroundDemo";

export default function Home() {
  return (
    <div>
      <HeroSectionOne/>
      <SpotlightNewDemo/>
      <BackgroundBeamsWithCollisionDemo/>
      <ShootingStarsAndStarsBackgroundDemo/>
    </div>
    
  );
}
