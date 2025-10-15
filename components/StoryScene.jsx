"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { storySections } from "@/data/storyData";
import { visualComponents } from "./visuals";
import SoundControl from "./SoundControl";
import CursorTrail from "./CursorTrail";
import Credits from "./Credits";
import { Howl } from "howler";

export default function StoryScene() {
  const [index, setIndex] = useState(0);
  const [showLog, setShowLog] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const currentAudioRef = useRef(null);
  const autoAdvanceTimerRef = useRef(null);

  const current = storySections[index];
  const isLastSection = index === storySections.length - 1;

  // Get visual component for current section
  const VisualComponent = current.visuals?.[0]
    ? visualComponents[current.visuals[0]]
    : null;

  // Show cursor trail for sections 4 and 9
  const showCursorTrail = current.id === 4 || current.id === 9;

  // Handle audio playback with Howler
  useEffect(() => {
    // Stop previous audio
    if (currentAudioRef.current) {
      currentAudioRef.current.fade(currentAudioRef.current.volume(), 0, 500);
      setTimeout(() => {
        currentAudioRef.current?.stop();
      }, 500);
    }

    // Play new audio if not muted
    if (current.audio && !isMuted) {
      try {
        currentAudioRef.current = new Howl({
          src: [`/audio/${current.audio}`],
          loop: true,
          volume: 0.15,
          onloaderror: (id, error) => {
            console.warn(`Audio load error for ${current.audio}:`, error);
          },
          onplayerror: (id, error) => {
            console.warn(`Audio play error for ${current.audio}:`, error);
          },
        });
        currentAudioRef.current.play();
      } catch (error) {
        console.warn("Audio playback not available:", error);
      }
    }

    // Show logs after delay
    const logTimer = setTimeout(() => setShowLog(true), 1000);

    return () => {
      setShowLog(false);
      clearTimeout(logTimer);
    };
  }, [index, current.audio, isMuted]);

  // Handle auto-advance
  useEffect(() => {
    if (autoAdvance && !isLastSection) {
      autoAdvanceTimerRef.current = setTimeout(() => {
        next();
      }, 8000);
    }

    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, [autoAdvance, index, isLastSection]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (currentAudioRef.current) {
        currentAudioRef.current.stop();
      }
    };
  }, []);

  // Navigation functions
  const next = () => {
    if (index + 1 < storySections.length) {
      setIndex((i) => i + 1);
    } else {
      // Show credits after last section
      setShowCredits(true);
    }
  };

  const previous = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
    }
  };

  const restart = () => {
    setIndex(0);
    setShowCredits(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        previous();
      } else if (e.key === "a") {
        setAutoAdvance((prev) => !prev);
      } else if (e.key === "m") {
        setIsMuted((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  // Handle scroll navigation
  useEffect(() => {
    let scrollTimeout;
    const handleWheel = (e) => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          next();
        } else if (e.deltaY < 0) {
          previous();
        }
      }, 150);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [index]);

  // Mute/unmute handler
  const handleToggleMute = () => {
    setIsMuted((prev) => !prev);
    if (currentAudioRef.current) {
      if (!isMuted) {
        currentAudioRef.current.fade(currentAudioRef.current.volume(), 0, 300);
      } else {
        currentAudioRef.current.fade(0, 0.15, 300);
      }
    }
  };

  if (showCredits) {
    return <Credits onRestart={restart} />;
  }

  return (
    <div
      className="relative w-screen h-screen overflow-hidden transition-colors duration-1000"
      style={{ backgroundColor: current.themeColor }}
      onClick={next}
    >
      {/* Visual Background */}
      {VisualComponent && <VisualComponent />}

      {/* Cursor Trail for specific sections */}
      {showCursorTrail && <CursorTrail />}

      {/* Sound Control */}
      <SoundControl isMuted={isMuted} onToggle={handleToggleMute} />

      {/* Auto-advance indicator */}
      {autoAdvance && (
        <motion.div
          className="fixed top-6 left-6 z-50 px-3 py-2 bg-neonmint/20 backdrop-blur-sm rounded-full text-xs font-mono text-gray-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          auto-advance: on
        </motion.div>
      )}

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          className="absolute inset-0 flex flex-col items-start justify-center p-6 text-left z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.8 } }}
        >
          <motion.h2
            className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {current.title}
          </motion.h2>
          <motion.p
            className="font-serif text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed text-gray-800 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {current.text}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      {/* Machine log overlay */}
      <AnimatePresence>
        {showLog && current.machineLogs && (
          <motion.div
            key={`logs-${current.id}`}
            className="absolute bottom-6 left-6 text-left font-mono text-sm z-20"
            style={{ color: "rgba(168, 230, 207, 0.8)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {current.machineLogs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: [0, 1, 1, 0.7],
                  y: 0,
                  transition: { delay: i * 0.8, duration: 0.6 },
                }}
              >
                {log}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-4 z-20">
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            setAutoAdvance((prev) => !prev);
          }}
          className="px-3 py-1 text-xs font-mono text-gray-600 hover:text-gray-900 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          auto: {autoAdvance ? "on" : "off"}
        </motion.button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 3 }}
          className="text-xs text-gray-600 font-mono select-none"
        >
          {index + 1} / {storySections.length}
        </motion.div>
      </div>

      {/* Keyboard shortcuts hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 5 }}
        className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 font-mono select-none"
      >
        ← → to navigate • space to advance • a for auto • m to mute
      </motion.div>
    </div>
  );
}
