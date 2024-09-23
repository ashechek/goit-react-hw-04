import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ modalIsOpen, closeModal, currentImage }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0px",
            border: "none",
            backgroundColor: "transparent",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <img src={currentImage} alt="Full-size" className={s.modalImage} />
      </Modal>
    </>
  );
};

export default ImageModal;
