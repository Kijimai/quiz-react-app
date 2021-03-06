import React from "react"
import { useGlobalContext } from "../utils/context"

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext()

  return (
    <div className={`modal-container ${isModalOpen && "isOpen"}`}>
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          the questions correctly!
        </p>
        <button className="close-btn" onClick={closeModal}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default Modal
