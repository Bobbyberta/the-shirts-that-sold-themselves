import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function RainAnimation() {
  const [rainDrops, setRainDrops] = useState([]);

  useEffect(() => {
    // Generate rain drops
    const drops = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 1.5 + Math.random() * 1,
      opacity: 0.1 + Math.random() * 0.3,
      length: 20 + Math.random() * 40,
    }));
    setRainDrops(drops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {rainDrops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute bg-gray-300"
          style={{
            left: `${drop.x}%`,
            top: "-10%",
            width: "1px",
            height: `${drop.length}px`,
            opacity: drop.opacity,
          }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0, drop.opacity, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Subtle water droplets on screen */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`droplet-${i}`}
          className="absolute bg-white/20 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
