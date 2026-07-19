import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

function About() {

  const storyRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".storyLeft", {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".storyRight", {
        x: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 75%",
        },
      });

    });

    return () => ctx.revert();

  }, []);

  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden bg-[#050505] text-white">

        {/* Grid */}

        <div className="absolute inset-0 bg-grid opacity-10"></div>

        {/* Glow */}

        <div className="absolute -left-52 top-0 w-[650px] h-[650px] rounded-full bg-[#d4af37]/10 blur-[180px]"></div>

        <div className="absolute right-0 bottom-0 w-[650px] h-[650px] rounded-full bg-[#d4af37]/10 blur-[180px]"></div>

        <div className="relative z-10 max-w-[1450px] mx-auto px-8">

          {/* HERO */}

          <section className="min-h-screen flex items-center pt-24 pb-40">

            <div>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .7 }}
                className="uppercase tracking-[8px] text-[#d4af37]"
              >
                ABOUT US
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
                mt-8
                font-serif
                leading-[0.88]
                text-[72px]
                md:text-[100px]
                lg:text-[140px]
                "
              >
                Building
                <br />
                Digital
                <br />
                Experiences
                <br />
                That Matter.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .4 }}
                className="
                mt-16
                max-w-[760px]
                text-gray-400
                text-lg
                leading-9
                "
              >
                MoonTechnology is a premium digital agency creating
                modern websites, AI automation, SaaS platforms and
                mobile applications.

                We combine beautiful design with scalable technology
                to help businesses grow and create unforgettable
                digital experiences.
              </motion.p>

            </div>

          </section>

          {/* OUR STORY */}

          <section
            ref={storyRef}
            className="pt-40 pb-52"
          >

            <div className="grid lg:grid-cols-2 gap-36 items-center">

              {/* Left */}

              <div className="storyLeft">

                <p className="uppercase tracking-[8px] text-[#d4af37]">

                  OUR STORY

                </p>

                <h2
                  className="
                  mt-8
                  font-serif
                  text-[72px]
                  leading-[0.92]
                  "
                >
                  We Build
                  <br />
                  Digital
                  <br />
                  Products
                  <br />
                  People
                  Remember.
                </h2>

                <p
                  className="
                  mt-14
                  text-gray-400
                  leading-9
                  text-lg
                  max-w-[620px]
                  "
                >
                  We don't just build websites.

                  We craft premium digital products that
                  help businesses establish trust,
                  improve customer experience
                  and achieve long-term growth.

                  Every project is built with performance,
                  scalability and premium design in mind.
                </p>

              </div>

              {/* Right */}

              <div className="storyRight">

                <div
                  className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/10
                  bg-[#0b0b0b]
                  p-14
                  "
                >

                  <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-[#d4af37]/20 blur-[120px]"></div>

                  <p className="uppercase tracking-[6px] text-[#d4af37]">

                    MoonTechnology

                  </p>

                  <h1
                    className="
                    mt-6
                    font-serif
                    text-[110px]
                    leading-none
                    "
                  >
                    2026
                  </h1>

                  <div className="mt-12 space-y-8">

                    <div className="flex justify-between border-b border-white/10 pb-5">

                      <span className="text-gray-400">
                        Founded
                      </span>

                      <span>2026</span>

                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-5">

                      <span className="text-gray-400">
                        Specialization
                      </span>

                      <span>Digital Products</span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-gray-400">
                        Mission
                      </span>

                      <span>Build Better</span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>
                    {/* STATS */}

          <section className="pb-52">

            <p className="uppercase tracking-[8px] text-[#d4af37]">

              OUR IMPACT

            </p>

            <h2
              className="
              mt-8
              font-serif
              text-[72px]
              leading-[0.9]
              "
            >
              Numbers That
              <br />
              Speak For Us.
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

              {[
                { number: "10+", title: "Projects" },
                { number: "2+", title: "Years" },
                { number: "100%", title: "Client Focus" },
                { number: "24/7", title: "Support" },
              ].map((item, index) => (

                <motion.div

                  key={index}

                  initial={{
                    opacity:0,
                    y:50
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  viewport={{
                    once:true
                  }}

                  transition={{
                    delay:index*.15
                  }}

                  whileHover={{
                    y:-8
                  }}

                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-[#0b0b0b]
                  p-10
                  hover:border-[#d4af37]
                  duration-300
                  "
                >

                  <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[#d4af37]/20 blur-[120px] opacity-0 group-hover:opacity-100 duration-500"></div>

                  <h2 className="relative text-6xl font-bold text-[#d4af37]">

                    {item.number}

                  </h2>

                  <p className="relative mt-6 uppercase tracking-[3px] text-gray-400">

                    {item.title}

                  </p>

                </motion.div>

              ))}

            </div>

          </section>

          {/* TECH STACK */}

          <section className="pb-52">

            <p className="uppercase tracking-[8px] text-[#d4af37]">

              TECH STACK

            </p>

            <h2
              className="
              mt-8
              font-serif
              text-[72px]
              leading-[0.9]
              "
            >
              Technologies
              <br />
              We Use.
            </h2>

            <p
              className="
              mt-10
              max-w-[700px]
              text-gray-400
              leading-9
              "
            >
              We build modern digital products using
              industry-leading technologies focused on
              performance, scalability and premium user experience.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

              {[
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Tailwind CSS",
                "GSAP",
                "Three.js",
                "Python",
              ].map((tech, index) => (

                <motion.div

                  key={index}

                  initial={{
                    opacity:0,
                    scale:.8
                  }}

                  whileInView={{
                    opacity:1,
                    scale:1
                  }}

                  viewport={{
                    once:true
                  }}

                  transition={{
                    delay:index*.08
                  }}

                  whileHover={{
                    y:-8,
                    scale:1.04
                  }}

                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#0b0b0b]
                  py-12
                  hover:border-[#d4af37]
                  duration-300
                  "
                >

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-[#d4af37]/10 blur-[100px] opacity-0 group-hover:opacity-100 duration-500"></div>

                  <h3 className="relative text-center text-3xl font-semibold">

                    {tech}

                  </h3>

                </motion.div>

              ))}

            </div>

          </section>

        </div>

      </section>

      <Footer />

    </>
  );

}

export default About;