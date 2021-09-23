import TinderCards from '../../components/TinderCards/TinderCards';
import './homepage.css';
import { useState, useEffect } from 'react';
import * as dogsApi from '../../utilities/dogs-api';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Material UI Icons
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Deck } from '@material-ui/icons';

const HomePage = ({ handleAddDog, handleRejectDog }) => {

  const [fadeState, setFadeState] = useState('arrow-fade-in-start');
  const [dogsDeck, setDogsDeck] = useState([]);
  const [dogIndex, setDogIndex] = useState(0);
  const [currentDog, setCurrentDog] = useState(<></>);
  const tinderCard = (<></>)

  //Just for now, since we have a small database, I am going to fetch all the doggies.
  useEffect(() => {
    const getAllDogs = async () => {
      const doggies = await dogsApi.getAllDogs();
      console.log('DATER', doggies.data);
      console.log('why')
      setDogsDeck(doggies.data);
      // setCurrentDog(<TinderCards key={doggies.data[0].id} dogData={doggies.data[0]} handleRejectDog={handleRejectDog} addDogAndRemove={addDogAndRemove} />)
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

  const addDogAndRemove = (dogData) => {
    console.log('swiped')
    console.log(dogsDeck)
    handleAddDog(dogData);
    if(dogIndex < dogsDeck.length - 1) {
      setDogIndex(dogIndex + 1)
    } else {
      setDogIndex(0);
    }
  }

  const removeDog = () => {
    if(dogIndex < dogsDeck.length - 1) {
      setDogIndex(dogIndex + 1)
    } else {
      setDogIndex(0);
    }
  }
  
  return (
    <div className="HomePage">

      <div className="card-swipe-container">
        <div className={`left-arrow-container ${fadeState}`}>
        {'<-'} Swipe Left
        </div>
            {dogsDeck.length !== 0 ?
            <TinderCards key={dogsDeck[dogIndex].id} removeDog={removeDog} dogData={dogsDeck[dogIndex]} handleRejectDog={handleRejectDog} addDogAndRemove={addDogAndRemove} />
            // currentDog
            :
            ""
            }
        <div className={`right-arrow-container arrow ${fadeState}`}>
          Swipe Right {'->'}
        </div>
      </div>

      <Stack className="card__buttons" spacing={4} direction="row">
        <Button onClick={() => removeDog(dogsDeck[dogIndex])} className="card__button" variant="outlined">
          <p className="pass-or-like">Pass</p>
        </Button>
        <Button className="card__button" variant="outlined">
          <p onClick={() => addDogAndRemove(dogsDeck[dogIndex])} className="pass-or-like">Like</p>
        </Button>
      </Stack>
      
    </div>
  );
}

export default HomePage;