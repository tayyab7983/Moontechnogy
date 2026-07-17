// import { useLayoutEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
//  import desktopImage from "../assets/mockups/desktop.png";
// import tabletImage from "../assets/mockups/tablet.png";
// import mobileImage from "../assets/mockups/mobile.png";
// import DeviceMockup from "./DeviceMockup";

// gsap.registerPlugin(ScrollTrigger);

// function Responsive() {
//   const section = useRef(null);

//   const desktop = useRef(null);
//   const tablet = useRef(null);
//   const mobile = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       // DESKTOP / LAPTOP — full pinned scroll choreography
//       mm.add("(min-width: 1024px)", () => {
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: section.current,
//             start: "top top",
//             end: "+=2500",
//             scrub: 1,
//             pin: true,
//             anticipatePin: 1,
//           },
//         });

//         // Desktop
//         tl.fromTo(
//           desktop.current,
//           { x: 600, opacity: 0, rotate: 3 },
//           { x: 0, opacity: 1, rotate: 0, duration: 2, ease: "power3.out" }
//         );

//         // Mobile
//         tl.fromTo(
//           mobile.current,
//           { x: -400, opacity: 0, rotate: -18 },
//           { x: 0, opacity: 1, rotate: -10, duration: 1.5 },
//           "-=1.2"
//         );

//         // Tablet
//         tl.fromTo(
//           tablet.current,
//           { y: 300, opacity: 0, scale: 0.8 },
//           { y: 0, opacity: 1, scale: 1, duration: 1.5 },
//           "-=1"
//         );

//         // Rearrangement
//         tl.to(desktop.current, { scale: 0.92, x: -120, duration: 2 });
//         tl.to(
//           mobile.current,
//           { x: 70, y: -40, rotate: -5, duration: 2 },
//           "<"
//         );
//         tl.to(tablet.current, { x: -30, y: 25, duration: 2 }, "<");

//         // Cleanup specific to this breakpoint's timeline
//         return () => tl.kill();
//       });

//       // MOBILE / TABLET — simple, non-pinned reveal (no scroll-jacking,
//       // no absolute-position choreography that assumes desktop spacing)
//       mm.add("(max-width: 1023px)", () => {
//         gsap.from([desktop.current, tablet.current, mobile.current], {
//           y: 60,
//           opacity: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: section.current,
//             start: "top 75%",
//           },
//         });
//       });
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={section}
//       className="relative bg-[#050505] overflow-hidden py-20 lg:py-0 lg:h-screen"
//     >
//       {/* Grid */}
//       <div className="absolute inset-0 bg-grid opacity-20"></div>

//       {/* Glow */}
//       <div className="absolute left-0 top-0 w-[380px] h-[380px] sm:w-[700px] sm:h-[700px] rounded-full bg-[#d4af37]/10 blur-[180px]"></div>
//       <div className="absolute right-0 bottom-0 w-[380px] h-[380px] sm:w-[700px] sm:h-[700px] rounded-full bg-[#d4af37]/10 blur-[180px]"></div>

//       <div className="relative z-10 max-w-[1500px] mx-auto h-full px-5 sm:px-6 md:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-16 lg:gap-24">
//           {/* LEFT */}
//           <motion.div>
//             <p className="uppercase tracking-[4px] sm:tracking-[8px] text-xs sm:text-sm text-[#d4af37]">
//               Responsive System
//             </p>

//             <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] leading-[1.05] lg:leading-[0.9] mt-5 sm:mt-6">
//               One
//               <br />
//               Direction,
//               <br />
//               Tuned For
//               <br />
//               Every Device.
//             </h2>

//             <p className="mt-7 sm:mt-10 text-sm sm:text-base text-gray-400 leading-7 sm:leading-9 max-w-[92%] sm:max-w-[520px]">
//               Desktop creates trust. Tablet improves usability. Mobile
//               increases conversions. Every experience is designed to feel
//               premium on every screen.
//             </p>
//           </motion.div>

//           {/* RIGHT */}
//           <div className="relative flex flex-col items-center gap-10 lg:block lg:h-[600px] xl:h-[720px]">
//             {/* Desktop */}
//             <div
//               ref={desktop}
//               className="relative w-full max-w-[420px] sm:max-w-[480px] lg:absolute lg:top-0 lg:right-0 lg:z-10 lg:w-auto lg:max-w-none"
//             >
//              <DeviceMockup
//   type="desktop"
//   image={desktopImage}
// />
//             </div>

//             {/* Tablet */}
//             <div
//               ref={tablet}
//               className="relative w-full max-w-[300px] sm:max-w-[340px] lg:absolute lg:bottom-20 lg:left-12 lg:z-20 lg:w-auto lg:max-w-none"
//             >
//            <DeviceMockup
//   type="tablet"
//   image={tabletImage}
// />
//             </div>

//             {/* Mobile */}
//             <div
//               ref={mobile}
//               className="relative w-full max-w-[220px] sm:max-w-[250px] lg:absolute lg:bottom-0 lg:right-12 lg:z-30 lg:w-auto lg:max-w-none"
//             >
//             <DeviceMockup
//   type="mobile"
//   image={mobileImage}
// />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Responsive;
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import desktopImage from "../../assets/mockups/desktop.png";
import tabletImage from "../../assets/mockups/tablet.png";
import mobileImage from "../../assets/mockups/mobile.png";
import DeviceMockup from "./DeviceMockup";

gsap.registerPlugin(ScrollTrigger);

