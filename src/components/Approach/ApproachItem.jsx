// ApproachItem.jsx
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function ApproachItem({ item }) {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      transition={{ duration: 0.3 }}
      className="group border-b border-white/10 py-8 sm:py-10 lg:py-12 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-4 sm:gap-6">
        <div className="flex gap-5 sm:gap-8 lg:gap-10">
          <span
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[#d4af37] text-2xl sm:text-3xl lg:text-4xl font-normal shrink-0 pt-1"
          >
            {item.number}
          </span>

          <div>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl sm:text-3xl lg:text-[42px] font-medium leading-tight group-hover:text-[#d4af37] duration-300"
            >
              {item.title}
            </h2>

            <p className="text-gray-400 text-sm sm:text-base mt-2.5 sm:mt-3 lg:mt-4 max-w-[650px] leading-6 sm:leading-7 lg:leading-8">
              {item.description}
            </p>
          </div>
        </div>

        <ArrowRight
          className="text-[#d4af37] group-hover:translate-x-3 duration-300 shrink-0 mt-2"
          size={22}
        />
      </div>
    </motion.div>
  );
}

export default ApproachItem;