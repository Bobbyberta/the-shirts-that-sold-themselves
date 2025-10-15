import { motion } from "framer-motion";

export default function SlowPan() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-40">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #ddd 0px, #ddd 2px, transparent 2px, transparent 50px)",
          backgroundSize: "50px 100%",
        }}
        animate={{
          x: [0, -500],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-full h-full"
        initial={{ scale: 1 }}
        animate={{ scale: 1.3 }}
        transition={{
          duration: 10,
          ease: "easeOut",
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-24 border border-gray-400 opacity-20"
            style={{
              left: `${(i % 5) * 20}%`,
              top: `${Math.floor(i / 5) * 25}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

