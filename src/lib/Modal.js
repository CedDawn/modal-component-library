import React from 'react'
import './Modal.css'
import { handleClose } from './'

function Modal({
  content,
  open = false,
  disableCloseBtn = false,
  disableCloseBkg = false,
  disableCloseEscape = false,
}) {
  if (disableCloseEscape === false) {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        handleClose()
      }
    })
  }
  return (
    <div
      className={
        open ? 'simple-modal-container' : 'simple-modal-container hide-modal'
      }
    >
      {disableCloseBkg ? (
        ''
      ) : (
        <div
          onClick={handleClose}
          className="simple-modal-closing-background"
        ></div>
      )}

      <div className="simple-modal">
        <p>{content}</p>
        {disableCloseBtn ? (
          ''
        ) : (
          <div onClick={handleClose} className="simple-modal-close"></div>
        )}
      </div>
    </div>
  )
}

export default Modal
