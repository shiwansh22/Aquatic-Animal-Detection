import { motion } from "framer-motion";

const bubbles = new Array(12).fill(0);

export default function Bubbles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">

      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[-50px] bg-cyan-300/30 rounded-full"
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: "-120vh",
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

    </div>
  );
}