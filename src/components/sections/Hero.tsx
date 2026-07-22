import { motion } from "motion/react";
import { weddingConfig } from "../../config/wedding";
import { ScratchCard } from "../ScratchCard";
import { triggerPartyPopper } from "../PartyPopper";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-maroon-900 pt-24 pb-16">
      {/* Stretched Full-Screen Responsive Rectangular Banner Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src={weddingConfig.heroBannerImage}
          alt="Royal Wedding Banner"
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1] scale-105 transform hover:scale-100 transition-transform duration-1000"
        />
        {/* Subtle royal gradient vignette & gold inner border */}
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-900/80 via-black/40 to-maroon-900/90" />
        <div className="absolute inset-4 sm:inset-8 border border-gold-500/30 pointer-events-none rounded-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4 mt-6"
        >
          <span className="text-gold-400 font-medium tracking-[0.3em] uppercase text-xs md:text-sm border-b border-gold-500/40 pb-1">
            Royal Wedding Celebration
          </span>
        </motion.div>

        {/* Stretched Full-Width Responsive Banner Box over Image */}
        <div className="relative my-2 w-full flex flex-col items-center justify-center py-8 md:py-12">
          {/* Couple Names Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 px-4 py-2 text-center w-full"
          >
            <h1 className="font-script text-6xl sm:text-8xl md:text-[11rem] lg:text-[13rem] text-gold-400 leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] tracking-wide">
              {weddingConfig.bride.name}
            </h1>
            <div className="text-3xl sm:text-5xl md:text-6xl text-ivory-100 font-display my-[-10px] sm:my-[-25px] italic relative z-20 drop-shadow-lg">
              &
            </div>
            <h1 className="font-script text-6xl sm:text-8xl md:text-[11rem] lg:text-[13rem] text-gold-400 leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] tracking-wide">
              {weddingConfig.groom.name}
            </h1>
          </motion.div>
        </div>

        {/* Celebration Popper Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-2 mb-6"
        >
          <button
            onClick={() => triggerPartyPopper()}
            className="px-8 py-3 bg-maroon-900/90 text-gold-400 border border-gold-400/60 hover:bg-gold-500 hover:text-maroon-900 transition-all duration-300 font-medium tracking-[0.2em] uppercase text-xs rounded-full shadow-2xl flex items-center gap-2 group backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-gold-400 group-hover:text-maroon-900" />
            Pop Party Poppers 🎉
          </button>
        </motion.div>

        {/* Scratch Card for Secret Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full max-w-xl"
        >
          <ScratchCard />
        </motion.div>

        {/* Hashtag & Date Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-4 flex flex-col items-center"
        >
          <div className="w-[1px] h-12 bg-gold-400/40 mb-3" />
          <p className="font-display tracking-[0.2em] text-gold-400 uppercase text-sm md:text-base font-semibold drop-shadow">
            {new Date(weddingConfig.weddingDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <p className="mt-1 text-ivory-200/80 tracking-wider text-xs md:text-sm">
            {weddingConfig.hashtag}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
