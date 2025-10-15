import { motion } from "framer-motion";

export default function WhiteFade() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            mixBlendMode: "overlay",
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

