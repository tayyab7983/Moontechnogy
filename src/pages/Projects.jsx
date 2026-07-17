
// import { useLayoutEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { X, ExternalLink } from "lucide-react";

// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
// import projects from "../data/projects";

// gsap.registerPlugin(ScrollTrigger);

// // Only resolves a link if the project data actually has a real one.
// // Returns null if there's nothing to link to (no fake/guessed routes).
// function getRealLink(project) {
//   return project.link || project.url || project.liveLink || project.href || project.demo || null;
// }

// function isExternalLink(link) {
//   return typeof link === "string" && link.startsWith("http");
// }

// function ProjectCard({ project, onOpenDetails }) {
//   const link = getRealLink(project);

//   const cardInner = (
//     <>
//       {/* IMAGE */}
//       <div className="relative h-[220px] sm:h-[280px] lg:h-[320px] overflow-hidden bg-[#0b0b0b]">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="
//           w-full
//           h-full
//           object-cover
//           object-top
//           duration-700
//           group-hover:scale-110
//           "
//         />
//         <div className="absolute inset-0 bg-black/25"></div>
//       </div>

//       {/* CONTENT */}
//       <div className="p-6 pb-8 sm:p-8 sm:pb-10 md:p-10 md:pb-12">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
//           {project.title}
//         </h2>

//         <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-400 leading-6 sm:leading-8">
//           {project.description}
//         </p>

//         <span
//           className="
//           mt-8
//           sm:mt-10
//           inline-flex
//           items-center
//           gap-2
//           px-6
//           sm:px-8
//           py-3
//           sm:py-4
//           rounded-full
//           border
//           border-[#d4af37]
//           text-sm
//           sm:text-base
//           text-[#d4af37]
//           group-hover:bg-[#d4af37]
//           group-hover:text-black
//           duration-300
//           "
//         >
//           View Project
//           {link && isExternalLink(link) && <ExternalLink size={14} />}
//         </span>
//       </div>
//     </>
//   );

//   const sharedClasses = `
//     projectCard
//     group
//     relative
//     overflow-hidden
//     rounded-[24px]
//     sm:rounded-[36px]
//     border
//     border-white/10
//     bg-[#0b0b0b]
//     block
//     w-full
//     text-left
//     cursor-pointer
//   `;

//   // Real link exists → behave like a normal link (external tab or same-tab).
//   if (link) {
//     const external = isExternalLink(link);
//     return (
//       <motion.a
//         href={link}
//         target={external ? "_blank" : "_self"}
//         rel={external ? "noopener noreferrer" : undefined}
//         whileHover={{ y: -10, scale: 1.02 }}
//         className={sharedClasses}
//       >
//         {cardInner}
//       </motion.a>
//     );
//   }

//   // No real link on record → open an in-page details modal instead of
//   // guessing at a route that doesn't exist (avoids the 404).
//   return (
//     <motion.button
//       type="button"
//       onClick={() => onOpenDetails(project)}
//       whileHover={{ y: -10, scale: 1.02 }}
//       className={sharedClasses}
//     >
//       {cardInner}
//     </motion.button>
//   );
// }

// function Projects() {
//   const pageRef = useRef(null);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.utils.toArray(".projectCard").forEach((card) => {
//         gsap.from(card, {
//           y: 120,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 80%",
//           },
//         });
//       });
//     }, pageRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <section
//         ref={pageRef}
//         className="relative overflow-hidden bg-[#050505] text-white"
//       >
//         <div className="absolute inset-0 bg-grid opacity-10"></div>
//         <div className="absolute -left-52 top-0 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] rounded-full bg-[#d4af37]/10 blur-[180px]"></div>

//         <div className="relative z-10 max-w-[1450px] mx-auto px-6 md:px-8 lg:px-10">
//           {/* HERO */}
//           <section className="min-h-screen flex items-center pt-24 lg:pt-0">
//             <div>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="uppercase tracking-[6px] sm:tracking-[8px] text-sm sm:text-base text-[#d4af37]"
//               >
//                 PROJECTS
//               </motion.p>

