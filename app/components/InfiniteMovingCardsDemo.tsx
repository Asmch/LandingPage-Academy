"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased -mt-30 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
  quote: "The people who are crazy enough to think they can change the world are the ones who do.",
  name: "Steve Jobs",
  title: "Co-founder of Apple",
},
{
  quote: "Any sufficiently advanced technology is indistinguishable from magic.",
  name: "Arthur C. Clarke",
  title: "Science Fiction Writer & Futurist",
},
{
  quote: "Your most unhappy customers are your greatest source of learning.",
  name: "Bill Gates",
  title: "Co-founder of Microsoft",
},
{
  quote: "First, solve the problem. Then, write the code.",
  name: "John Johnson",
  title: "Computer Scientist",
},
{
  quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
  name: "Harold Abelson",
  title: "Computer Scientist, MIT",
},
{
  quote: "Talk is cheap. Show me the code.",
  name: "Linus Torvalds",
  title: "Creator of Linux & Git",
},
{
  quote: "Code is like humor. When you have to explain it, it’s bad.",
  name: "Cory House",
  title: "Software Architect",
},
{
  quote: "Technology is best when it brings people together.",
  name: "Matt Mullenweg",
  title: "Founder of WordPress",
},

];
