import { motion } from 'framer-motion'

export default function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-soft-pink/20 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="font-playfair text-2xl text-deep-purple font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          For Soumya
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {[
            { name: 'Home', id: 'hero' },
            { name: 'Memories', id: 'memories' },
            { name: 'Poem', id: 'poem' },
            { name: 'Letter', id: 'letter' }
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-deep-blue font-lato hover:text-soft-pink transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}
