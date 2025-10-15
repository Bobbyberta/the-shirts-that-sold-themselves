import { motion } from "framer-motion";

export default function PulseAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-palepink"
          style={{
            width: 100 + i * 80,
            height: 100 + i * 80,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-palepink"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

