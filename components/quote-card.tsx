"use client";

import { cn } from "@/lib/utils";

const positions = [
  "self-start",
  "self-center",
  "self-end",
  "self-start sm:translate-x-8",   // safe on mobile: no translate on xs
  "self-end sm:-translate-x-8",
];

const colors = [
  "text-orange-400",
  "text-yellow-300",
  "text-red-400",
  "text-amber-300",
  "text-orange-300",
];

const rotations = [
  "-rotate-3",
  "rotate-0",
  "rotate-3",
  "-rotate-2",
  "rotate-2",
];

export function QuoteCard({ quote, index }: { quote: string; index: number }) {
  const pos = positions[index % positions.length];
  const color = colors[index % colors.length];
  const rotation = rotations[index % rotations.length];

  return (
    <div
      className={cn(
        // Layout
        "flex w-full",
        // Position card within the flex row
        pos.includes("self-end") && "justify-end",
        pos.includes("self-center") && "justify-center",
      )}
    >
      <div
        className={cn(
          // Size — wider on mobile so text isn't cramped
          "w-[92%] sm:w-[75%] md:w-[62%]",
          // Glassmorphism — use bg-opacity instead of backdrop-blur for perf
          "bg-black/50 border border-white/15 rounded-xl",
          // Subtle hover
          "transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]",
          // Rotation
          rotation,
          // Offset only on sm+
          pos.includes("translate-x-8") && "sm:translate-x-8",
          pos.includes("-translate-x-8") && "sm:-translate-x-8",
        )}
      >
        <div className="p-3 sm:p-4">
          <p
            className={cn(
              "font-bold italic text-center leading-snug",
              // Responsive text: smaller base so long quotes don't overflow
              "text-base sm:text-xl md:text-2xl lg:text-3xl",
              "drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]",
              color,
            )}
          >
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
}
