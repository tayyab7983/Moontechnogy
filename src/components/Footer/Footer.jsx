import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#020202] border-t border-white/10 overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>

      {/* Golden Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-[#d4af37]/10 blur-[150px]"></div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-8 py-8">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Copyright */}

          <p className="text-sm text-gray-500">
            © 2026 MoonTechnology. All Rights Reserved.
          </p>

          {/* Social Icons */}

          <div className="flex items-center gap-5">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="
              w-12
              h-12
              rounded-full
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white
              hover:text-[#d4af37]
              hover:border-[#d4af37]
              duration-300
              "
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="
              w-12
              h-12
              rounded-full
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white
              hover:text-[#d4af37]
              hover:border-[#d4af37]
              duration-300
              "
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="
              w-12
              h-12
              rounded-full
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white
              hover:text-[#d4af37]
              hover:border-[#d4af37]
              duration-300
              "
            >
              <FaGithub size={18} />
            </a>

          </div>

          {/* Back To Top */}

          <button
            onClick={scrollToTop}
            className="
            group
            flex
            items-center
            gap-2
            uppercase
            tracking-[4px]
            text-sm
            text-[#d4af37]
            hover:gap-3
            duration-300
            "
          >
            Back To Top

            <ArrowUpRight
              size={18}
              className="
              group-hover:-translate-y-1
              group-hover:translate-x-1
              duration-300
              "
            />

          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;