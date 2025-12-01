import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [showVoiceOver, setShowVoiceOver] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load voices
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices()
    }
  }, [])

  const playVoiceOver = () => {
    const text = "Soumya... Before anything else... I hope you're smiling. Even if life has pulled us in different directions... I hope the light in you never dimmed. This... is something I should've said earlier... But maybe it's reaching you at the right time."
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      
      const speak = () => {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.rate = 0.8
        utterance.pitch = 0.8
        utterance.volume = 1
        
        // Get male voice
        const voices = window.speechSynthesis.getVoices()
        const maleVoice = voices.find(voice => 
          voice.lang.includes('en') && (
            voice.name.toLowerCase().includes('male') || 
            voice.name.includes('David') || 
            voice.name.includes('James') ||
            voice.name.includes('Google UK English Male') ||
            voice.name.includes('Microsoft David')
          )
        ) || voices.find(voice => voice.lang.includes('en'))
        
        if (maleVoice) utterance.voice = maleVoice
        
        utterance.onstart = () => setIsPlaying(true)
        utterance.onend = () => setIsPlaying(false)
        utterance.onerror = () => setIsPlaying(false)
        
        window.speechSynthesis.speak(utterance)
        setShowVoiceOver(true)
      }
      
      // Ensure voices are loaded
      if (window.speechSynthesis.getVoices().length > 0) {
        speak()
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          speak()
        }
      }
    } else {
      alert('Voice-over not supported in this browser. Please use Chrome, Edge, or Safari.')
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/40 via-warm-pastel/30 to-soft-teal/40"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=1920')] bg-cover bg-center opacity-30"></div>
      
      {/* Floating Particles */}
      {mounted && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-soft-pink/40 rounded-full"
          style={{
            left: `${(i * 5) % 100}%`,
            top: `${(i * 7) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}

      <div className="text-center z-20 px-8 max-w-5xl">
        <motion.h1 
          className="font-playfair text-6xl md:text-8xl text-deep-purple mb-8 text-glow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          If This Reaches Your Heart...
        </motion.h1>

        <motion.p
          className="font-lato text-xl md:text-2xl text-deep-blue leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          Soumya... Before anything else... I hope you're smiling.
        </motion.p>

        <motion.button
          onClick={playVoiceOver}
          className="bg-gradient-to-r from-soft-pink to-warm-pastel text-white px-12 py-6 rounded-full font-lato text-lg font-semibold romantic-glow transition-all duration-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ scale: 1.05 }}
        >
          {isPlaying ? '🔊 Playing...' : '🎙️ Read My Heart'}
        </motion.button>

        {showVoiceOver && (
          <motion.div
            className="mt-8 p-8 bg-white/80 rounded-3xl backdrop-blur-md text-deep-blue font-lato text-lg leading-relaxed border border-soft-pink/50 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>"Soumya...</p>
            <p>Before anything else...</p>
            <p>I hope you're smiling.</p>
            <p>Even if life has pulled us in different directions...</p>
            <p>I hope the light in you never dimmed.</p>
            <p>This... is something I should've said earlier...</p>
            <p>But maybe it's reaching you at the right time."</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
