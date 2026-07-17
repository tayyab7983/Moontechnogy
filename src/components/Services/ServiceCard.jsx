// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// function ServiceCard({ service }) {
//   const Icon = service.icon;

//   return (
//     <motion.div
//       whileHover={{
//         y: -12,
//         scale: 1.02,
//       }}
//       transition={{ duration: 0.35 }}
//       className="
//         group
//         relative
//         w-[520px]
//         h-[620px]
//         overflow-hidden
//         rounded-[32px]
//         border
//         border-white/10
//         bg-white/[0.03]
//         backdrop-blur-xl
//         p-10
//         flex
//         flex-col
//         justify-between
//         duration-500
//         hover:border-[#d4af37]
//         hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]
//       "
//     >
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 duration-500"></div>

//       {/* Golden Glow Circle */}
//       <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#d4af37]/10 blur-[100px] opacity-0 group-hover:opacity-100 duration-700"></div>

//       {/* Big Background Number */}
//       <span className="absolute top-2 left-4 text-[150px] font-bold text-white/[0.03] select-none">
//         {service.number}
//       </span>

//       {/* Top */}
//       <div className="relative z-10 flex justify-between items-start">
//         <div>
//           <span className="text-[#d4af37] text-4xl font-bold">
//             {service.number}
//           </span>

//           <p className="uppercase tracking-[4px] text-xs text-[#d4af37] mt-6">
//             Premium Service
//           </p>
//         </div>

//         <motion.div
//           whileHover={{ rotate: 20 }}
//           className="w-16 h-16 rounded-full border border-[#d4af37]/30 flex items-center justify-center"
//         >
//           <Icon size={30} className="text-[#d4af37]" />
//         </motion.div>
//       </div>

//       {/* Center */}
//       <div className="relative z-10">
//         <h2 className="text-4xl font-bold leading-tight mb-6">
//           {service.title}
//         </h2>

//         <p className="text-gray-400 leading-8 text-lg">
//           {service.description}
//         </p>
//       </div>

//       {/* Bottom */}
//       <div className="relative z-10 flex items-center justify-between">

//         <button className="flex items-center gap-3 uppercase tracking-[3px] text-sm font-semibold text-[#d4af37]">
//           Explore Service

//           <ArrowRight
//             size={18}
//             className="group-hover:translate-x-2 duration-300"
//           />
//         </button>

//       </div>

//       {/* Bottom Border */}
//       <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] group-hover:w-full duration-500"></div>
//     </motion.div>
//   );
// }

// export default ServiceCard;
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  const Icon = service.icon;

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
      sm:w-[420px]
      lg:w-[480px]
      xl:w-[520px]
      h-auto
      lg:h-[720px]
      xl:h-[760px]
      overflow-hidden
      rounded-[24px]
      sm:rounded-[28px]
      lg:rounded-[32px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      p-6
      sm:p-7
      lg:p-8
      flex
      flex-col
      justify-between
      duration-500
      hover:border-[#d4af37]
      hover:shadow-[0_0_40px_rgba(212,175,55,0.18)]
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 duration-500"></div>

      {/* Golden Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#d4af37]/10 blur-[100px] opacity-0 group-hover:opacity-100 duration-700"></div>

      {/* Background Number */}
      <span className="absolute top-2 left-4 text-[80px] sm:text-[110px] lg:text-[150px] font-bold text-white/[0.03] select-none">
        {service.number}
      </span>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-start">
        <div>
          <span className="text-[#d4af37] text-2xl sm:text-3xl lg:text-4xl font-bold">
            {service.number}
          </span>

          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[10px] sm:text-xs text-[#d4af37] mt-3 sm:mt-5">
            Premium Service
          </p>
        </div>

        <motion.div
          whileHover={{ rotate: 20 }}
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-[#d4af37]/30 flex items-center justify-center shrink-0"
        >
          <Icon className="text-[#d4af37] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px]" />
        </motion.div>
      </div>

      {/* IMAGE */}
      <div className="relative z-10 mt-6 sm:mt-7 lg:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl h-[160px] sm:h-[200px] lg:h-[260px]">
        <img
          src={service.image}
          alt={service.title}
          className="
          w-full
          h-full
          object-cover
          duration-700
          group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 mt-6 sm:mt-7 lg:mt-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4 lg:mb-6">
          {service.title}
        </h2>

        <p className="text-gray-400 leading-6 sm:leading-7 lg:leading-8 text-sm sm:text-base lg:text-lg">
          {service.description}
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between mt-6 sm:mt-7 lg:mt-8">
        <button className="flex items-center gap-2 sm:gap-3 uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm font-semibold text-[#d4af37]">
          Explore Service
          <ArrowRight
            className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:translate-x-2 duration-300"
          />
        </button>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] group-hover:w-full duration-500"></div>
    </motion.div>
  );
}

export default ServiceCard;