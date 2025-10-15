import { motion } from "framer-motion";

export default function WeaveAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
          style={{
            width: "200%",
            left: "-50%",
            top: `${i * 5}%`,
          }}
          animate={{
            x: ["-10%", "10%", "-10%"],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          style={{
            height: "200%",
            top: "-50%",
            left: `${i * 7}%`,
          }}
          animate={{
            y: ["-10%", "10%", "-10%"],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 10 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

