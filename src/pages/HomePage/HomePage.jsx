import TinderCards from '../../components/TinderCards/TinderCards';
import './homepage.css';
import { useState, useEffect } from 'react';
import * as dogsApi from '../../utilities/dogs-api';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Material UI Icons
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const HomePage = () => {

  const [fadeState, setFadeState] = useState('arrow-fade-in-start') 

  //Just for now, since we have a small database, I am going to fetch all the doggies.
  useEffect(() => {
    const getAllDogs = async () => {
      const doggies = await dogsApi.getAllDogs();
      console.log(doggies.data)
      return doggies.data;
    }
    getAllDogs();
  },[])

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

      <div className="card-swipe-container">
        <div className={`left-arrow-container ${fadeState}`}>
        {'<-'} Swipe Left
        </div>
        <TinderCards />
        <div className={`right-arrow-container arrow ${fadeState}`}>
          Swipe Right {'->'}
        </div>
      </div>

      <Stack className="card__buttons" spacing={4} direction="row">
        <Button className="card__button" variant="outlined">
          <p className="pass-or-like">Pass</p>
        </Button>
        <Button className="card__button" variant="outlined">
          <p className="pass-or-like">Like</p>
        </Button>
      </Stack>
      
    </div>
  );
}

export default HomePage;