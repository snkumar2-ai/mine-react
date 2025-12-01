import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="footer" className="py-16 bg-gradient-to-br from-deep-purple/20 via-deep-blue/10 to-soft-pink/10">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <p className="text-deep-purple/60 font-lato text-sm italic">
            Made with love, hope, and sincerity
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
