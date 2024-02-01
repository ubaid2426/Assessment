import classes from './Modal.module.css'
import React from 'react'

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop}/>
      <dialog open className={classes.modal} onClick={onclose}>
        {props.children}
      </dialog>
    </>
  )
}

export default Modal
