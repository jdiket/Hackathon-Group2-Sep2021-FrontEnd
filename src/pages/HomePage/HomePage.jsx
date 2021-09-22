import TinderCards from '../../components/TinderCards/TinderCards';
import './homepage.css';
import { useState, useEffect } from 'react';


const HomePage = () => {

  const [isShowingArrow, setIsShowingArrow] = useState(true)

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  useEffect(() => {
    const eraseArrowIndicator = () => {
      setTimeout(() => {
        setIsShowingArrow(false)
      },2000)
    }
    eraseArrowIndicator();
  },[])

  return (
    <div className="HomePage">
      <h1> Home Page </h1>
      <div className="card-swipe-container">
        <div className={`left-arrow-container arrow ${isShowingArrow ? 'arrow-show' : 'arrow-hidden'} `}>
        {'<-'} Swipe Left
        </div>
        <TinderCards />
        <div className={`right-arrow-container arrow ${isShowingArrow ? 'arrow-show' : 'arrow-hidden'} `}>
          Swipe Right {'->'}
        </div>
      </div>
    </div>
  );
}

export default HomePage;