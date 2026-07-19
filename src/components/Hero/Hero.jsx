
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa6";
import Experience from "../Scene/Experience";

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".heroBadge", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".heroTitle", {
        y: 120,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
      });

      gsap.from(".heroText", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power4.out",
      });

      gsap.from(".heroBtn", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.6,
        ease: "power4.out",
      });

      gsap.from(".heroMoon", {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid"></div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_100%)]"></div>

      {/* Left Glow */}
      <div className="absolute -top-56 -left-44 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] rounded-full bg-[#d4af37]/10 blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute top-20 right-0 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#d4af37]/10 blur-[180px]" />

      {/* Golden Light */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[320px] h-[160px] sm:w-[500px] sm:h-[250px] rounded-full bg-[#d4af37]/10 blur-[140px]"></div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')] bg-repeat pointer-events-none"></div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen items-center gap-4 lg:gap-10 pt-28 pb-16 lg:pt-24 lg:pb-0">
          {/* LEFT */}
          <div>
            <p className="heroBadge uppercase tracking-[4px] sm:tracking-[8px] text-[#d4af37] text-xs sm:text-sm mb-6 sm:mb-8">
              Moon Technology
            </p>

            <h1 className="heroTitle font-serif text-[46px] sm:text-[65px] md:text-[80px] lg:text-[95px] xl:text-[125px] leading-[0.95] sm:leading-[0.85] font-semibold">
              Building
              <br />
              Digital
              <br />
              Future
            </h1>

            <p className="heroText mt-6 sm:mt-8 max-w-[580px] text-gray-400 text-base sm:text-lg leading-7 sm:leading-8">
              We craft premium websites, AI solutions, mobile applications
              and immersive digital experiences that help brands grow
              faster.
            </p>

            <div className="mt-9 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
              <button className="heroBtn group px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#d4af37] text-black text-sm sm:text-base font-semibold flex items-center justify-center gap-3 hover:scale-105 sm:hover:scale-110 duration-300 shadow-[0_0_35px_rgba(212,175,55,0.35)]">
                Explore
                <FaArrowRight className="group-hover:translate-x-1 duration-300" />
              </button>

              <button className="heroBtn px-7 sm:px-9 py-3.5 sm:py-4 rounded-full border border-white/30 text-sm sm:text-base backdrop-blur-md hover:border-[#d4af37] hover:text-[#d4af37] duration-300">
                Contact Us
              </button>
            </div>

            <div className="mt-14 sm:mt-20 flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-12 lg:gap-x-16 border-t border-white/10 pt-8 sm:pt-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37]">
                  12+
                </h2>
                <p className="text-gray-500 mt-1.5 sm:mt-2 text-sm sm:text-base">
                  Projects
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37]">
                  6+
                </h2>
                <p className="text-gray-500 mt-1.5 sm:mt-2 text-sm sm:text-base">
                  Clients
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37]">
                  2★
                </h2>
                <p className="text-gray-500 mt-1.5 sm:mt-2 text-sm sm:text-base">
                  Rating
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="heroMoon relative h-[280px] sm:h-[380px] md:h-[480px] lg:h-[600px] xl:h-[700px] mt-4 lg:mt-0">
            <Experience />
            <div className="absolute inset-0 rounded-full bg-[#d4af37]/5 blur-[120px] -z-10"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent"></div>
    </section>
  );
}

export default Hero;