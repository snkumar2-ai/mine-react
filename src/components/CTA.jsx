import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CTA() {
  const [showMessage, setShowMessage] = useState(false)
  const [showProposal, setShowProposal] = useState(false)
  const [windowHeight, setWindowHeight] = useState(800)
  const [clickCount, setClickCount] = useState(0)

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
          className="flex flex-col sm:flex-row gap-8 justify-center items-center relative z-40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={(e) => {
              console.log('Proposal button clicked!')
              e.preventDefault()
              e.stopPropagation()
              setClickCount(prev => prev + 1)
              setShowProposal(true)
              console.log('showProposal set to true')
            }}
            className="bg-gradient-to-r from-soft-pink to-warm-pastel text-white px-12 py-6 rounded-full font-lato text-xl font-semibold romantic-glow transition-all duration-300 min-w-[280px] cursor-pointer relative z-50 hover:scale-105"
          >
            A New Beginning? {clickCount > 0 && `(${clickCount})`}
          </button>
          
          <button
            onClick={(e) => {
              console.log('Message button clicked!')
              e.preventDefault()
              e.stopPropagation()
              setShowMessage(true)
              console.log('showMessage set to true')
            }}
            className="bg-gradient-to-r from-soft-teal to-deep-purple text-white px-12 py-6 rounded-full font-lato text-xl font-semibold romantic-glow transition-all duration-300 min-w-[280px] cursor-pointer relative z-50 hover:scale-105"
          >
            If You Want to Talk...
          </button>
        </motion.div>

        <p className="text-white mt-4">Debug: showProposal={showProposal.toString()}, showMessage={showMessage.toString()}</p>
        
        {showProposal && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="text-center relative">
              {/* Ring Box Opening */}
              <motion.div
                className="text-8xl mb-8"
                initial={{ rotateX: 0 }}
                animate={{ rotateX: [0, -90, 0] }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                💍
              </motion.div>
              
              <motion.h2
                className="font-playfair text-4xl md:text-6xl text-white mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                Soumya, Will You Marry Me?
              </motion.h2>
              
              <motion.p
                className="font-lato text-xl text-soft-pink mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                💕 You are my everything, my forever, my always 💕
              </motion.p>

              {/* Sparkles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-3xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                >
                  ✨
                </motion.div>
              ))}

              <motion.button
                onClick={() => setShowProposal(false)}
                className="mt-8 bg-gradient-to-r from-soft-pink to-warm-pastel text-white px-8 py-4 rounded-full font-lato text-lg font-semibold hover:scale-105 transition-all"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                💕 Yes, Forever! 💕
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {showMessage && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowMessage(false)}
          >
            <motion.div
              className="bg-gradient-to-r from-soft-pink via-warm-pastel to-soft-teal p-12 rounded-3xl shadow-2xl border-4 border-white"
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ 
                scale: 1,
                rotate: 0,
                boxShadow: [
                  "0 0 20px rgba(255, 196, 196, 0.5)",
                  "0 0 40px rgba(255, 214, 165, 0.8)",
                  "0 0 60px rgba(160, 231, 229, 0.8)",
                  "0 0 40px rgba(255, 214, 165, 0.8)",
                  "0 0 20px rgba(255, 196, 196, 0.5)"
                ]
              }}
              transition={{ 
                scale: { duration: 0.8, type: "spring", bounce: 0.5 },
                rotate: { duration: 0.8 },
                boxShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" }
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.p
                className="font-playfair text-5xl md:text-7xl text-white font-bold"
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                😎 You Know What To Do 💕
              </motion.p>
              
              <motion.button
                onClick={() => setShowMessage(false)}
                className="mt-8 bg-white text-deep-purple px-8 py-4 rounded-full font-lato text-lg font-semibold hover:scale-105 transition-all"
                whileHover={{ scale: 1.1 }}
              >
                Close
              </motion.button>
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
