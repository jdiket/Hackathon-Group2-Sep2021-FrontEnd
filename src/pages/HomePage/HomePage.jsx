import TinderCards from '../../components/TinderCards/TinderCards';
import './homepage.css';
import { useState, useEffect } from 'react';
import * as dogsApi from '../../utilities/dogs-api';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const HomePage = ({handleAddDog}) => {

  const [fadeState, setFadeState] = useState('arrow-fade-in-start');
  const [dogsDeck, setDogsDeck] = useState([]);

  //Just for now, since we have a small database, I am going to fetch all the doggies.
  useEffect(() => {
    const getAllDogs = async () => {
      const doggies = await dogsApi.getAllDogs();
      console.log(doggies.data);
      setDogsDeck(doggies.data);
    }
    getAllDogs();

    const changeFadeStateOnLoad =() => {
      setTimeout(() => {
        setFadeState('arrow-fade-in-end');
      },250)
    }
  
    const hideArrow = () => {
      setTimeout(() => {
        setFadeState('arrow-hidden');
      },2000)
    }
  
    changeFadeStateOnLoad();
    hideArrow();
  },[]);

  const handleRejectDog = (dogData) => {
    const filterDogDeck = [...dogsDeck];
    filterDogDeck.filter((dog) => {
      if (dog.id !== dogData.id) {
        return dog;
      }
    })
    setDogsDeck(filterDogDeck)
  }

  // const changeDog = (id) => {
  //   dogsData.filter(() => {
  //     return <TinderCards dogData={dogData}  />
  //   })
  // }

  return (
    <div className="HomePage">

      <div className="card-swipe-container">
        <div className={`left-arrow-container ${fadeState}`}>
        {'<-'} Swipe Left
        </div>
        {
          dogsDeck.map((dogData) => {
            return <TinderCards key={dogData.id} dogData={dogData} handleRejectDog={handleRejectDog} handleAddDog={handleAddDog} />
          })
        }
        {/* <TinderCards /> */}
        <div className={`right-arrow-container arrow ${fadeState}`}>
          Swipe Right {'->'}
        </div>
      </div>

      <Stack className="card__buttons" spacing={4} direction="row">
        <button className="pass_button card__button">
          <p className="pass-or-like">Pass</p>
        </button>
        <button className="like__button card__button">
          <p className="pass-or-like">Like</p>
        </button>
      </Stack>
      
    </div>
  );
}

export default HomePage;