//               <motion.h1
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="
//                 mt-6
//                 sm:mt-8
//                 font-serif
//                 leading-[0.95]
//                 sm:leading-[0.9]
//                 text-5xl
//                 sm:text-[60px]
//                 md:text-[90px]
//                 lg:text-[130px]
//                 "
//               >
//                 Selected
//                 <br />
//                 Digital
//                 <br />
//                 Projects.
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="
//                 mt-8
//                 sm:mt-12
//                 max-w-[760px]
//                 text-gray-400
//                 leading-7
//                 sm:leading-9
//                 text-base
//                 md:text-lg
//                 "
//               >
//                 Every project is crafted with premium design, high
//                 performance, beautiful interactions and scalable
//                 architecture.
//               </motion.p>
//             </div>
//           </section>

//           {/* PROJECT GRID */}
//           <section className="pb-24 sm:pb-36 lg:pb-52">
//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
//               {projects.map((project) => (
//                 <ProjectCard
//                   key={project.id}
//                   project={project}
//                   onOpenDetails={setSelectedProject}
//                 />
//               ))}
//             </div>
//           </section>
//         </div>
//       </section>

//       {/* PROJECT DETAILS MODAL — shown when a project has no real link */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedProject(null)}
//             className="
//             fixed
//             inset-0
//             z-50
//             flex
//             items-center
//             justify-center
//             bg-black/80
//             backdrop-blur-sm
//             px-5
//             sm:px-6
//             "
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 40, scale: 0.96 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 20, scale: 0.96 }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//               onClick={(e) => e.stopPropagation()}
//               className="
//               relative
//               w-full
//               max-w-[680px]
//               max-h-[85vh]
//               overflow-y-auto
//               rounded-[24px]
//               sm:rounded-[30px]
//               border
//               border-[#d4af37]/30
//               bg-[#0b0b0b]
//               "
//             >
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="
//                 absolute
//                 top-4
//                 right-4
//                 sm:top-6
//                 sm:right-6
//                 z-10
//                 w-9
//                 h-9
//                 sm:w-10
//                 sm:h-10
//                 flex
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/20
//                 bg-black/60
//                 text-white
//                 hover:border-[#d4af37]
//                 hover:text-[#d4af37]
//                 duration-300
//                 "
//               >
//                 <X size={18} />
//               </button>

//               <div className="relative h-[220px] sm:h-[300px] overflow-hidden bg-[#0b0b0b]">
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   className="w-full h-full object-cover object-top"
//                 />
//                 <div className="absolute inset-0 bg-black/30"></div>
//               </div>

//               <div className="p-6 sm:p-8 lg:p-10">
//                 <p className="uppercase tracking-[4px] text-xs sm:text-sm text-[#d4af37]">
//                   {selectedProject.category}
//                 </p>

//                 <h3 className="mt-3 font-serif text-2xl sm:text-3xl leading-tight">
//                   {selectedProject.title}
//                 </h3>

//                 <p className="mt-5 text-sm sm:text-base text-gray-400 leading-7">
//                   {selectedProject.description}
//                 </p>

//                 <p className="mt-6 text-xs sm:text-sm text-gray-500">
//                   A live link for this project isn&apos;t available yet.
//                   Reach out and we&apos;ll walk you through it.
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <Footer />
//     </>
//   );
// }

// export default Projects;
import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ExternalLink } from "lucide-react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import projects from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

// Only resolves a link if the project data actually has a real one.
// Returns null if there's nothing to link to (no fake/guessed routes).
function getRealLink(project) {
  return project.link || project.url || project.liveLink || project.href || project.demo || null;
}

function isExternalLink(link) {
  return typeof link === "string" && link.startsWith("http");
}

