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
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
            <div className="bg-white p-8 rounded-lg text-center max-w-md">
              <div className="text-6xl mb-4">💍</div>
              <h2 className="text-2xl font-bold mb-4">Soumya, Will You Marry Me?</h2>
              <p className="mb-6">💕 You are my everything, my forever, my always 💕</p>
              <button
                onClick={() => setShowProposal(false)}
                className="bg-pink-500 text-white px-6 py-2 rounded"
              >
                💕 Yes, Forever! 💕
              </button>
            </div>
          </div>
        )}

        {showMessage && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50" onClick={() => setShowMessage(false)}>
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-8 rounded-lg text-center" onClick={(e) => e.stopPropagation()}>
              <p className="text-4xl text-white font-bold mb-4">
                😎 You Know What To Do 💕
              </p>
              <button
                onClick={() => setShowMessage(false)}
                className="bg-white text-purple-600 px-6 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
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
