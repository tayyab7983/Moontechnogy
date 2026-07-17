
// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import SectionTitle from "../Common/SectionTitle";
// import ServiceCard from "./ServiceCard";
// import services from "../../data/services";

// gsap.registerPlugin(ScrollTrigger);

// function Services() {
//   const section = useRef(null);
//   const slider = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const cards = slider.current;

//       gsap.to(cards, {
//         x: () => -(cards.scrollWidth - window.innerWidth + 120),
//         ease: "none",

//         scrollTrigger: {
//           trigger: section.current,
//           start: "top top",
//           end: () => "+=" + (cards.scrollWidth - window.innerWidth),
//           scrub: 1,
//           pin: true,
//           invalidateOnRefresh: true,
//         },
//       });
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={section}
//       className="relative h-screen overflow-hidden bg-[#050505]"
//     >
//       {/* Grid */}
//       <div className="absolute inset-0 bg-grid opacity-20"></div>

//       {/* Left Glow */}
//       <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[150px]"></div>

//       {/* Right Glow */}
//       <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[150px]"></div>

//       <div className="relative z-10 px-10 pt-24">

//         <SectionTitle
//           subtitle="Our Services"
//           title={
//             <>
//               What We
//               <br />
//               Build
//             </>
//           }
//         />

//       </div>

//       {/* Cards */}

//       <div
//         ref={slider}
//         className="absolute left-0 top-[320px] flex gap-8 px-10"
//       >
//         {services.map((service) => (
//           <ServiceCard
//             key={service.id}
//             service={service}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Services;
// Services.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionTitle from "../Common/SectionTitle";
import ServiceCard from "./ServiceCard";
import services from "../../data/services";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const section = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // ---------- DESKTOP: Pinned Horizontal Scroll (as-is) ----------
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
      ref={section}
      className="relative overflow-hidden bg-[#050505] lg:h-screen"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Left Glow — clamped so it can't leak past viewport */}
      <div className="absolute left-0 top-20 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[90px] lg:blur-[150px]"></div>

      {/* Right Glow — clamped */}
      <div className="absolute right-0 bottom-0 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[90px] lg:blur-[150px]"></div>

      <div className="relative z-10 px-5 sm:px-8 lg:px-10 pt-16 sm:pt-20 lg:pt-24">
        <SectionTitle
          subtitle="Our Services"
          title={
            <>
              What We
              <br />
              Build
            </>
          }
        />
      </div>

      {/* Cards */}
      <div
        ref={slider}
        className="
          relative flex flex-col items-center gap-6 px-5 sm:px-8 py-10
          lg:absolute lg:left-0 lg:top-[320px] lg:flex-row lg:items-stretch lg:gap-8 lg:px-10 lg:py-0 lg:w-max
        "
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;