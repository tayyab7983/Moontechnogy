import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import SectionTitle from "../Common/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-32"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Left Glow */}
      <div className="absolute -left-52 top-40 h-[600px] w-[600px] rounded-full bg-[#d4af37]/10 blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-8">

        {/* Heading */}

        <SectionTitle
          subtitle="About Us"
          title={
            <>
              Crafting Future
              <br />
              Digital Experiences
            </>
          }
        />

        {/* Content */}

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            {/* Vertical Line */}

            <div className="mb-10 flex items-center gap-5">

              <div className="h-24 w-[2px] bg-[#d4af37]"></div>

              <p className="uppercase tracking-[5px] text-gray-500">

                Who We Are

              </p>

            </div>

            <p className="max-w-[620px] text-lg leading-9 text-gray-400">

              MoonTechnology is a modern digital agency dedicated to
              crafting premium websites, AI-powered solutions, scalable
              web applications and immersive digital experiences.

              <br />
              <br />

              Our mission is to transform innovative ideas into
              beautiful, high-performance digital products that help
              businesses grow in today's competitive market.

            </p>

            <button className="mt-12 rounded-full border border-[#d4af37] px-8 py-4 text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-black">

              Learn More

            </button>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-6"
          >

            <AboutCard
              number={12}
              subtitle="Projects Completed"
            />

            <AboutCard
              number={6}
              subtitle="Happy Clients"
            />

            <AboutCard
              number={24}
              subtitle="Support Available"
            />

            <AboutCard
              number={100}
              subtitle="Responsive Design"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;