import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { LikedDogsContext } from '../utilities/LikedDogsContext';
import { Modal } from '../components';

export const BookmarkPage = () => {
  const likedDogs = useContext(LikedDogsContext)
  const [ showModal, setShowModal ] = useState(false)
  const [ dog, setDog ] = useState(null)

  const openModal = (dog) => {
    setDog(dog)
    setShowModal(prev => !prev)
  }

  return (
    <BookmarkPageStyled>
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
    </BookmarkPageStyled>
   );
};

const BookmarkPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 7.6rem);
  padding-top: 1.5em;
  text-align: center;
  overflow: hidden;
  .bookmark__header {

  }
  .bookmark__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: flex-start;
      margin-top: 1.5em;
  }
  .bookmark__card {
      margin: 10px;
      background-color: #fff;
      width: 30vw;
      min-width: 280px;
      height: 40vh;
      box-shadow: 0px 0px 60px 0px rgba(0,0,0,0.30);
      border-radius: 20px;
      background-size: cover;
      background-position: center;
  }
  .bookmark__photo {
      width: 100%;
      height: 75%;
      background-size: cover;
      background-position: top;
      border-radius: 20px 20px 0 0;
      top: 0;
      left: 0;
  }
  .bookmark__text {
      text-align: left;
      margin: auto 10px;
      font-size: small;
      line-height: 1.25em;
  }
`;