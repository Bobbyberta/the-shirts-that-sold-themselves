import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorTrail() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prev) => {
        const updated = [...prev, newTrail];
        // Keep only last 20 trails
        return updated.slice(-20);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            className="absolute"
            style={{
              left: trail.x,
              top: trail.y,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-radial from-neonmint/40 to-transparent blur-sm" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

