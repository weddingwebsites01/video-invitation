import { motion } from "motion/react";
import { weddingConfig } from "../../config/wedding";
import { MapPin, Calendar, Clock } from "lucide-react";

export function Events() {
  return (
    <section id="events" className="py-32 bg-maroon-900 text-ivory-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl font-display text-gold-400 mb-6"
          >
            The Celebrations
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold-500 mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {weddingConfig.events.map((event, index) => {
            const dateObj = new Date(event.date);
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <h3 className="text-3xl font-display text-gold-400 mb-2">{event.title}</h3>
                  </div>
                </div>

                <div className="space-y-4 px-4">
                  <div className="flex items-center text-ivory-200/80">
                    <Calendar size={18} className="mr-4 text-gold-500" />
                    <span className="tracking-wider">{dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-ivory-200/80">
                    <Clock size={18} className="mr-4 text-gold-500" />
                    <span className="tracking-wider">{dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
                  </div>
                  <div className="flex items-start text-ivory-200/80">
                    <MapPin size={18} className="mr-4 text-gold-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-ivory-200">{event.venue}</p>
                      <p className="text-sm opacity-80 mt-1">{event.address}</p>
                    </div>
                  </div>
                  
                  <p className="pt-4 text-ivory-200/70 text-sm leading-relaxed border-t border-ivory-200/10 mt-6">
                    {event.description}
                  </p>
                  
                  <div className="pt-4">
                    <span className="text-xs tracking-[0.2em] uppercase text-gold-500">Dress Code: </span>
                    <span className="text-sm text-ivory-200/90">{event.dressCode}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
