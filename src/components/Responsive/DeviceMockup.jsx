
// import { motion } from "framer-motion";

// function DeviceMockup({ type = "desktop", image = "" }) {
//   const sizes = {
//     desktop:
//       "w-[280px] h-[160px] sm:w-[420px] sm:h-[240px] md:w-[560px] md:h-[320px] lg:w-[760px] lg:h-[430px] rounded-2xl sm:rounded-[22px] lg:rounded-[28px]",
//     tablet:
//       "w-[180px] h-[250px] sm:w-[240px] sm:h-[330px] md:w-[280px] md:h-[390px] lg:w-[340px] lg:h-[470px] rounded-2xl sm:rounded-[20px] lg:rounded-[26px]",
//     mobile:
//       "w-[110px] h-[226px] sm:w-[140px] sm:h-[288px] md:w-[165px] md:h-[340px] lg:w-[190px] lg:h-[390px] rounded-[22px] sm:rounded-[28px] lg:rounded-[38px]",
//   };

//   const notchSize = {
//     desktop: "",
//     tablet: "",
//     mobile:
//       "w-10 h-2.5 sm:w-14 sm:h-3.5 md:w-16 md:h-4 lg:w-20 lg:h-5",
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -12, scale: 1.03 }}
//       transition={{ duration: 0.35 }}
//       className={`
//         group
//         relative
//         ${sizes[type]}
//         overflow-hidden
//         border
//         border-[#d4af37]/20
//         bg-[#0b0b0b]
//         shadow-[0_30px_120px_rgba(0,0,0,.55)]
//       `}
//     >
//       {/* Glow */}
//       <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#d4af37]/20 blur-[120px] opacity-0 group-hover:opacity-100 duration-700"></div>

//       {/* Grid */}
//       <div className="absolute inset-0 bg-grid opacity-10"></div>

//       {/* Browser */}
//       {type !== "mobile" && (
//         <div className="h-6 sm:h-8 lg:h-11 border-b border-white/10 flex items-center px-2.5 sm:px-3.5 lg:px-5 gap-1.5 sm:gap-2">
//           <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full bg-red-500"></span>
//           <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500"></span>
//           <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full bg-green-500"></span>
//         </div>
//       )}

//       {/* Phone Top */}
//       {type === "mobile" && (
//         <div
//           className={`absolute top-1 sm:top-1.5 lg:top-2 left-1/2 -translate-x-1/2 ${notchSize.mobile} rounded-full bg-black z-30`}
//         ></div>
//       )}

//       {/* Screen */}
//       <div className="relative w-full h-full overflow-hidden">
//         {image ? (
//           <img
//             src={image}
//             alt=""
//             className="
//             w-full
//             h-full
//             object-cover
//             duration-700
//             group-hover:scale-105
//             "
//           />
//         ) : (
//           <div
//             className="
//             w-full
//             h-full
//             bg-gradient-to-br
//             from-[#201a0d]
//             via-[#0f0f0f]
//             to-black
//             flex
//             items-center
//             justify-center
//             "
//           >
//             <div className="text-center px-2">
//               <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white/10">
//                 {type.toUpperCase()}
//               </h2>
//               <p className="mt-1.5 sm:mt-3 lg:mt-6 uppercase tracking-[2px] sm:tracking-[4px] lg:tracking-[6px] text-[#d4af37] text-[8px] sm:text-[10px] lg:text-sm">
//                 MoonTechnogy
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Reflection */}
//       <div
//         className="
//         absolute
//         inset-0
//         bg-gradient-to-r
//         from-transparent
//         via-white/10
//         to-transparent
//         -translate-x-full
//         group-hover:translate-x-full
//         duration-1000
//         "
//       ></div>

