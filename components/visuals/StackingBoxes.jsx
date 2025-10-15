import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function StackingBoxes() {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoxes((prev) => {
        if (prev.length >= 30) return prev;
        return [
          ...prev,
          {
            id: Date.now() + Math.random(),
            x: Math.random() * 90,
            y: Math.random() * 90,
            size: 30 + Math.random() * 40,
            rotation: Math.random() * 360,
          },
        ];
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {boxes.map((box) => (
        <motion.div
          key={box.id}
          className="absolute border-2 border-gray-400"
          style={{
            left: `${box.x}%`,
            top: `${box.y}%`,
            width: box.size,
            height: box.size,
          }}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={{
            scale: 1,
            opacity: [0, 0.6, 0.4],
            rotate: box.rotation,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

