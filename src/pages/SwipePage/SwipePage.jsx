import './swipepage.css';
import TinderCards from '../../components/TinderCards/TinderCards';
import { useState, useEffect } from 'react';
import * as dogsApi from '../../utilities/apis/dogs-api';

import Stack from '@mui/material/Stack';

const SwipePage = ({ handleAddDog, handleRejectDog }) => {

  const [fadeState, setFadeState] = useState('arrow-fade-in-start');
  const [dogsDeck, setDogsDeck] = useState([]);
  const [dogIndex, setDogIndex] = useState(0);

  //Just for now, since we have a small database, I am going to fetch all the doggies.
  useEffect(() => {
    const getAllDogs = async () => {
      const doggies = await dogsApi.getAllDogs();
      setDogsDeck(doggies.data);
    }
    getAllDogs();

    // const changeFadeStateOnLoad =() => {
    //   setTimeout(() => {
    //     setFadeState('arrow-fade-in-end');
    //   },250)
    // }
  
    // const hideArrow = () => {
    //   setTimeout(() => {
    //     setFadeState('arrow-hidden');
    //   },2000)
    // }
  
    // changeFadeStateOnLoad();
    // hideArrow();
  },[]);

  const addDogAndRemove = (dogData) => {
    handleAddDog(dogData);
    if(dogIndex < dogsDeck.length - 1) {
      setDogIndex(dogIndex + 1);
    } else {
      setDogIndex(0);
    }
  }

  const removeDog = () => {
    if(dogIndex < dogsDeck.length - 1) {
      setDogIndex(dogIndex + 1);
    } else {
      setDogIndex(0);
    }
  }
  
  return (
    <div className="SwipePage">

      <div className="card-swipe-container">
        <div className={`left-arrow-container ${fadeState}`}>
        {'<-'} Swipe Left
        </div>
            {dogsDeck.length !== 0 ?
            <TinderCards key={dogsDeck[dogIndex].id} removeDog={removeDog} dogData={dogsDeck[dogIndex]} handleRejectDog={handleRejectDog} addDogAndRemove={addDogAndRemove} />
            :
            ""
            }
        <div className={`right-arrow-container arrow ${fadeState}`}>
          Swipe Right {'->'}
        </div>
      </div>

      <Stack className="card__buttons" spacing={4} direction="row">

        <button  onClick={() => removeDog(dogsDeck[dogIndex])} className="pass_button card__button">
          <p className="pass-or-like">Pass</p>
        </button>
        <button className="like__button card__button">
          <p onClick={() => addDogAndRemove(dogsDeck[dogIndex])} className="pass-or-like">Like</p>
        </button>
        
      </Stack>
      
    </div>
  );
}

export default SwipePage;