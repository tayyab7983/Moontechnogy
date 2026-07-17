 import { motion } from "framer-motion";

function SectionTitle({ subtitle, title }) {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="uppercase tracking-[6px] text-[#d4af37]"
      >
        {subtitle}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-serif text-5xl md:text-6xl lg:text-8xl mt-5 leading-tight"
      >
        {title}
      </motion.h2>
    </>
  );
}

export default SectionTitle;