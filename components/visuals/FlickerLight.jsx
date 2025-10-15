import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FlickerLight() {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    // Pre-calculate cloud properties for better performance
    const mainClouds = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      grayShade: ["gray-600", "gray-700", "gray-800", "gray-700"][i],
      width: 200 + i * 100,
      height: 120 + i * 50,
      left: -30 + i * 25,
      top: 10 + i * 15,
      duration: 80 + i * 15,
      delay: i * 12,
    }));

    const smallClouds = Array.from({ length: 3 }, (_, i) => ({
      id: `small-${i}`,
      grayShade: ["gray-700", "gray-800", "gray-600"][i],
      width: 100 + i * 30,
      height: 70 + i * 20,
      left: Math.random() * 100,
      top: 20 + i * 20,
      duration: 60 + i * 10,
      delay: i * 8,
    }));

    setClouds([...mainClouds, ...smallClouds]);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-5">
      {/* Light grey background */}
      <div className="absolute inset-0 bg-gray-200/30 z-0"></div>
      
      {/* Optimized cloud animations */}
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className={`absolute bg-${cloud.grayShade}/30 rounded-full blur-2xl z-5`}
          style={{
            width: cloud.width,
            height: cloud.height,
            left: `${cloud.left}%`,
            top: `${cloud.top}%`,
          }}
          animate={{
            x: typeof cloud.id === 'string' && cloud.id.startsWith('small') 
              ? [0, 50, -30, 0] 
              : ["-30vw", "130vw"],
            y: typeof cloud.id === 'string' && cloud.id.startsWith('small') 
              ? [0, -20, 15, 0] 
              : 0,
            opacity: [0, 0.3, 0.3, 0],
            scale: [0.9, 1.05, 1.05, 0.9],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: "linear",
            delay: cloud.delay,
            times: [0, 0.1, 0.9, 1],
          }}
        />
      ))}
    </div>
  );
}