import './dogdetailpage.css'
import dog from '../../images/example.jpeg'
import DateMenu from '../../components/DateTimeMenu/DateMenu';
import TimeMenu from '../../components/DateTimeMenu/TimeMenu';
import { useState } from 'react'

// Material UI imports
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';


const DogDetailPage = ({ dogData }) => {
  const [ reserved, setReserved ] = useState("RESERVE")
  const [ numAdoptions, setNumAdoptions ] = useState(Math.floor(Math.random() * 10))
  const [ adoptionFee, setAdoptionFee ] = useState(Math.floor(Math.random() * 50) + 50)

  const handleReserveClick = () => {
    setReserved("Awaiting Confirmation");
    setNumAdoptions(numAdoptions + 1);
  }

  const handleAdoptionClick = () => {
    
  }

  return (  
    <div className="dogdetailpage">

      <div className="detail__header">
        <h1 className="detail__title">{dogData.name}</h1>
        <p>{dogData.breed.map((breed) => breed + ` `)} | {dogData.location}</p>
      </div>

      <div className="detail__photos">
        <div className="photo__main" style={{backgroundImage: `url(${dogData.photo[0]})`}}/>
        <div className="photo photo__2" style={{backgroundImage: `url(${dogData.photo[1]})`}}/>
        <div className="photo photo__3" style={{backgroundImage: `url(${dogData.photo[2]})`}}/>
        <div className="photo photo__4" style={{backgroundImage: `url(${dogData.photo[3]})`}}/>
        <div className="photo photo__5" style={{backgroundImage: `url(${dogData.photo[4]})`}}/>
      </div>
      
      <div className="detail__description">
        <div className="detail__info">
          <h2 className="info__title">Basic Info</h2>
          <hr className="solid" />
          {dogData.vaccinated && <p className="tag"> Vaccinated </p>}
          {dogData.goodWithKids && <p className="tag"> Good With Kids </p>}
          {dogData.houseTrained && <p className="tag"> House Trained</p>}
          {dogData.goodWithdogs && <p className="tag"> Good With dogs</p>}
          <p className="tag"> {dogData.weight} lbs </p>
          <p className="tag"> {dogData.sex} </p>
          <p className="tag"> {dogData.color} </p>
          
        </div>

        <div className="detial__story">
          <h2>My Story</h2>
          <hr className="solid" />
          <p className="story__description">{dogData.description}</p>
        </div>
      </div>
      
      <div className="detail__playdate">
        <div className="playdate__location">
          <PersonIcon />
          {dogData.location}
        </div>

        <div className="playdate__schedule">
          <h2 className="schedule__header">Schedule Your Playdate!</h2>
          
          <Stack className="card__buttons" spacing={2} direction="row">
            <DateMenu />
            <TimeMenu />
          </Stack>

          <button 
            className="button__reserve"
            onClick={handleReserveClick}
            > {reserved}
          </button>
        </div>

        <div className="playdate__adopt">
          <h2 className="adopt__header">Adopt Me!</h2>
          <p>{numAdoptions} of people want to take me home!</p>
          <p>${adoptionFee} adoption fee</p>
          
          <button 
            className="button__reserve"
            onClick={handleAdoptionClick}
            > Adoption Form
          </button>
        </div>

      </div>
      
      
    </div>
  );
}

export default DogDetailPage;