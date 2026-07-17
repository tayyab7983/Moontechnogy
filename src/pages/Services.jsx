import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import services from "../data/services";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const section = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".serviceBlock").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <section
        ref={section}
        className="relative overflow-hidden bg-[#050505] text-white"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute -left-52 top-0 w-[700px] h-[700px] rounded-full bg-[#d4af37]/10 blur-[180px]"></div>

        <div className="relative z-10 max-w-[1450px] mx-auto px-8">
          {/* HERO */}
          <section className="min-h-screen flex items-center pt-28 lg:pt-0">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="uppercase tracking-[6px] sm:tracking-[8px] text-sm sm:text-base text-[#d4af37]"
              >
                SERVICES
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-6 sm:mt-8 font-serif leading-[0.95] sm:leading-[0.9] text-5xl sm:text-6xl md:text-[100px] lg:text-[140px]"
              >
                Digital
                <br />
                Solutions
                <br />
                That Scale.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 sm:mt-14 max-w-[720px] text-base sm:text-lg text-gray-400 leading-7 sm:leading-9"
              >
                We create premium websites, AI automation, SaaS platforms and
                mobile applications built for performance, scalability and
                business growth.
              </motion.p>
            </div>
          </section>

          {/* SERVICES (all, continuously alternating layout) */}
          <section className="pb-20 lg:pb-28 space-y-10 lg:space-y-16">
            {services.map((item, index) => {
              const Icon = item.icon;
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={item.id}
                  className="
                  serviceBlock
                  grid
                  grid-cols-1
                  lg:grid-cols-2
                  gap-8
                  lg:gap-24
                  items-center
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-6
                  lg:p-10
                  "
                >
                  {/* TEXT */}
                  <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                    <p className="text-[#d4af37] uppercase tracking-[6px]">
                      {item.number}
                    </p>
                    <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-[60px] leading-[0.95]">
                      {item.title}
                    </h2>
                    <p className="mt-6 lg:mt-10 text-gray-400 leading-7 lg:leading-9 text-base lg:text-lg">
                      {item.description}
                    </p>
                    <button
                      onClick={() => setSelectedService(item)}
                      className="
                      mt-12
                      px-8
                      py-4
                      rounded-full
                      border
                      border-[#d4af37]
                      text-[#d4af37]
                      hover:bg-[#d4af37]
                      hover:text-black
                      duration-300
                      "
                    >
                      Learn More
                    </button>
                  </div>

                  {/* VISUAL */}
                  <div
                    className={`
                    relative
                    rounded-[36px]
                    overflow-hidden
                    border
                    border-white/10
                    bg-[#0b0b0b]
                    h-[260px]
                    lg:h-[450px]
                    flex
                    items-center
                    justify-center
                    ${isReversed ? "lg:order-1" : "lg:order-2"}
                    `}
                  >
                    <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#d4af37]/20 blur-[120px]"></div>
                    <Icon className="text-[#d4af37] w-20 h-20 lg:w-[120px] lg:h-[120px]" />
                  </div>
                </div>
              );
            })}
          </section>

          {/* Process */}
          <section className="pb-52 mt-24">
            <p className="uppercase tracking-[8px] text-[#d4af37]">
              OUR PROCESS
            </p>

            <h2
              className="
              mt-8
              font-serif
              text-5xl
              md:text-6xl
              lg:text-[72px]
              leading-[0.9]
              "
            >
              From Idea
              <br />
              To Launch.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 lg:mt-24">
              {["Discover", "Design", "Develop", "Launch"].map(
                (step, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -10,
                    }}
                    className="
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/10
                    bg-[#0b0b0b]
                    p-10
                    hover:border-[#d4af37]
                    duration-300
                    "
                  >
                    <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-[#d4af37]/20 blur-[120px] opacity-0 hover:opacity-100 duration-500"></div>

                    <p className="text-[#d4af37] text-5xl font-bold">
                      0{index + 1}
                    </p>

                    <h3 className="mt-8 text-3xl font-semibold">{step}</h3>
                  </motion.div>
                )
              )}
            </div>
          </section>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-sm
            px-6
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
              max-w-[640px]
              max-h-[85vh]
              overflow-y-auto
              rounded-[24px]
              sm:rounded-[30px]
              border
              border-[#d4af37]/30
              bg-[#0b0b0b]
              p-6
              sm:p-10
              lg:p-12
              "
            >
              <button
                onClick={() => setSelectedService(null)}
                className="
                absolute
                top-4
                right-4
                sm:top-6
                sm:right-6
                w-9
                h-9
                sm:w-10
                sm:h-10
                shrink-0
                rounded-full
                border
                border-white/20
                text-white
                hover:border-[#d4af37]
                hover:text-[#d4af37]
                duration-300
                "
              >
                ✕
              </button>

              <div className="pr-12 sm:pr-14">
                {selectedService.icon && (
                  <selectedService.icon className="text-[#d4af37] w-12 h-12 sm:w-14 sm:h-14" />
                )}

                <p className="mt-6 uppercase tracking-[6px] text-[#d4af37] text-sm sm:text-base">
                  {selectedService.number}
                </p>

                <h3 className="mt-4 font-serif text-3xl sm:text-4xl leading-tight">
                  {selectedService.title}
                </h3>

                <p className="mt-6 text-gray-400 leading-7 sm:leading-8 text-base">
                  {selectedService.description}
                </p>

                {Array.isArray(selectedService.features) &&
                  selectedService.features.length > 0 && (
                    <ul className="mt-8 space-y-3">
                      {selectedService.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default Services;