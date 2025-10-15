import { motion } from "framer-motion";
import { useState } from "react";

export default function StoryInspiration({ onBackToCredits, onRestart }) {
  const [isQuoteExpanded, setIsQuoteExpanded] = useState(false);
  
  const inspirationQuote = {
    text: "...passing a Modern Turning Test would involve something like the following: an AI being able to successfully act on the instruction \"Go make $1 million on Amazon in a few months with just a $100,000 investment.\" It might research the web to look at whats' trending, find what's hot and what's not on Amazon Marketplace; generate a range of images and blueprints of possible products; send themto a drop-ship manufactturer it found on Alibaba; email back and forth to refine the requirements and agree on the contract; design a seller's listing; and continually update the marketing materials and product designs based on buyer feedback...I think it will be done with a few minor human interventions within the next year, and probably fully autonomously within three to five years.",
    source: "The Coming Wave: AI, Power and Our Future",
    author: "Mustafa Suleyman",
    year: "Published in Vintage 2024"
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="min-h-full flex items-center justify-center py-8">
        <motion.div
          className="text-center space-y-8 max-w-4xl px-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h1 className="font-serif text-3xl md:text-5xl text-gray-800 mb-4">
            Story Inspiration
          </h1>
          <p className="font-mono text-sm text-gray-500 italic">
            The Vision Behind The Cotton Ghost
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <div className="bg-gray-50 border-l-4 border-gray-300 p-8 rounded-r-lg text-left">
            <motion.p 
              className="font-serif text-gray-700 leading-relaxed text-base mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              {isQuoteExpanded ? inspirationQuote.text : `${inspirationQuote.text.substring(0, 200)}...`}
            </motion.p>
            
            <motion.button
              className="mb-6 text-sm font-mono text-gray-500 hover:text-gray-700 transition-colors underline"
              onClick={() => setIsQuoteExpanded(!isQuoteExpanded)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {isQuoteExpanded ? "show less" : "read full quote"}
            </motion.button>
            
            <motion.div
              className="pt-6 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
            >
              <p className="font-mono text-sm text-gray-500 mb-2">
                — {inspirationQuote.source}
              </p>
              <p className="font-mono text-sm text-gray-500 mb-1">
                {inspirationQuote.author}
              </p>
              <p className="font-mono text-xs text-gray-400">
                {inspirationQuote.year}
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          <motion.button
            className="px-8 py-3 border border-gray-300 rounded-full font-mono text-sm text-gray-600 hover:bg-gray-50 transition-colors"
            onClick={onBackToCredits}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← back to credits
          </motion.button>
          
          <motion.button
            className="px-8 py-3 border border-gray-300 rounded-full font-mono text-sm text-gray-600 hover:bg-gray-50 transition-colors"
            onClick={onRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            restart story →
          </motion.button>
        </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
