import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CTA() {
  const [showMessage, setShowMessage] = useState(false)
  const [showWedding, setShowWedding] = useState(false)
  const [windowHeight, setWindowHeight] = useState(800)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

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
            onClick={() => setShowWedding(true)}
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
            onClick={() => setShowMessage(true)}
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

        {showWedding && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              {/* Wedding Rings */}
              <motion.div className="text-center">
                <motion.div
                  className="text-9xl mb-8"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  💍
                </motion.div>
                
                <motion.h2
                  className="font-playfair text-5xl md:text-7xl text-white mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Forever Starts Here
                </motion.h2>
                
                <motion.p
                  className="font-lato text-2xl text-soft-pink mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  👰🤵 Together, Always 💕
                </motion.p>

                {/* Falling Hearts */}
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-4xl"
                    style={{
                      left: `${(i * 3.33) % 100}%`,
                      top: `-10%`
                    }}
                    animate={{
                      y: [0, windowHeight + 100],
                      rotate: [0, 360],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3 + (i % 3),
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  >
                    {i % 3 === 0 ? '❤️' : i % 3 === 1 ? '💕' : '💖'}
                  </motion.div>
                ))}

                <motion.button
                  onClick={() => setShowWedding(false)}
                  className="mt-8 bg-white text-deep-purple px-8 py-4 rounded-full font-lato text-lg font-semibold hover:scale-105 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {showMessage && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: [0.5, 1.2, 1],
              y: 0,
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 1.5,
              type: "spring",
              bounce: 0.5
            }}
          >
            <motion.div
              className="bg-gradient-to-r from-soft-pink via-warm-pastel to-soft-teal p-8 rounded-3xl shadow-2xl border-4 border-white"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 196, 196, 0.5)",
                  "0 0 40px rgba(255, 214, 165, 0.8)",
                  "0 0 60px rgba(160, 231, 229, 0.8)",
                  "0 0 40px rgba(255, 214, 165, 0.8)",
                  "0 0 20px rgba(255, 196, 196, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <motion.p
                className="font-playfair text-4xl md:text-6xl text-white font-bold"
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                📞 You Know The Number 💕
              </motion.p>
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
