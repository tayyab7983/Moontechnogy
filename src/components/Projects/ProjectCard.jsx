// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// function ProjectCard({ project }) {
//   return (
//     <motion.div
//       whileHover={{
//         y: -12,
//         scale: 1.02,
//       }}
//       transition={{ duration: 0.35 }}
//       className="group relative min-w-[580px] h-[620px] rounded-[30px] overflow-hidden border border-white/10 bg-[#0b0b0b] hover:border-[#d4af37] duration-500"
//     >
//       {/* Glow */}

//       <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#d4af37]/20 blur-[120px] opacity-0 group-hover:opacity-100 duration-700"></div>

//       {/* Grid */}

//       <div className="absolute inset-0 bg-grid opacity-10"></div>

//       {/* IMAGE */}

//       <div className="relative h-[340px] overflow-hidden">

//         {/* Later this will become an image */}

//         <div className="absolute inset-0 bg-gradient-to-br from-[#2d2410] via-[#111111] to-black group-hover:scale-110 duration-700"></div>

//         {/* Number */}

//         <div className="absolute inset-0 flex items-center justify-center">

//           <h1 className="text-[120px] font-black text-white/5 select-none">

//             {project.number}

//           </h1>

//         </div>

//       </div>

//       {/* CONTENT */}

//       <div className="relative px-8 py-8 flex flex-col h-[280px]">

//         <p className="uppercase tracking-[5px] text-[#d4af37] text-sm">

//           {project.category}

//         </p>

//         <h2 className="mt-4 text-[42px] leading-tight font-bold text-white">

//           {project.title}

//         </h2>

//         <p className="mt-5 text-gray-400 leading-8 text-[17px]">

//           {project.description}

//         </p>

//         {/* Spacer */}

//         <div className="flex-1"></div>

//         {/* Button */}

//         <button className="group/button inline-flex items-center gap-3 text-[#d4af37] uppercase tracking-[3px] text-sm font-semibold">

//           View Case Study

//           <ArrowRight
//             size={18}
//             className="group-hover/button:translate-x-2 duration-300"
//           />

//         </button>

//       </div>

//       {/* Bottom Line */}

//       <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] group-hover:w-full duration-500"></div>
//     </motion.div>
//   );
// }

// export default ProjectCard;

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="
      group
      relative
      w-full
      sm:w-[480px]
      lg:w-[580px]
      h-[480px]
      sm:h-[560px]
      lg:h-[620px]
      rounded-[22px]
      sm:rounded-[26px]
      lg:rounded-[30px]
      overflow-hidden
      border
      border-white/10
      bg-[#0b0b0b]
      hover:border-[#d4af37]
      duration-500
      "
    >
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#d4af37]/20 blur-[120px] opacity-0 group-hover:opacity-100 duration-700"></div>

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>

      {/* Project Image */}
      <div className="relative h-[220px] sm:h-[280px] lg:h-[340px] overflow-hidden bg-[#0b0b0b] flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-full
          object-contain
          duration-700
          group-hover:scale-110
          "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

        {/* Project Number */}
        <div className="absolute top-6 left-6 z-20">
          <span className="text-[#d4af37] text-3xl font-bold">
            {project.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative px-8 py-8 flex flex-col">
        <p className="uppercase tracking-[4px] text-[#d4af37] text-sm">
          {project.category}
        </p>

        <h2 className="mt-4 text-3xl lg:text-[42px] leading-tight font-bold text-white">
          {project.title}
        </h2>

        <p className="mt-5 text-gray-400 leading-8 text-[17px]">
          {project.description}
        </p>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] group-hover:w-full duration-500"></div>
    </motion.div>
  );
}

export default ProjectCard;