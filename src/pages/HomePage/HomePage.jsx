import TinderCards from '../../components/TinderCards/TinderCards';
import './homepage.css';
import { useState, useEffect } from 'react';
import * as dogsApi from '../../utilities/dogs-api';

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