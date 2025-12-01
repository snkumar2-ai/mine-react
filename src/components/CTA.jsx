import React, { useState } from 'react'

function CTA() {
  const [showProposal, setShowProposal] = useState(false)

  return (
    <section id="cta" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(45deg, #FFB6C1, #E6E6FA)' }}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2 style={{ fontSize: '3rem', color: '#4B0082', marginBottom: '20px' }}>
          💕 UPDATED VERSION 2024 💕
        </h2>
        
        <p style={{ fontSize: '1.5rem', color: '#2F4F4F', marginBottom: '30px', fontStyle: 'italic' }}>
          "Soumya... If any part of this reaches you... even if it's just a small spark... I'd love to talk again."
        </p>

        <button
          onClick={() => setShowProposal(true)}
          style={{ 
            background: '#FF69B4', 
            color: 'white', 
            padding: '15px 30px', 
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer'
          }}
        >
          💍 A New Beginning? 💍
        </button>

        {showProposal && (
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            background: 'rgba(0,0,0,0.8)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '15px', 
              textAlign: 'center',
              maxWidth: '400px'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💍</div>
              <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Soumya, Will You Marry Me?</h2>
              <p style={{ marginBottom: '20px' }}>💕 You are my everything, my forever, my always 💕</p>
              <button
                onClick={() => setShowProposal(false)}
                style={{ 
                  background: '#FF1493', 
                  color: 'white', 
                  padding: '10px 20px', 
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer'
                }}
              >
                💕 Yes, Forever! 💕
              </button>
            </div>
          </div>
        )}

        <p style={{ marginTop: '30px', color: '#696969', fontStyle: 'italic' }}>
          No pressure. No expectations. Just honesty and hope.
        </p>
      </div>
    </section>
  )
}

export default CTA
