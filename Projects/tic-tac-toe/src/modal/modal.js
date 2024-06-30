import React from 'react'

function Modal({message, onClose}) {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <h2>{message}</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal
