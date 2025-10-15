import { motion } from "framer-motion";

export default function GreyClouds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Pulsing grey background */}
      <motion.div
        className="absolute inset-0 bg-gray-400"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          backgroundColor: [
            "rgba(156, 163, 175, 0.1)", // gray-400
            "rgba(107, 114, 128, 0.3)", // gray-500
            "rgba(75, 85, 99, 0.2)",     // gray-600
            "rgba(107, 114, 128, 0.3)", // gray-500
            "rgba(156, 163, 175, 0.1)", // gray-400
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary pulsing layer */}
      <motion.div
        className="absolute inset-0 bg-gray-500"
        animate={{
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Tertiary pulsing layer */}
      <motion.div
        className="absolute inset-0 bg-gray-600"
        animate={{
          opacity: [0, 0.15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}
