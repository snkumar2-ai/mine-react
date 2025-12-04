import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SectionTextImage({ id, title, content, voiceOver, audioFile, imageUrl, videoUrl, reverse }) {
  const [showVoiceOver, setShowVoiceOver] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState(null)

  const playVoiceOver = () => {
    // Try to play custom audio file first
    if (audioFile) {
      try {
        const audioElement = new Audio(audioFile)
        audioElement.onloadstart = () => setIsPlaying(true)
        audioElement.onended = () => setIsPlaying(false)
        audioElement.onerror = () => {
          setIsPlaying(false)
          // Fallback to text-to-speech if audio file fails
          playTextToSpeech()
        }
        audioElement.play()
        setShowVoiceOver(true)
        setAudio(audioElement)
        return
      } catch (error) {
        console.log('Audio file failed, using text-to-speech')
      }
    }
    
    // Fallback to text-to-speech
    playTextToSpeech()
  }

  const playTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      
      const speak = () => {
        const utterance = new SpeechSynthesisUtterance(voiceOver)
        utterance.rate = 0.6
        utterance.pitch = 0.7
        utterance.volume = 0.8
        
        const voices = window.speechSynthesis.getVoices()
        const emotionalMaleVoice = voices.find(voice => 
          voice.lang.includes('en') && (
            voice.name.includes('Google UK English Male') ||
            voice.name.includes('Daniel') ||
            voice.name.includes('David') ||
            voice.name.toLowerCase().includes('male')
          )
        ) || voices.find(voice => voice.lang.includes('en'))
        
        if (emotionalMaleVoice) utterance.voice = emotionalMaleVoice
        
        utterance.onstart = () => setIsPlaying(true)
        utterance.onend = () => setIsPlaying(false)
        utterance.onerror = () => setIsPlaying(false)
        
        window.speechSynthesis.speak(utterance)
        setShowVoiceOver(true)
      }
      
      if (window.speechSynthesis.getVoices().length > 0) {
        speak()
      } else {
        window.speechSynthesis.onvoiceschanged = () => speak()
      }
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
            {isPlaying ? '🔊 Playing...' : (audioFile ? '🎤 Play My Voice' : '🎙️ Play Voice-Over')}
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
            {videoUrl ? (
              <video 
                src={videoUrl}
                className="w-full h-full object-cover"
                controls
                muted
                loop
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
