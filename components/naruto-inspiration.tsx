"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { QuoteCard } from "./quote-card";
import { useEffect, useRef, useState } from "react";

const quotes = [
  "Believe it!",
  "Hard work is worthless for those that don't believe in themselves.",
  "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be!",
  "When you give up, your dreams and everything else, they're gone.",
  "People's lives don't end when they die, it ends when they lose faith.",
  "The moment people come to know love, they run the risk of carrying hate.",
];

// Animation variants defined once outside the component — no re-creation on render
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = (direction: number) => ({
  hidden: { opacity: 0, x: direction },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
});

export default function NarutoInspiration() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/naruto.mp3");
    audio.volume = 0.2;
    audio.loop = true;
    audioRef.current = audio;

    // Cleanup on unmount
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden">
      {/* Background image — optimized by Next.js */}
      <Image
        src="/naruto.jpg"
        alt="Naruto in a dynamic pose"
        fill
        className="object-cover object-center brightness-75"
        sizes="100vw"
        priority
        quality={75}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* Content layer */}
      <div className="absolute inset-0 z-10 flex flex-col p-4 sm:p-6 md:p-8">
        {/* Audio toggle */}
        <motion.button
          onClick={toggleAudio}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className="absolute top-4 right-4 z-20 bg-orange-500/80 hover:bg-orange-500 p-2.5 rounded-full transition-colors duration-200 touch-manipulation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </motion.button>

        {/* NARUTO badge */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-orange-500 px-3 py-1 sm:px-4 sm:py-2 rounded-full -rotate-12 self-start shrink-0 mb-3 sm:mb-4"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg leading-tight">
            NARUTO
          </h1>
        </motion.div>

        {/* Quotes — scrollable, no overflow clipping content */}
        <motion.div
          className="flex-1 overflow-y-auto overflow-x-hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col gap-4 sm:gap-5 py-2 pb-6">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                custom={index % 2 === 0 ? -60 : 60}
                variants={itemVariants(index % 2 === 0 ? -60 : 60)}
              >
                <QuoteCard quote={quote} index={index} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
