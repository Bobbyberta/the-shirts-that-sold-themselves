import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ConfettiGlitch() {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    // Generate confetti
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: ["#C4FCEF", "#FFDDE1", "#A8E6CF", "#EDEBE9"][
        Math.floor(Math.random() * 4)
      ],
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
            top: "-10%",
          }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [0, 360, 720],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

