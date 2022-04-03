import React,{ useState, useRef, useContext } from 'react'
import { LikedDogsContext } from '../utilities/LikedDogsContext'
import { Modal, DogCard } from '../components'
import TinderCard from 'react-tinder-card'
import styled from "styled-components"
import useAxios from '../utilities/useAxios';

let alreadyRemoved = []

export const HomePage = () => {
  const [ lastDirection, setLastDirection ] = useState(null)
  const [ showModal, setShowModal ] = useState(false)
  const [ dog, setDog ] = useState(null)
  const childRefs = useRef([])
  const likedDogs = useContext(LikedDogsContext)

  // track the direction of the swipe
  const swiped = (direction, dog) => {
    setLastDirection(direction)
    if (direction === 'right') likedDogs.push(dog)
  }

  // once card leaves frame, push dog to removed list
  const outOfFrame = (dogId) => {
    alreadyRemoved.push(dogId)
  }

  // swipe the current card when the pass or like buttons are clicked
  const swipe = (dir) => {
    const cardsLeft = dogDeck.filter(dog => !alreadyRemoved.includes(dog._id))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1]._id
      let index = dogDeck.map(dog => dog._id).indexOf(toBeRemoved)
      childRefs.current[index].swipe(dir)
    }
  }

  const openModal = (dog) => {
    setDog(dog)
    setShowModal(prev => !prev)
  }

  const { response: dogDeck, error, loading } = useAxios({
    method: 'GET',
    url: 'dogs/',
    headers: {
      accept: '*/*',
    },
  });

  return (
    <HomePageStyled>
      {loading ? (
        <div className="loading"> Loading... </div>
      ) : (
        <div className='landing-page'>
          {error && error.message}
          {dogDeck && <div className='Dog-Cards'>
            <Modal dog={dog} showModal={showModal} setShowModal={setShowModal}/>
          
            <div className="cards-container">
              {dogDeck.map((dog, i) => (
                <TinderCard
                  className="swipe"
                  key={dog.name}
                  ref={el => childRefs.current[i] = el}
                  onSwipe={(dir) => swiped(dir, dog)}
                  onCardLeftScreen={() => outOfFrame(dog._id)}
                  preventSwipe={['up', 'down']}
                >
                  <DogCard dog={dog} openModal={openModal} />
                  
                </TinderCard>
              ))}
            </div>

            <div className="card__buttons__container">
              <button  
                onClick={() => swipe('left')}
                className="pass__button card__button"
                > Pass
              </button>
              <button 
                onClick={() => swipe('right')}
                className="like__button card__button"
                > Like
              </button> 
            </div>

          </div> }
        </div>
      )}
    </HomePageStyled>
  );
};

const HomePageStyled = styled.div`
  min-height: calc(100vh - 7.6rem);
  & .landing-page {
    & .Dog-Cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      & .cards-container {
        display: flex;
        justify-content: center;
        width: 90vw;
        max-width: 260px;
        height: 525px;
        margin-top: 5vh;
        & .swipe {
          position: absolute;
        }
        & .swipe:last-of-type {

        }
      }
    }
    & .card__buttons__container {
      display: flex;
      position: relative;
      /* top: 520px; */
      & .card__button {
        padding: 10px;
        margin: auto 25px;
        height: 45px;
        width: 400px;
        min-width: 80px;
        width: 15vw;
        border: 1px solid;
        border-radius: 4px;
        outline: none;
        color: black;
        cursor: pointer;
        font-size: larger;
        font-weight: 800;
        transition: 200ms;
        box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.10);
        & :hover {
          transform: scale(1.05);
        }
      }
      & .like__button {
        background-color: rgba(69, 123, 234, 1);
      }
      & .pass__button {
        background-color: rgba(248, 242, 229, 1);
      }
      & .more__button {
        background-color: rgba(248, 242, 229, 1);
        height: 30px;
        width: 40%;
        border-radius: 4px;
        border: 1px solid;
        color: black;
        cursor: pointer;
      }
    }
  }
`;