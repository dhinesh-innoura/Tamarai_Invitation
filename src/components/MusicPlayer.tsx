"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function handlePlay() {
      hasStartedRef.current = true;
      setPlaying(true);
    }
    function handlePause() {
      setPlaying(false);
    }

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    function attemptAutoplay() {
      if (hasStartedRef.current || !audio) return;
      audio.play().catch(() => {});
    }

    attemptAutoplay();
    window.addEventListener("invitation:open", attemptAutoplay);
    document.addEventListener("click", attemptAutoplay, { once: true });

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      window.removeEventListener("invitation:open", attemptAutoplay);
      document.removeEventListener("click", attemptAutoplay);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
    } else {
      hasStartedRef.current = true;
      audio.play().catch(() => {});
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/wedding-song.mp3" loop preload="auto" />
      <motion.button
        onClick={toggle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed right-4 top-4 z-[60] flex h-11 w-11 items-center justify-center rounded-full bg-[var(--maroon)] text-[var(--cream)] shadow-lg sm:right-6 sm:top-6 sm:h-12 sm:w-12"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <rect x="5" y="4" width="5" height="16" rx="1" />
            <rect x="14" y="4" width="5" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4l15 8-15 8V4z" />
          </svg>
        )}
      </motion.button>
    </>
  );
}
