//  import { motion } from "framer-motion";
// import projects from "../../data/projects";
// import ProjectCard from "./ProjectCard";
// import SectionTitle from "../Common/SectionTitle";

// function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative overflow-hidden bg-[#050505] py-32"
//     >
//       {/* Grid */}
//       <div className="absolute inset-0 bg-grid opacity-20"></div>

//       {/* Left Glow */}
//       <div className="absolute -left-40 top-40 h-[600px] w-[600px] rounded-full bg-[#d4af37]/10 blur-[180px]"></div>

//       {/* Right Glow */}
//       <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-[#d4af37]/10 blur-[180px]"></div>

//       <div className="relative z-10 max-w-[1450px] mx-auto px-8">

//         <SectionTitle
//           subtitle="Featured Projects"
//           title={
//             <>
//               Concepts Built To
//               <br />
//               Stop The Scroll.
//             </>
//           }
//         />

//         {/* Description */}

//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-8 max-w-[650px] text-lg leading-8 text-gray-400"
//         >
//           We build modern websites, AI automation systems,
//           SaaS platforms and mobile applications that help
//           businesses grow faster.
//         </motion.p>

//         {/* Cards */}

//         <div className="mt-20 flex gap-8 overflow-x-auto scrollbar-hide pb-8">

//           {projects.map((project) => (

//             <ProjectCard
//               key={project.id}
//               project={project}
//             />

//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Projects;
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../Common/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const section = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // ---------- DESKTOP: Pinned Horizontal Scroll ----------
      mm.add("(min-width: 1024px)", () => {
        const cards = slider.current;

        gsap.to(cards, {
          x: () => -(cards.scrollWidth - window.innerWidth + 120),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => "+=" + (cards.scrollWidth - window.innerWidth),
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      });

      // ---------- MOBILE / TABLET: Simple Vertical Stack ----------
      mm.add("(max-width: 1023px)", () => {
        gsap.set(slider.current, { clearProps: "transform" });

        const cardEls = gsap.utils.toArray(slider.current.children);

        cardEls.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={section}
      className="relative overflow-hidden bg-[#050505] py-16 sm:py-24 lg:h-screen lg:py-0"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Left Glow — clamped so it can't leak past viewport */}
      <div className="absolute left-0 top-40 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[100px] lg:blur-[180px]"></div>

      {/* Right Glow — clamped */}
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px] translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[100px] lg:blur-[180px]"></div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-8 lg:h-full lg:flex lg:flex-col">
        <SectionTitle
          subtitle="Featured Projects"
          title={
            <>
              Concepts Built To
              <br />
              Stop The Scroll.
            </>
          }
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 sm:mt-8 max-w-[650px] text-base sm:text-lg leading-7 sm:leading-8 text-gray-400"
        >
          We build modern websites, AI automation systems,
          SaaS platforms and mobile applications that help
          businesses grow faster.
        </motion.p>

        {/* Cards */}
        <div
          ref={slider}
          className="
            mt-12 sm:mt-16 lg:mt-12
            flex flex-col items-center gap-6
            lg:flex-1 lg:flex-row lg:items-stretch lg:gap-8 lg:w-max lg:mx-0
          "
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;