import React from 'react'

import "../css/modal.css";

const Modal = ({ showModal, setShowModal, roomName, setRoomName, connecting, handleClick, errorName }) => {

    return (
        <div className="modal-container" style={ showModal ? {display: 'flex'} : {display: 'none'}}>
            <div className="modal-body">
                <label onClick={() => setShowModal(false)}>❌</label>
                <p>Ingresa un nombre de sala: </p>
                <input type="text" value={roomName} readOnly={connecting} onChange={(e) => setRoomName(e.target.value)} />
                {errorName && <p style={{ color: 'red', fontSize: '1rem' }}>Ingresa un nombre de sala</p>}
                <button onClick={handleClick} disabled={connecting}>{connecting ? 'Conectando...' : 'Conectar'}</button>
            </div>
        </div>
    )
}

export default Modal
