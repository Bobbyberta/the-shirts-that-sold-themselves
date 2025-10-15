import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function GhostTrails() {
  const [ghosts, setGhosts] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newGhost = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setGhosts((prev) => [...prev.slice(-15), newGhost]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {ghosts.map((ghost, index) => (
        <motion.div
          key={ghost.id}
          className="absolute"
          style={{
            left: ghost.x,
            top: ghost.y,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <motion.div
            className="w-8 h-12 bg-gradient-to-b from-neonmint/40 to-transparent rounded-full blur-sm"
            animate={{
              opacity: [0.6, 0],
              scale: [1, 1.5],
              y: [0, -30],
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

