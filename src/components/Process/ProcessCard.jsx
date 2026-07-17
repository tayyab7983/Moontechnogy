 import { motion } from "framer-motion";

function ProcessCard({ item }) {
  return (
    <motion.div
      whileHover={{ x: 12 }}
      transition={{ duration: 0.3 }}
      className="relative flex gap-10 pb-16"
    >
      {/* Timeline */}

      <div className="flex flex-col items-center">

        <div className="w-16 h-16 rounded-full bg-[#d4af37] text-black font-bold flex items-center justify-center text-xl">

          {item.number}

        </div>

        <div className="w-[2px] flex-1 bg-[#d4af37]/30 mt-4"></div>

      </div>

      {/* Content */}

      <div className="pt-2">

        <h2 className="text-3xl font-bold mb-5">

          {item.title}

        </h2>

        <p className="text-gray-400 leading-8 max-w-[650px]">

          {item.description}

        </p>

      </div>

    </motion.div>
  );
}

export default ProcessCard;