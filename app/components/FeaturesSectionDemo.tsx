import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for Future Coders",
      description:
        "Helping coders launch and grow their tech careers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Modern Stack Architecture",
      description: "Train with tools used by leading tech companies.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Personal Mentor Support",
      description:
        "Get guidance from experts whenever you need it.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Effortless Learning",
      description:
        "Intuitive, beginner‑friendly platform to start coding fast.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Everything at affordable price.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Job Guarantee",
      description: "Land a tech job or we’ll keep helping you for free.",
      icon: <IconCloud />,
    },
    
    {
      title: "Always Accessible",
      description:
        "24/7 learning from anywhere, anytime.",
      icon: <IconHelp />,
    },
    
    {
      title: "And everything else",
      description: "Lifetime access, interview prep, and a vibrant community.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10 py-6 sm:py-8 md:py-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-4 sm:px-6 md:px-8 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
        <div className="text-xl sm:text-2xl md:text-3xl">
        {icon}
        </div>
      </div>
      <div className="text-sm sm:text-base md:text-lg font-bold mb-2 relative z-10 px-4 sm:px-6 md:px-8">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-4 sm:px-6 md:px-8 leading-snug">
        {description}
      </p>
    </div>
  );
};
