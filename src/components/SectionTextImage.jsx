import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SectionTextImage({ id, title, content, voiceOver, imageUrl, reverse }) {
  const [showVoiceOver, setShowVoiceOver] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const playVoiceOver = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(voiceOver)
      utterance.rate = 0.9
      utterance.pitch = 0.9
      utterance.volume = 1
      
      const voices = window.speechSynthesis.getVoices()
      const maleVoice = voices.find(voice => 
        voice.name.includes('Male') || 
        voice.name.includes('David') || 
        voice.name.includes('Google US English')
      )
      if (maleVoice) utterance.voice = maleVoice
      
      utterance.onstart = () => setIsPlaying(true)
      utterance.onend = () => setIsPlaying(false)
      
      window.speechSynthesis.speak(utterance)
      setShowVoiceOver(true)
    }
  }

  return (
    <section id={id} className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-pastel/20 via-soft-teal/10 to-soft-pink/20"></div>
      
      <div className={`max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center z-10 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <motion.div
          className={`space-y-8 ${reverse ? 'md:order-2' : ''}`}
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-5xl md:text-7xl text-deep-purple text-glow">
            {title}
          </h2>
          
          <div className="font-lato text-xl md:text-2xl text-deep-blue leading-relaxed space-y-6">
            {content.map((item, index) => (
              <motion.p 
                key={index}
                className={`${item.italic ? 'italic' : ''} ${item.highlight ? 'text-soft-teal font-semibold text-2xl' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {item.text}
              </motion.p>
            ))}
          </div>

          <motion.button
            onClick={playVoiceOver}
            className="bg-gradient-to-r from-soft-teal to-warm-pastel text-white px-10 py-5 rounded-full font-lato text-lg font-semibold romantic-glow transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {isPlaying ? '🔊 Playing...' : '🎙️ Play Voice-Over'}
          </motion.button>

          {showVoiceOver && (
            <motion.div
              className="p-8 bg-white/80 rounded-3xl backdrop-blur-md text-deep-blue font-lato leading-relaxed border border-soft-teal/50 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p>"{voiceOver}"</p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className={`relative ${reverse ? 'md:order-1' : ''}`}
          initial={{ opacity: 0, x: reverse ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