function Responsive() {
  const section = useRef(null);
  const desktop = useRef(null);
  const tablet = useRef(null);
  const mobile = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // SAME pinned scroll choreography on EVERY screen size.
      // Only the travel distances / pin length scale down for smaller screens.
      mm.add(
        {
          isMobile: "(max-width: 639px)",
          isTablet: "(min-width: 640px) and (max-width: 1023px)",
          isDesktop: "(min-width: 1024px)",
        },
        (context) => {
          const { isMobile, isTablet } = context.conditions;

          // Distances scale down on smaller screens so elements don't fly
          // off-screen or overlap weirdly
          const desktopX = isMobile ? 220 : isTablet ? 380 : 600;
          const mobileX = isMobile ? -160 : isTablet ? -260 : -400;
          const tabletY = isMobile ? 160 : isTablet ? 220 : 300;
          const pinLength = isMobile ? "+=1600" : isTablet ? "+=2000" : "+=2500";

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section.current,
              start: "top top",
              end: pinLength,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });

          // Desktop mockup enters from the right
          tl.fromTo(
            desktop.current,
            { x: desktopX, opacity: 0, rotate: 3 },
            { x: 0, opacity: 1, rotate: 0, duration: 2, ease: "power3.out" }
          );

          // Mobile mockup enters from the left
          tl.fromTo(
            mobile.current,
            { x: mobileX, opacity: 0, rotate: -18 },
            { x: 0, opacity: 1, rotate: -10, duration: 1.5 },
            "-=1.2"
          );

          // Tablet mockup enters from the bottom
          tl.fromTo(
            tablet.current,
            { y: tabletY, opacity: 0, scale: 0.8 },
            { y: 0, opacity: 1, scale: 1, duration: 1.5 },
            "-=1"
          );

          // Final rearrangement (they settle into place, then further
          // scroll un-pins the section naturally and it scrolls away)
          const settleX = isMobile ? -40 : isTablet ? -70 : -120;
          const mobileSettleX = isMobile ? 25 : isTablet ? 45 : 70;
          const mobileSettleY = isMobile ? -15 : isTablet ? -25 : -40;
          const tabletSettleX = isMobile ? -10 : isTablet ? -18 : -30;
          const tabletSettleY = isMobile ? 10 : isTablet ? 16 : 25;

          tl.to(desktop.current, { scale: 0.92, x: settleX, duration: 2 });
          tl.to(
            mobile.current,
            { x: mobileSettleX, y: mobileSettleY, rotate: -5, duration: 2 },
            "<"
          );
          tl.to(
            tablet.current,
            { x: tabletSettleX, y: tabletSettleY, duration: 2 },
            "<"
          );

          return () => tl.kill();
        }
      );
    }, section);

    // Recalculate ScrollTrigger positions once all mockup images
    // have actually finished loading (fixes wrong trigger points,
    // especially on mobile where layout height changes after load)
    const imgs = [desktopImage, tabletImage, mobileImage];
    let loadedCount = 0;
    const handleImgLoad = () => {
      loadedCount += 1;
      if (loadedCount === imgs.length) {
        ScrollTrigger.refresh();
      }
    };

    const preloaders = imgs.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImgLoad;
      img.onerror = handleImgLoad;
      return img;
    });

    window.addEventListener("load", () => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      preloaders.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  return (
    <section
      ref={section}
      className="relative bg-[#050505] overflow-hidden py-20 lg:py-0 lg:h-screen"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Glow */}
      <div className="absolute left-0 top-0 w-[380px] h-[380px] sm:w-[700px] sm:h-[700px] rounded-full bg-[#d4af37]/10 blur-[180px]"></div>
      <div className="absolute right-0 bottom-0 w-[380px] h-[380px] sm:w-[700px] sm:h-[700px] rounded-full bg-[#d4af37]/10 blur-[180px]"></div>

      <div className="relative z-10 max-w-[1500px] mx-auto h-full px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-16 lg:gap-24">
          {/* LEFT */}
          <motion.div>
            <p className="uppercase tracking-[4px] sm:tracking-[8px] text-xs sm:text-sm text-[#d4af37]">
              Responsive System
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] leading-[1.05] lg:leading-[0.9] mt-5 sm:mt-6">
              One
              <br />
              Direction,
              <br />
              Tuned For
              <br />
              Every Device.
            </h2>

            <p className="mt-7 sm:mt-10 text-sm sm:text-base text-gray-400 leading-7 sm:leading-9 max-w-[92%] sm:max-w-[520px]">
              Desktop creates trust. Tablet improves usability. Mobile
              increases conversions. Every experience is designed to feel
              premium on every screen.
            </p>
          </motion.div>

          {/* RIGHT — mockups are ALWAYS absolutely positioned (mobile,
              tablet, desktop) so the same overlapping composition and
              scroll animation works identically on every screen size */}
          <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] lg:h-[600px] xl:h-[720px]">
            {/* Desktop */}
            <div
              ref={desktop}
              className="absolute top-0 right-0 z-10 w-[68%] sm:w-[62%] md:w-[58%] lg:w-auto"
            >
              <DeviceMockup type="desktop" image={desktopImage} />
            </div>

            {/* Tablet */}
            <div
              ref={tablet}
              className="absolute bottom-[70px] sm:bottom-[90px] left-0 z-20 w-[42%] sm:w-[38%] md:w-[36%] lg:w-auto"
            >
              <DeviceMockup type="tablet" image={tabletImage} />
            </div>

            {/* Mobile */}
            <div
              ref={mobile}
              className="absolute bottom-0 right-2 sm:right-6 z-30 w-[28%] sm:w-[25%] md:w-[23%] lg:w-auto"
            >
              <DeviceMockup type="mobile" image={mobileImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Responsive;