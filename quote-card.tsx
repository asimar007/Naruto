"use client";

import { Card, CardContent } from "@/components/ui/card";

export function QuoteCard({ quote, index }: { quote: string; index: number }) {
  // Different styles for different positions
  const positions = [
    "self-start", // left
    "self-center", // center
    "self-end", // right
    "self-start translate-x-12", // slightly right of left
    "self-end -translate-x-12", // slightly left of right
  ];

  const colors = [
    "text-orange-400",
    "text-yellow-300",
    "text-red-400",
    "text-amber-300",
    "text-orange-300",
  ];

  const rotations = [
    "-rotate-6",
    "rotate-0",
    "rotate-6",
    "-rotate-3",
    "rotate-3",
  ];

  return (
    <Card
      className={`
        ${positions[index % positions.length]}
        ${rotations[index % rotations.length]}
        bg-black/40 backdrop-blur-md hover:bg-black/50 
        transition-all duration-300 hover:scale-105
        w-[80%] sm:w-[70%] md:w-[60%]
        border-t border-white/20
      `}
    >
      <CardContent className="p-4">
        <p
          className={`
          font-ninja text-2xl sm:text-3xl md:text-4xl 
          font-bold italic text-center
          ${colors[index % colors.length]}
          drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
        `}
        >
          {quote}
        </p>
      </CardContent>
    </Card>
  );
}
