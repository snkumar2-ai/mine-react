import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export default function MemoryGallery() {
  const [hoveredImage, setHoveredImage] = useState(null)
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollRef.current
    const scrollAmount = 200
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  const memories = [
    { caption: "This smile made everything worth it.", location: "Bali ATV trails", color: "from-soft-pink/40 to-warm-pastel/40" },
    { caption: "A moment I wish I could live again.", location: "Ocean underwater", color: "from-soft-teal/40 to-soft-pink/40" },
    { caption: "Where happiness looked like you.", location: "Ferry winds", color: "from-warm-pastel/40 to-soft-teal/40" },
    { caption: "This day still feels alive inside me.", location: "Mysore lights", color: "from-deep-purple/40 to-soft-pink/40" },
    { caption: "If time had a favorite memory — this was it.", location: "Bandipur calm", color: "from-soft-pink/40 to-deep-purple/40" },
    { caption: "I didn't know peace until this moment.", location: "Singapore magic", color: "from-soft-teal/40 to-warm-pastel/40" }
  ]

  return (
    <section id="memories" className="min-h-screen py-20 bg-gradient-to-br from-deep-purple/10 via-soft-pink/5 to-soft-teal/10">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-5xl md:text-7xl text-deep-purple mb-8 text-glow">
            Our Moments — The Ones Still Breathing
          </h2>
          <p className="font-lato text-xl text-deep-blue max-w-3xl mx-auto leading-relaxed">
            I wish you knew how often I go back to the memories we made...
          </p>
        </motion.div>

        <div className="relative mb-16">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-soft-pink/80 hover:bg-soft-pink text-white p-2 rounded-full shadow-lg transition-all"
          >
            ←
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-soft-pink/80 hover:bg-soft-pink text-white p-2 rounded-full shadow-lg transition-all"
          >
            →
          </button>
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer flex-shrink-0 w-32 h-32"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredImage(index)}
                onHoverEnd={() => setHoveredImage(null)}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-full h-full bg-gradient-to-br ${memory.color} rounded-2xl backdrop-blur-sm border border-soft-pink/20 flex items-center justify-center relative overflow-hidden shadow-lg`}>
                  <div className="text-center p-3">
                    <p className="text-deep-purple font-lato text-xs mb-2 font-semibold">{memory.location}</p>
                    <div className="w-12 h-12 bg-white/20 rounded-full mx-auto"></div>
                  </div>
                  
                  {hoveredImage === index && (
                    <motion.div
                      className="absolute inset-0 bg-deep-purple/90 rounded-2xl flex items-center justify-center p-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white font-lato text-center text-sm italic leading-relaxed">
                        {memory.caption}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-soft-pink to-warm-pastel text-white px-10 py-5 rounded-full font-lato text-lg font-semibold romantic-glow transition-all duration-300 hover:scale-105">
            Walk Through Our Memories
          </button>
        </motion.div>
      </div>
    </section>
  )
}
