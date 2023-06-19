import React from 'react'
import './Modal.css'
import { handleClose } from './'

function Modal({
  content,
  open = false,
  disableCloseBtn = false,
  disableCloseBkg = false,
}) {
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

// class Modal extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       hideModal: true,
//       content: this.props.content,
//     }
//   }

//   closeModal() {
//     console.log('coucou2')
//     this.setState({ hideModal: true })
//   }

//   openModal() {
//     console.log('coucou')
//     this.setState({ hideModal: false })
//   }

//   render() {
//     const { hideModal } = this.state
//     console.log(this.state)
//     return (
//       <div
//         className={'simple-modal-container ' + (hideModal ? 'hide-modal' : '')}
//       >
//         <div className="simple-modal">
//           <p>{'oui'}</p>
//           <div
//             onClick={() => this.closeModal()}
//             className="simple-modal-close"
//           ></div>
//         </div>
//       </div>
//     )
//   }
// }

export default Modal
