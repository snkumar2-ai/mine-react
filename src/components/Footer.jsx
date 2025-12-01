import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="footer" className="py-16 bg-gradient-to-br from-deep-purple/20 via-deep-blue/10 to-soft-pink/10">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-3xl text-deep-purple">
            Contact
          </h3>
          
          <div className="space-y-4 text-deep-blue font-lato">
            <p className="text-lg">If your heart is ready for a conversation...</p>
            <div className="flex justify-center space-x-8">
              <motion.button 
                className="text-soft-teal hover:text-deep-purple transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Email
              </motion.button>
              <motion.button 
                className="text-soft-teal hover:text-deep-purple transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Call
              </motion.button>
              <motion.button 
                className="text-soft-teal hover:text-deep-purple transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Message
              </motion.button>
            </div>
          </div>

          <motion.div
            className="pt-8 border-t border-soft-pink/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <p className="text-deep-purple/60 font-lato text-sm italic">
              Made with love, hope, and sincerity
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
