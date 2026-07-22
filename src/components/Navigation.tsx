import { motion } from "motion/react";
import { useScroll } from "../hooks/useScroll";
import { cn } from "../lib/utils";
import { Music, Menu, X, Moon } from "lucide-react";
import { useState } from "react";
import { weddingConfig } from "../config/wedding";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Family", href: "#family" },
  { label: "Venue", href: "#venue" },
];

export function Navigation() {
  const scrolled = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Real implementation would interact with an audio element
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled 
            ? "bg-ivory-200/80 backdrop-blur-md py-4 shadow-sm" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-script text-2xl text-maroon-900 tracking-wider">
            {weddingConfig.bride.name} & {weddingConfig.groom.name}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-widest uppercase text-maroon-900 hover:text-gold-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex items-center space-x-4 ml-8 border-l border-maroon-900/20 pl-8">
              <button onClick={toggleMusic} className="text-maroon-900 hover:text-gold-500 transition-colors">
                <Music size={18} className={cn(isPlaying && "animate-pulse text-gold-500")} />
              </button>
              <button className="text-maroon-900 hover:text-gold-500 transition-colors">
                <Moon size={18} />
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-maroon-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-ivory-200 flex flex-col items-center justify-center space-y-8"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display text-maroon-900 hover:text-gold-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}
