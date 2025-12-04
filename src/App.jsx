import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SectionTextImage from './components/SectionTextImage'
import MemoryGallery from './components/MemoryGallery'
import Poem from './components/Poem'
import Letter from './components/Letter'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <SectionTextImage 
        id="where-we-began"
        title="Where We Began"
        content={[
          { text: "You came into my life quietly...", italic: true },
          { text: "not like a storm, but like a sunrise." },
          { text: "Soft... warm... gentle.", highlight: true }
        ]}
        voiceOver="You came into my life quietly... not like a storm, but like a sunrise. Soft... warm... gentle. I didn't even realize it at first... but you changed the way my world felt. You made ordinary moments glow. You made silence feel safe. And somewhere between your laughter and your calmness... I found home."
        imageUrl="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800"
        videoUrl="/videos/GettingBack.mp4"
        reverse={false}
      />
      <SectionTextImage 
        id="things-never-said"
        title="The Things I Never Said"
        content={[
          { text: "There are things, Soumya..." },
          { text: "that I should've said.", highlight: true },
          { text: "Words I should've chosen better." },
          { text: "The misunderstanding between us... it wasn't intentional.", italic: true }
        ]}
        voiceOver="There are things, Soumya... that I should've said. Words I should've chosen better. Moments where I should've slowed down, listened more deeply, understood more gently. The misunderstanding between us... it wasn't intentional. It was just a message... read differently... at the wrong moment... and my heart never forgave itself since."
        imageUrl="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800"
        reverse={true}
      />
      <MemoryGallery />
      <Poem />
      <Letter />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
