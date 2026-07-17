import { motion } from "framer-motion";
import Counter from "./Counter";

function AboutCard({ number, subtitle }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: .3 }}
      className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:border-[#d4af37] duration-500"
    >
      <h2 className="text-5xl font-bold text-[#d4af37]">

        <Counter end={number} />

      </h2>

      <p className="mt-5 text-gray-400 group-hover:text-white duration-300">

        {subtitle}

      </p>
    </motion.div>
  );
}

export default AboutCard;