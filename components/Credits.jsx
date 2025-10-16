import { motion } from "framer-motion";

export default function Credits({ onRestart, onShowInspiration }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex items-center justify-center flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.div
        className="w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <div className="w-full max-w-prose space-y-8">
          <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-4 text-left">
            The Cotton Ghost
          </h1>
          <p className="font-mono text-sm text-gray-500 italic text-left">
            A Machine's Dream in Fabric and Code
          </p>

          <motion.div
            className="mt-12 space-y-4 font-serif text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <p className="text-lg text-left">
              The shirt was clean, even if the money wasn't.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 space-y-2 font-mono text-xs text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <p className="text-left">An interactive story experience</p>
            <p className="text-left">Built with Next.js, Framer Motion, and Howler.js</p>
            <p className="pt-4 text-left">© 2035 — The Automated Commerce Project</p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-start items-start mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
          >
            <motion.button
              className="px-8 py-3 border border-gray-300 rounded-full font-mono text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              onClick={onRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              restart story →
            </motion.button>
            
            <motion.button
              className="px-8 py-3 border border-gray-300 rounded-full font-mono text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              onClick={onShowInspiration}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              story inspiration
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

