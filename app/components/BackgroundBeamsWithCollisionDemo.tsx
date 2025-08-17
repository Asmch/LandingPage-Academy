import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";
import { LampDemo } from "./LampDemo";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";
import { SparklesPreview } from "./SparklesPreview";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <TypewriterEffectSmoothDemo/>
    </BackgroundBeamsWithCollision>
  );
}
