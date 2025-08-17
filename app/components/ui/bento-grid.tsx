import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 " +
          "gap-3 sm:gap-4 auto-rows-[10rem] sm:auto-rows-[12rem] md:auto-rows-[16rem] lg:auto-rows-[18rem] px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  src,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  src?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 " +
          "rounded-xl border border-neutral-200 bg-white p-3 sm:p-4 md:p-5 " +
          "transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={typeof title === "string" ? title : "Card image"}
          width={800}
          height={450}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="rounded-xl object-cover w-full h-32 sm:h-36 md:h-40 lg:h-48 mb-2"
        />
      ) : (
        header
      )}

      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200 text-sm sm:text-base md:text-lg">
          {title}
        </div>
        <div className="font-sans text-[11px] sm:text-xs md:text-sm font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
