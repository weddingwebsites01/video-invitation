import { motion } from "motion/react";
import { weddingConfig } from "../../config/wedding";
import { Map, Plane, Train, Phone } from "lucide-react";

export function Venue() {
  return (
    <section id="venue" className="py-32 bg-ivory-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl font-display text-maroon-900 mb-6"
          >
            The Destination
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Mock Map using an image for aesthetics, normally this would be a Google Maps iframe */}
            <div className="aspect-square bg-gray-200 rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                alt="Map view"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-maroon-900/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ivory-200 p-4 rounded-full shadow-2xl">
                <Map className="text-maroon-900 w-8 h-8" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-display text-maroon-900 mb-8">Travel Information</h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-maroon-900 text-gold-400 rounded-full flex items-center justify-center shrink-0">
                  <Plane size={24} />
                </div>
                <div>
                  <h4 className="font-medium tracking-wider uppercase text-maroon-900 mb-2">Nearest Airport</h4>
                  <p className="text-maroon-900/70 whitespace-pre-line">{weddingConfig.travel?.airport || "Jaipur International Airport (JAI)\nApprox. 30 minutes drive from the venue."}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-maroon-900 text-gold-400 rounded-full flex items-center justify-center shrink-0">
                  <Train size={24} />
                </div>
                <div>
                  <h4 className="font-medium tracking-wider uppercase text-maroon-900 mb-2">Railway Station</h4>
                  <p className="text-maroon-900/70 whitespace-pre-line">{weddingConfig.travel?.railway || "Jaipur Junction (JP)\nApprox. 20 minutes drive from the venue."}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-maroon-900 text-gold-400 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium tracking-wider uppercase text-maroon-900 mb-2">Concierge & Cabs</h4>
                  <p className="text-maroon-900/70">For travel assistance and pickups:<br/>{weddingConfig.contact.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-maroon-900/10">
              <h4 className="font-display text-2xl text-maroon-900 mb-4">Recommended Hotels</h4>
              <p className="text-maroon-900/70 leading-relaxed mb-6">
                We have arranged block bookings at nearby properties. Please mention the "{weddingConfig.hashtag}" while booking to avail special rates.
              </p>
              <button className="text-sm font-medium tracking-[0.2em] uppercase text-maroon-900 border-b border-maroon-900 pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors">
                View Accommodations Guide
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
