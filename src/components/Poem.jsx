import { motion } from 'framer-motion'

export default function Poem() {
  const poemLines = [
    "My heart still carries",
    "the softness of your name —",
    "Soumya,",
    "like a whisper the universe forgot to take back.",
    "",
    "You were the calm in my restless days,",
    "the laughter that made reality feel lighter,",
    "the quiet that felt like belonging.",
    "",
    "I lost you not because love faded,",
    "but because words failed me",
    "in a moment when they mattered most.",
    "",
    "And if this life gives me one more chance",
    "to stand beside you…",
    "I would hold your heart as if it were the sky —",
    "wide, beautiful, and deserving of every sunrise.",
    "",
    "Soumya… if you ever feel a spark",
    "of what once lived between us… know this:",
    "",
    "My door is open,",
    "my heart is honest,",
    "and my wish is simple —",
    "",
    "to begin again with gentleness and truth."
  ]

  return (
    <section id="poem" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/20 via-soft-pink/10 to-warm-pastel/20"></div>
      
      <div className="max-w-4xl mx-auto px-8 text-center z-10">
        <motion.h2 
          className="font-playfair text-5xl md:text-7xl text-deep-purple mb-8 text-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          A Poem Dedicated to Soumya
        </motion.h2>

        <motion.h3
          className="font-cinzel text-2xl md:text-3xl text-soft-pink mb-12 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          "Soumya… if my heart could speak"
        </motion.h3>

        <div className="bg-white/80 p-12 rounded-3xl backdrop-blur-md border border-soft-pink/50 shadow-2xl">
          <div className="font-lato text-lg md:text-xl text-deep-blue leading-relaxed text-left space-y-4">
            {poemLines.map((line, index) => (
              <motion.p
                key={index}
                className={`${line === "" ? "mb-4" : ""} ${
                  line.includes("Soumya") ? "text-soft-pink font-semibold" : ""
                } ${
                  line.includes("calm") || line.includes("laughter") || line.includes("quiet") ? "text-soft-teal" : ""
                } ${
                  line.includes("door") || line.includes("heart") || line.includes("wish") ? "text-deep-purple font-semibold" : ""
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
