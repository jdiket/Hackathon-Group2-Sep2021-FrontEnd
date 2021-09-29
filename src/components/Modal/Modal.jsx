import DogDetailPage from "../../pages/DogDetailPage/DogDetailPage";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import './modal.css'


const Modal = ({ showModal, setShowModal, dog }) => {
  return ( 
    <div style={{display: showModal ? 'block' : 'none' }} className="Modal">
      {dog && (
        <article className="modal__contents">
          <div className="contents__header">
            <div className="conents__title">
              <h1>{dog.name}</h1>
              <p>{dog.breed.map((breed) => breed + ` `)} | {dog.location}</p>
            </div>
      
            <IconButton 
              className="modal__button" 
              onClick={() => setShowModal(prev => !prev)}
              > <CloseIcon fontSize="large" />
            </IconButton>
          </div>

          <DogDetailPage dog={dog} />
        </article>
      )};
    </div>
  )
}
 
export default Modal;