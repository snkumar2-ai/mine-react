import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/40 via-warm-pastel/30 to-soft-teal/40"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920')] bg-cover bg-center opacity-20"></div>
      
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          style={{
            left: `${(i * 10) % 100}%`,
            top: `${(i * 15) % 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + (i % 2),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          ❤️
        </motion.div>
      ))}

      <div className="text-center z-20 px-8 max-w-4xl">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-5xl md:text-7xl text-deep-purple mb-8 text-glow">
            The Gentle Ask
          </h2>
          
          <p className="font-lato text-2xl text-deep-blue leading-relaxed mb-12 italic">
            "Soumya... If any part of this reaches you... even if it's just a small spark... I'd love to talk again."
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-soft-pink to-warm-pastel text-white px-12 py-6 rounded-full font-lato text-xl font-semibold romantic-glow transition-all duration-300 min-w-[280px]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 196, 196, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            A New Beginning?
          </motion.button>
          
          <motion.button
            className="bg-gradient-to-r from-soft-teal to-deep-purple text-white px-12 py-6 rounded-full font-lato text-xl font-semibold romantic-glow transition-all duration-300 min-w-[280px]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(160, 231, 229, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            If You Want to Talk...
          </motion.button>
        </motion.div>

        <motion.p
          className="mt-12 text-deep-blue/60 font-lato text-sm italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 1 }}
        >
          No pressure. No expectations. Just honesty and hope.
        </motion.p>
      </div>
    </section>
  )
}
