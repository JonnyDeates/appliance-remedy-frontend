import React from "react";
import CloseButton from "./CloseButton/CloseButton";
import './Modal.css'
import Policy from "../../../../PrivacyPolicy/assets/policy";


const Modal = ({isShown, closeModal} ) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const PolicyKeys = Object.keys(Policy);

    return isShown ? <>
            <div className={'modal-wrapper'} onClick={closeModal}/>
            <div className={'modal'} onSubmit={handleSubmit}>
                <CloseButton handleClose={closeModal}/>
                <h1>Privacy Policy</h1>
                <div className={'modal-content'}>
                {PolicyKeys.map((key, index)=> <label key={index}>{key} <span>{Policy[key]}</span></label>)}
                </div>
                <div className='modal-buttons'>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
        </> : <></>
}
export default Modal;