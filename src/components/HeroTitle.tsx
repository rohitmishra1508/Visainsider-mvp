"use client";

import { useEffect, useState, useCallback } from "react";

const WORDS = ["Made Simple.", "Faster.", "Stress-free."];
const TYPING_SPEED = 100; // ms per character
const DELETING_SPEED = 50; // ms per character
const PAUSE_DURATION = 2000; // ms to pause after completing a word
const DELETE_PAUSE = 1000; // ms to pause before deleting

export default function HeroTitle() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const typeWriter = useCallback(() => {
    const currentWord = WORDS[currentWordIndex];

    if (isPaused) {
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, isDeleting ? DELETE_PAUSE : PAUSE_DURATION);
      return;
    }

    if (isDeleting) {
      // Deleting characters
      if (currentText.length > 0) {
        setCurrentText(currentText.slice(0, -1));
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
      }
    } else {
      // Typing characters
      if (currentText.length < currentWord.length) {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true);
      }
    }
  }, [currentWordIndex, currentText, isDeleting, isPaused]);

  useEffect(() => {
    const timer = setTimeout(
      typeWriter,
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timer);
  }, [typeWriter, isDeleting]);

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
      <span className="text-slate-900">Your Visa Journey. </span>
      <span className="relative">
        <span
          className={[
            "inline-block transform transition-all duration-300",
            "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600",
            "bg-clip-text text-transparent"
          ].join(" ")}
          aria-live="polite"
          aria-label={`Current message: ${currentText}`}
        >
          {currentText}
        </span>
        <span
          className="absolute right-0 top-0 inline-block w-0.5 h-[1em] bg-blue-600 animate-pulse"
          aria-hidden="true"
        />
      </span>
    </h1>
  );
}
