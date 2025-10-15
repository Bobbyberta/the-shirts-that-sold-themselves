import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function DroneDelivery() {
  const [drones, setDrones] = useState([]);
  const [deliveryPaths, setDeliveryPaths] = useState([]);
  const [digitalSignatures, setDigitalSignatures] = useState([]);

  useEffect(() => {
    // Generate drones with different flight patterns
    const droneData = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: Math.random() * 100,
      endY: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 8 + Math.random() * 4,
      size: 8 + Math.random() * 4,
    }));
    setDrones(droneData);

    // Generate delivery paths (invisible lines between points)
    const pathData = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: Math.random() * 100,
      endY: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setDeliveryPaths(pathData);

    // Generate digital signatures that appear and fade
    const signatureData = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 2,
    }));
    setDigitalSignatures(signatureData);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Delivery paths - subtle lines connecting delivery points */}
      {deliveryPaths.map((path) => (
        <motion.div
          key={`path-${path.id}`}
          className="absolute bg-gray-200/20"
          style={{
            left: `${Math.min(path.startX, path.endX)}%`,
            top: `${Math.min(path.startY, path.endY)}%`,
            width: `${Math.abs(path.endX - path.startX)}%`,
            height: "1px",
            transformOrigin: "left center",
            transform: `rotate(${Math.atan2(path.endY - path.startY, path.endX - path.startX) * 180 / Math.PI}deg)`,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.3 }}
          transition={{
            duration: 1,
            delay: path.delay,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      ))}

      {/* Flying drones */}
      {drones.map((drone) => (
        <motion.div
          key={`drone-${drone.id}`}
          className="absolute bg-gray-400 rounded-full shadow-lg"
          style={{
            width: `${drone.size}px`,
            height: `${drone.size}px`,
            left: `${drone.startX}%`,
            top: `${drone.startY}%`,
          }}
          animate={{
            x: [`0%`, `${drone.endX - drone.startX}%`],
            y: [`0%`, `${drone.endY - drone.startY}%`],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: drone.duration,
            delay: drone.delay,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        >
          {/* Drone propellers */}
          <motion.div
            className="absolute inset-0 border border-gray-300 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      ))}

      {/* Digital signatures appearing and disappearing */}
      {digitalSignatures.map((signature) => (
        <motion.div
          key={`signature-${signature.id}`}
          className="absolute text-gray-300 font-mono text-xs"
          style={{
            left: `${signature.x}%`,
            top: `${signature.y}%`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: signature.duration,
            delay: signature.delay,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
        >
          {Math.random() > 0.5 ? "✓" : "✗"}
        </motion.div>
      ))}

      {/* Photographic flash effects */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`flash-${i}`}
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{
            duration: 0.1,
            delay: Math.random() * 8,
            repeat: Infinity,
            repeatDelay: 6,
          }}
        />
      ))}

      {/* Grid pattern representing digital surveillance */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating data points representing satisfaction metrics */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`data-${i}`}
          className="absolute bg-green-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
