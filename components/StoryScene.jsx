"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { storySections } from "@/data/storyData";
import { visualComponents } from "./visuals";
import SoundControl from "./SoundControl";
import CursorTrail from "./CursorTrail";
import Credits from "./Credits";
import StoryInspiration from "./StoryInspiration";
import TitlePage from "./TitlePage";
import { Howl } from "howler";

export default function StoryScene() {
  const [index, setIndex] = useState(-1); // Start with title page
  const [showLog, setShowLog] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [showInspiration, setShowInspiration] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const currentAudioRef = useRef(null);

  const current = index >= 0 ? storySections[index] : null;
  const isLastSection = index === storySections.length - 1;
  const showTitlePage = index === -1;

  // Get visual component for current section
  const VisualComponent = current?.visuals?.[0]
    ? visualComponents[current.visuals[0]]
    : null;

  // Show cursor trail for sections 4 and 9
  const showCursorTrail = current?.id === 4 || current?.id === 9;

  // Handle audio playback with Howler
  useEffect(() => {
    // Don't play audio on title page
    if (showTitlePage) return;

    // Stop previous audio
    if (currentAudioRef.current) {
      currentAudioRef.current.fade(currentAudioRef.current.volume(), 0, 500);
      setTimeout(() => {
        currentAudioRef.current?.stop();
      }, 500);
    }

    // Play new audio if not muted
    if (current?.audio && !isMuted) {
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
  }, [index, current?.audio, isMuted, showTitlePage]);


  // Show next button with content
  useEffect(() => {
    if (!showTitlePage) {
      setShowNextButton(true);
    } else {
      setShowNextButton(false);
    }
  }, [index, showTitlePage]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (currentAudioRef.current) {
        currentAudioRef.current.stop();
      }
    };
  }, []);

  // Navigation functions
  const startStory = () => {
    setIndex(0);
  };

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
    } else if (index === 0) {
      // Go back to title page from first section
      setIndex(-1);
    }
  };

  const restart = () => {
    setIndex(-1);
    setShowCredits(false);
    setShowInspiration(false);
  };

  const showStoryInspiration = () => {
    setShowInspiration(true);
  };

  const backToCredits = () => {
    setShowInspiration(false);
    setShowCredits(true);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showTitlePage) {
        if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
          e.preventDefault();
          startStory();
        }
        return;
      }

      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        previous();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, showTitlePage]);

  // Handle scroll navigation
  useEffect(() => {
    let scrollTimeout;
    const handleWheel = (e) => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          if (showTitlePage) {
            startStory();
          } else {
            next();
          }
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
  }, [index, showTitlePage]);

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

  if (showTitlePage) {
    return <TitlePage onStart={startStory} />;
  }

  if (showInspiration) {
    return <StoryInspiration onBackToCredits={backToCredits} onRestart={restart} />;
  }

  if (showCredits) {
    return <Credits onRestart={restart} onShowInspiration={showStoryInspiration} />;
  }

  return (
    <div
      className="relative w-screen h-screen overflow-hidden transition-colors duration-1000"
      style={{ backgroundColor: current.themeColor }}
    >
      {/* Visual Background */}
      {VisualComponent && <VisualComponent />}

      {/* Cursor Trail for specific sections */}
      {showCursorTrail && <CursorTrail />}



      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-left z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.8 } }}
        >
          <div className="w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col items-center">
            <div className="w-full max-w-prose">
          <motion.h2
            className="font-serif text-xl md:text-2xl lg:text-3xl mb-6 font-bold text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {current.title}
          </motion.h2>
          <motion.p
            className="font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800 text-balance mb-8 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {current.text}
          </motion.p>
          
          {/* Next Button */}
          <AnimatePresence>
            {showNextButton && (
              <motion.button
                onClick={next}
                className="px-6 py-3 backdrop-blur-sm rounded-full border border-gray-400 transition-all duration-300"
                style={{ 
                  backgroundColor: `${current.themeColor}CC` // Add transparency to theme color
                }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <span className="text-sm">Next</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </motion.button>
            )}
          </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Machine log overlay */}
      <AnimatePresence>
        {showLog && current.machineLogs && (
          <motion.div
            key={`logs-${current.id}`}
            className="absolute bottom-6 left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:max-w-6xl lg:w-full lg:px-4 text-left font-mono text-sm z-20"
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



    </div>
  );
}
