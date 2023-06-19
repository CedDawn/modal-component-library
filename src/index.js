import React from 'react'
import { render } from 'react-dom'
import { Modal, handleOpen } from './lib'

function App() {
  return (
    <div>
      <button onClick={handleOpen}>Afficher la modale</button>
      <Modal content="Employee created." />
    </div>
  )
}

render(<App />, document.getElementById('root'))
