import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CTA() {
  const [showProposal, setShowProposal] = useState(false)

  return (
    <section id="cta" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/40 via-warm-pastel/30 to-soft-teal/40"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920')] bg-cover bg-center opacity-20"></div>
      
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl pointer-events-none"
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

      <div className="text-center z-30 px-8 max-w-4xl relative">
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
          className="flex justify-center items-center relative z-40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setShowProposal(true)}
            className="bg-gradient-to-r from-soft-pink to-warm-pastel text-white px-12 py-6 rounded-full font-lato text-xl font-semibold romantic-glow transition-all duration-300 min-w-[280px] cursor-pointer relative z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            A New Beginning?
          </motion.button>
        </motion.div>
        
        {showProposal && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-white p-8 rounded-3xl text-center max-w-2xl shadow-2xl"
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            >
              <motion.div 
                className="text-8xl mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💍
              </motion.div>
              
              <motion.h2
                className="font-playfair text-3xl text-deep-purple mb-4 font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Soumya, Will You Marry Me?
              </motion.h2>
              
              <motion.p
                className="text-lg text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                💕 You are my everything, my forever, my always 💕
              </motion.p>

              <motion.button
                onClick={() => setShowProposal(false)}
                className="bg-gradient-to-r from-soft-pink to-warm-pastel text-white px-8 py-4 rounded-full font-lato text-lg font-semibold hover:scale-105 transition-all mb-6"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                💕 Yes, Forever! 💕
              </motion.button>

              <motion.div
                className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              >
                <video 
                  src="/videos/GettingBack.mp4"
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

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
