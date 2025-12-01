import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Letter() {
  const [showLetter, setShowLetter] = useState(false)

  return (
    <section id="letter" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-pastel/20 via-soft-teal/10 to-soft-pink/20"></div>
      
      <div className="max-w-5xl mx-auto px-8 text-center z-10">
        <motion.h2 
          className="font-playfair text-5xl md:text-7xl text-deep-purple mb-12 text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          A Personal Letter for Soumya
        </motion.h2>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-lato text-xl text-deep-blue mb-8 italic">
            "I've been meaning to say this for a long time..."
          </p>
          
          <motion.button
            onClick={() => setShowLetter(!showLetter)}
            className="bg-gradient-to-r from-deep-purple to-soft-pink text-white px-12 py-6 rounded-full font-lato text-lg font-semibold romantic-glow transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Open the Letter
          </motion.button>
        </motion.div>

        {showLetter && (
          <motion.div
            className="bg-white/90 p-12 rounded-3xl backdrop-blur-md border border-soft-pink/50 shadow-2xl text-left max-h-[600px] overflow-y-auto"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="font-lato text-lg text-deep-blue leading-relaxed space-y-6">
              <p><span className="text-deep-purple font-semibold text-xl">Soumya,</span></p>
              
              <p>I've been meaning to say this for a long time, and I hope you'll read it with the same softness I'm writing it with.</p>
              
              <p className="text-soft-pink">I'm truly sorry for the misunderstanding that pulled us apart. It wasn't intentional, and I never meant for my words to hurt you or be taken in a way that caused pain. I should have expressed myself better. I should have been calmer, clearer, and more understanding. I should have protected our bond instead of letting a moment break it.</p>
              
              <p className="text-soft-teal">For the past year that we were together, you brought peace, joy, laughter, and memories that still feel warm when I think about them. Bali, the ATV rides, snorkelling, the ferry winds, Mysore Dussehra, Bandipur's quiet, Singapore's lights — every single place felt more alive because you were beside me. Those memories aren't just photographs to me… they're pieces of my heart.</p>
              
              <p className="text-deep-purple">All I want is a chance — not to restart what was, but to begin something new… a fresh version of us, softer, wiser, more honest, more patient.</p>
              
              <p className="text-soft-pink italic">If your heart is even slightly open to it… I'd love to talk again. No pressure. No expectations. Just two people who once meant so much to each other… seeing if they can find their way back with gentleness.</p>
              
              <p>You meant more to me than I was ever able to put into words.<br/>I'm finally trying to say it now — sincerely.</p>
              
              <p className="text-deep-purple font-semibold text-right text-xl mt-8">Yours,<br/>Nanda Kumar</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
