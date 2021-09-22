import TinderCards from '../../components/TinderCards/TinderCards';
import './homepage.css';
import { useState, useEffect } from 'react';


const HomePage = () => {

  const [fadeState, setFadeState] = useState('arrow-fade-in-start') 

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  useEffect(() => {

    const changeFadeStateOnLoad =() => {
      setTimeout(() => {
        setFadeState('arrow-fade-in-end')
      },250)
    }

    const hideArrow = () => {
      setTimeout(() => {
        setFadeState('arrow-hidden')
      },2000)
    }

    changeFadeStateOnLoad()
    hideArrow();
  },[])

  return (
    <div className="HomePage">
      <h1> Home Page </h1>
      <div className="card-swipe-container">
        <div className={`left-arrow-container ${fadeState}`}>
        {'<-'} Swipe Left
        </div>
        <TinderCards />
        <div className={`right-arrow-container arrow ${fadeState}`}>
          Swipe Right {'->'}
        </div>
      </div>
    </div>
  );
}

export default HomePage;