import './bookmarkpage.css';
import { useContext, useState } from 'react'
import { LikedDogsContext } from '../../utilities/LikedDogsContext';
import Modal from '../../components/Modal/Modal'

const BookmarkPage = () => {
  const likedDogs = useContext(LikedDogsContext)
  const [ showModal, setShowModal ] = useState(false)
  const [ dog, setDog ] = useState(null)

  const openModal = (dog) => {
    setDog(dog)
    setShowModal(prev => !prev)
  }

  return (
    <div>
      <Modal dog={dog} showModal={showModal} setShowModal={setShowModal}/>

      {likedDogs.length < 1 ? (
        <div> No dogs have been liked </div>
      ) : (
        <div className="BookmarkPage">
          <h1 className="bookmark__header">Dogs You Like!</h1>
          <div className='bookmark__container'>
            {likedDogs.map(dog =>
              <div className="bookmark__card" key={dog._id}>
                <div className="bookmark__photo"
                  style={{
                    backgroundImage: `url(${dog.photo[0]})`
                  }}
                  >
                </div>
                <div className="dog__content">
                  <div className="content__header">
                    <h2>{dog.name}</h2>
                    <button 
                      className={"more__button"}
                      onClick={() => openModal(dog)}
                    > modal
                    </button>
                  </div>
                  <div className="bookmark__text">
                    <p>{dog.breed}</p>
                    <p>{dog.location}</p>
                  </div>
                </div>
              </div>   
            )}
          </div>
        </div>
      )}
    </div>
   );
}
 
export default BookmarkPage;