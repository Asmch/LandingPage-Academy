import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { TextHoverEffectDemo } from "./TextHoverEffectDemo";

export function BentoGridDemo() {
  return (
    <div className="relative z-[20] px-2 sm:px-4">
      <TextHoverEffectDemo />
      <BentoGrid className="max-w-6xl mx-auto mt-6 sm:mt-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            src={item.src}
            className={i === 3 || i === 6 ? "sm:col-span-2 md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />
);

const items = [
  {
    title: "Full-Stack Web Development",
    description: "Create web apps using React and Node.js.",
    src:
      "https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "UI-UX Designer",
    description: "Learn UI/UX and prototyping with Figma and Adobe XD.",
    src:
      "https://images.unsplash.com/photo-1633355444143-bc2fffac972d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cybersecurity Analyst",
    description: "SecOps, network security, penetration testing.",
    src:
      "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI/ML Engineer",
    description: "Deep learning frameworks, NLP, computer vision.",
    src:
      "https://images.unsplash.com/photo-1678995632928-298d05d41671?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Data Scientist",
    description: "Python for data, ML, visualization, big data.",
    src:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mobile Developer",
    description: "Cross-platform mobile: React Native, Flutter.",
    src:
      "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "DevOps Engineer",
    description:
      "Automate CI/CD pipelines, manage cloud platforms to deliver reliable software faster.",
    src:
      "https://images.unsplash.com/photo-1564798605859-a4ab4a561b2a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
