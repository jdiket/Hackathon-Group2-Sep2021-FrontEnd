import React,{ useState, useRef, useContext } from 'react'
import { LikedDogsContext } from '../../utilities/LikedDogsContext'
import Modal from '../../components/Modal/Modal'
import TinderCard from 'react-tinder-card'
import './DogCards.css'

let alreadyRemoved = []
// let likedDogs = []
const DogCards = ({ dogDeck }) => {
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

  return (
    <div className="DogCards">

      <Modal dog={dog} showModal={showModal} setShowModal={setShowModal}/>

      <div className="cards__container">
        {dogDeck.map((dog, i) => (
          <TinderCard
            className="swipe"
            key={dog.name}
            ref={el => childRefs.current[i] = el}
            onSwipe={(dir) => swiped(dir, dog)}
            onCardLeftScreen={() => outOfFrame(dog._id)}
            preventSwipe={['up', 'down']}
          >
            <div className="dog__card">
              <div className="dog__photo"
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
                <div className="content__text">
                  <p>{dog.breed}</p>
                  <p>{dog.location}</p>
                  <p>{dog.tagline}</p>
                </div>
              </div>
            </div>
            
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

    </div>
  )
}

export default DogCards;