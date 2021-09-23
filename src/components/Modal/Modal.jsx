import DogDetailPage from "../../pages/DogDetailPage/DogDetailPage";
import './modal.css'

const Modal = ({ showModal, setShowModal, dogData }) => {
  return ( 
    <div style={{display: showModal ? 'block' : 'none' }} className="Modal">
      <div className="modal__contents">
        <button className="modal__button" onClick={() => setShowModal(prev => !prev)}>CLOSE</button>
        <DogDetailPage dogData={dogData} />
      </div>
    </div>
   );
}
 
export default Modal;