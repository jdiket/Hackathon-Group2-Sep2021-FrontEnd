import TinderCards from '../../components/TinderCards/TinderCards';
import './homepage.css';
import { useState, useEffect } from 'react';
import * as dogsApi from '../../utilities/dogs-api';

const HomePage = ({ AddDogToLikedDogs }) => {

  const [fadeState, setFadeState] = useState('arrow-fade-in-start') 
  const [arrayOfDogs, setArrayOfDogs] = useState([]);
  const [currentCard, setCurrentCard] = useState(1);

  //Just for now, since we have a small database, I am going to fetch all the doggies.
  useEffect(() => {

    const changeFadeStateOnLoad =() => {
      //ARROW EFFECT
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

    //API CALL FOR ALL DOGS
    const getAllDogs = async () => {
      const doggies = await dogsApi.getAllDogs();
      console.log(doggies.data)
      setArrayOfDogs(doggies.data);
    }
    getAllDogs();
  },[])

  const nextCard = () => {

  }

  useEffect(() => {
    
  },[])

  return (
    <div className="HomePage">
      <h1> Home Page </h1>
      <div className="card-swipe-container">
        <div className={`left-arrow-container ${fadeState}`}>
        {'<-'} Swipe Left
        </div>
        {
          arrayOfDogs.map((dog, idx) => {
            if (currentCard === idx) {
              return (<TinderCards dogData={dog} AddDogToLikedDogs={AddDogToLikedDogs} />)
            }
          })
        }
        {/* <TinderCards AddDogToLikedDogs={AddDogToLikedDogs} />a */}
        <div className={`right-arrow-container arrow ${fadeState}`}>
          Swipe Right {'->'}
        </div>
      </div>
    </div>
  );
}

export default HomePage;