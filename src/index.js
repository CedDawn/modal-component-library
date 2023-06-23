import React from 'react'
import { createRoot } from 'react-dom/client'
import { Modal, handleOpen } from './lib'

function App() {
  return (
    <div>
      <button onClick={handleOpen}>Afficher la modale</button>
      <Modal content="Employee created." />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