//       {/* Bottom Glow */}
//       <div
//         className="
//         absolute
//         bottom-0
//         left-1/2
//         -translate-x-1/2
//         w-[70%]
//         h-8
//         sm:h-12
//         lg:h-16
//         bg-[#d4af37]/20
//         blur-[30px]
//         sm:blur-[40px]
//         lg:blur-[50px]
//         opacity-0
//         group-hover:opacity-100
//         duration-700
//         "
//       ></div>
//     </motion.div>
//   );
// }

// export default DeviceMockup;
import { motion } from "framer-motion";

function DeviceMockup({ type = "desktop", image = "" }) {
  const sizes = {
    desktop:
      "w-[280px] h-[160px] sm:w-[420px] sm:h-[240px] md:w-[560px] md:h-[320px] lg:w-[760px] lg:h-[430px] rounded-2xl sm:rounded-[22px] lg:rounded-[28px]",
    tablet:
      "w-[180px] h-[250px] sm:w-[240px] sm:h-[330px] md:w-[280px] md:h-[390px] lg:w-[340px] lg:h-[470px] rounded-2xl sm:rounded-[20px] lg:rounded-[26px]",
    mobile:
      "w-[110px] h-[226px] sm:w-[140px] sm:h-[288px] md:w-[165px] md:h-[340px] lg:w-[190px] lg:h-[390px] rounded-[22px] sm:rounded-[28px] lg:rounded-[38px]",
  };

  const notchSize = {
    desktop: "",
    tablet: "",
    mobile:
      "w-10 h-2.5 sm:w-14 sm:h-3.5 md:w-16 md:h-4 lg:w-20 lg:h-5",
  };

  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ duration: 0.35 }}
      className={`
        group
        relative
        flex
        flex-col
        ${sizes[type]}
        overflow-hidden
        border
        border-[#d4af37]/20
        bg-[#0b0b0b]
        shadow-[0_30px_120px_rgba(0,0,0,.55)]
      `}
    >
      {/* Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#d4af37]/20 blur-[120px] opacity-0 group-hover:opacity-100 duration-700"></div>

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>

      {/* Browser */}
      {type !== "mobile" && (
        <div className="shrink-0 h-6 sm:h-8 lg:h-11 border-b border-white/10 flex items-center px-2.5 sm:px-3.5 lg:px-5 gap-1.5 sm:gap-2">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full bg-red-500"></span>
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500"></span>
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full bg-green-500"></span>
        </div>
      )}

      {/* Phone Top */}
      {type === "mobile" && (
        <div
          className={`absolute top-1 sm:top-1.5 lg:top-2 left-1/2 -translate-x-1/2 ${notchSize.mobile} rounded-full bg-black z-30`}
        ></div>
      )}

      {/* Screen — takes only the remaining space after the browser bar,
          so the image is never pushed outside the card and clipped */}
      <div className="relative flex-1 min-h-0 w-full overflow-hidden">
        {image ? (
          <img
            src={image}
            alt=""
            className="
            w-full
            h-full
            object-contain
            duration-700
            group-hover:scale-105
            "
          />
        ) : (
          <div
            className="
            w-full
            h-full
            bg-gradient-to-br
            from-[#201a0d]
            via-[#0f0f0f]
            to-black
            flex
            items-center
            justify-center
            "
          >
            <div className="text-center px-2">
              <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white/10">
                {type.toUpperCase()}
              </h2>
              <p className="mt-1.5 sm:mt-3 lg:mt-6 uppercase tracking-[2px] sm:tracking-[4px] lg:tracking-[6px] text-[#d4af37] text-[8px] sm:text-[10px] lg:text-sm">
                MoonTechnogy
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Reflection */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent
        -translate-x-full
        group-hover:translate-x-full
        duration-1000
        "
      ></div>

      {/* Bottom Glow */}
      <div
        className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        w-[70%]
        h-8
        sm:h-12
        lg:h-16
        bg-[#d4af37]/20
        blur-[30px]
        sm:blur-[40px]
        lg:blur-[50px]
        opacity-0
        group-hover:opacity-100
        duration-700
        "
      ></div>
    </motion.div>
  );
}

export default DeviceMockup;