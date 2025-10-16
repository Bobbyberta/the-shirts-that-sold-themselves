"use client";
import { motion } from "framer-motion";

export default function TitlePage({ onStart }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-neutral-50 via-gray-100 to-neutral-200 flex flex-col items-center justify-center">
      {/* Background visual elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gray-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gray-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gray-500 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gray-400 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main title content */}
      <motion.div
        className="w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-full max-w-prose">
          {/* Main title */}
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 text-gray-900 text-left"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            The Shirts That Sold Themselves
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-serif text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 leading-relaxed text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            A digital story about machines, money, and the cotton that connected them
          </motion.p>

          {/* Play button */}
          <motion.button
            onClick={onStart}
            className="group relative px-12 py-4 bg-gray-900 text-white font-serif text-lg md:text-xl rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Begin Story
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* Navigation instructions */}
      <motion.div
        className="absolute bottom-6 left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:max-w-6xl lg:w-full lg:px-4 text-xs text-gray-600 font-mono select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        ← → to navigate • space to advance
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-8 left-8 text-xs text-gray-500 font-mono opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Interactive Story Experience
      </motion.div>

      <motion.div
        className="absolute top-8 right-8 text-xs text-gray-500 font-mono opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        10 Chapters
      </motion.div>
    </div>
  );
}