function ProjectCard({ project, onOpenDetails }) {
  const link = getRealLink(project);

  const cardInner = (
    <>
      {/* IMAGE */}
      <div className="relative h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden bg-[#0b0b0b]">
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-full
          object-cover
          object-top
          duration-700
          group-hover:scale-110
          "
        />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* CONTENT */}
      <div className="p-5 pb-7 sm:p-8 sm:pb-10 md:p-10 md:pb-12">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight break-words">
          {project.title}
        </h2>

        <p className="mt-3 sm:mt-6 text-sm sm:text-base text-gray-400 leading-6 sm:leading-8 break-words">
          {project.description}
        </p>

        <span
          className="
          mt-6
          sm:mt-10
          inline-flex
          items-center
          gap-2
          px-5
          sm:px-8
          py-2.5
          sm:py-4
          rounded-full
          border
          border-[#d4af37]
          text-xs
          sm:text-base
          text-[#d4af37]
          group-hover:bg-[#d4af37]
          group-hover:text-black
          duration-300
          "
        >
          View Project
          {link && isExternalLink(link) && <ExternalLink size={14} />}
        </span>
      </div>
    </>
  );

  const sharedClasses = `
    projectCard
    group
    relative
    overflow-hidden
    rounded-[24px]
    sm:rounded-[36px]
    border
    border-white/10
    bg-[#0b0b0b]
    block
    w-full
    text-left
    cursor-pointer
  `;

  // Real link exists → behave like a normal link (external tab or same-tab).
  if (link) {
    const external = isExternalLink(link);
    return (
      <motion.a
        href={link}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
        whileHover={{ y: -10, scale: 1.02 }}
        className={sharedClasses}
      >
        {cardInner}
      </motion.a>
    );
  }

  // No real link on record → open an in-page details modal instead of
  // guessing at a route that doesn't exist (avoids the 404).
  return (
    <motion.button
      type="button"
      onClick={() => onOpenDetails(project)}
      whileHover={{ y: -10, scale: 1.02 }}
      className={sharedClasses}
    >
      {cardInner}
    </motion.button>
  );
}

function Projects() {
  const pageRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".projectCard").forEach((card) => {
        gsap.from(card, {
          y: 120,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <section
        ref={pageRef}
        className="relative overflow-x-hidden bg-[#050505] text-white"
      >
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute -left-52 top-0 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-[#d4af37]/10 blur-[120px] sm:blur-[180px]"></div>

        <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
          {/* HERO */}
          <section className="min-h-screen flex items-center pt-24 lg:pt-0">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="uppercase tracking-[6px] sm:tracking-[8px] text-sm sm:text-base text-[#d4af37]"
              >
                PROJECTS
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                mt-6
                sm:mt-8
                font-serif
                leading-[0.95]
                sm:leading-[0.9]
                text-4xl
                sm:text-[60px]
                md:text-[90px]
                lg:text-[130px]
                break-words
                "
              >
                Selected
                <br />
                Digital
                <br />
                Projects.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="
                mt-8
                sm:mt-12
                max-w-[760px]
                text-gray-400
                leading-7
                sm:leading-9
                text-base
                md:text-lg
                "
              >
                Every project is crafted with premium design, high
                performance, beautiful interactions and scalable
                architecture.
              </motion.p>
            </div>
          </section>

          {/* PROJECT GRID */}
          <section className="pb-24 sm:pb-36 lg:pb-52">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetails={setSelectedProject}
                />
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* PROJECT DETAILS MODAL — shown when a project has no real link */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-sm
            px-4
            sm:px-6
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="
              relative
              w-full
              max-w-[680px]
              max-h-[88vh]
              overflow-y-auto
              rounded-[20px]
              sm:rounded-[30px]
              border
              border-[#d4af37]/30
              bg-[#0b0b0b]
              "
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="
                absolute
                top-4
                right-4
                sm:top-6
                sm:right-6
                z-10
                w-9
                h-9
                sm:w-10
                sm:h-10
                flex
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/60
                text-white
                hover:border-[#d4af37]
                hover:text-[#d4af37]
                duration-300
                "
              >
                <X size={18} />
              </button>

              <div className="relative h-[160px] sm:h-[220px] md:h-[300px] overflow-hidden bg-[#0b0b0b]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              <div className="p-5 sm:p-8 lg:p-10">
                <p className="uppercase tracking-[4px] text-xs sm:text-sm text-[#d4af37]">
                  {selectedProject.category}
                </p>

                <h3 className="mt-3 font-serif text-xl sm:text-3xl leading-tight break-words">
                  {selectedProject.title}
                </h3>

                <p className="mt-5 text-sm sm:text-base text-gray-400 leading-7 break-words">
                  {selectedProject.description}
                </p>

                <p className="mt-6 text-xs sm:text-sm text-gray-500">
                  A live link for this project isn&apos;t available yet.
                  Reach out and we&apos;ll walk you through it.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default Projects;