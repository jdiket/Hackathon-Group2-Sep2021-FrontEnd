import './homepage.css';
import React, { useState } from 'react';
import DogCards from '../../components/DogCards/DogCards';
import useAxios from '../../utilities/useAxios';

const HomePage = () => {
  const [ fadeState, setFadeState ] = useState('arrow-fade-in-start');

  const { response: dogDeck, error, loading } = useAxios({
    method: 'GET',
    url: 'dogs/',
    headers: {
      accept: '*/*',
    },
  });

  // useEffect(() => {
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
  // },[]);

  return (
    <div className="HomePage">
      {loading ? (
        <div className="loading"> Loading... </div>
      ) : (
        <div>
          {error && error.message}
          {dogDeck && <DogCards dogDeck={dogDeck}/>}
        </div>
      )}
    </div>
  );
}

export default HomePage;