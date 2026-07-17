import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-[#2b2b2b]">
      <div className="max-w-[1400px] mx-auto h-16 sm:h-20 flex items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-[3px] sm:tracking-[6px] uppercase"
        >
          <span className="text-white">Moon</span>
          <span className="text-[#c9a44c]">Technogy</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-14">
          {navItems.map((item) => (
            <Link key={item.to} className="navLink" to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden lg:block px-8 py-3 rounded-full border border-[#c9a44c] text-[#c9a44c] uppercase tracking-[3px] hover:bg-[#c9a44c] hover:text-black duration-500 text-center"
        >
          Get Started
        </Link>

        {/* Hamburger Toggle (mobile / tablet) */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-[#2b2b2b] bg-black/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-5 sm:px-8 py-6 gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  <Link
                    to={item.to}
                    className="block py-3.5 text-base uppercase tracking-[2px] text-gray-200 border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * navItems.length, duration: 0.3 }}
              >
                <Link
                  to="/contact"
                  className="mt-6 block w-full text-center px-8 py-3.5 rounded-full border border-[#c9a44c] text-[#c9a44c] uppercase tracking-[3px] hover:bg-[#c9a44c] hover:text-black duration-500"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;