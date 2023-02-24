import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

// When click any where then hide cart Box 
const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick} />
  )
}
// Show a cart box 
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}
// Handle cart Portal 
const portalElement = document.getElementById('cart-overlays');
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />, portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>, portalElement
      )}
    </>
  )
}

export default Modal