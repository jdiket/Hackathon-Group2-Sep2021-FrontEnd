import './dogdetailpage.css'
import DateMenu from '../../components/DateTimeMenu/DateMenu';
import TimeMenu from '../../components/DateTimeMenu/TimeMenu';
import { useState } from 'react'

// Material UI imports
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';

const DogDetailPage = ({ dog }) => {
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

      {dog && (
        <article className="dog__detail__container">
          <div className="detail__header">
            <h1 className="detail__title">{dog.name}</h1>
            <p>{dog.breed.map((breed) => breed + ` `)} | {dog.location}</p>
          </div>

          <div className="detail__photos">
            <div className="photo__main" style={{backgroundImage: `url(${dog.photo[0]})`}}/>
            <div className="photo photo__2" style={{backgroundImage: `url(${dog.photo[1]})`}}/>
            <div className="photo photo__3" style={{backgroundImage: `url(${dog.photo[2]})`}}/>
            <div className="photo photo__4" style={{backgroundImage: `url(${dog.photo[3]})`}}/>
            <div className="photo photo__5" style={{backgroundImage: `url(${dog.photo[4]})`}}/>
          </div>
          
          <div className="detail__description">
            <div className="detail__info">
              <h2 className="info__title">Basic Info</h2>
              <hr className="solid" />
              {dog.vaccinated && <p className="tag"> Vaccinated </p>}
              {dog.goodWithKids && <p className="tag"> Good With Kids </p>}
              {dog.houseTrained && <p className="tag"> House Trained</p>}
              {dog.goodWithdogs && <p className="tag"> Good With dogs</p>}
              <p className="tag"> {dog.weight} lbs </p>
              <p className="tag"> {dog.sex} </p>
              <p className="tag"> {dog.color} </p>
              
            </div>

            <div className="detial__story">
              <h2>My Story</h2>
              <hr className="solid" />
              <p className="story__description">{dog.description}</p>
            </div>
          </div>
          
          <div className="detail__playdate">
            <div className="playdate__location">
              <PersonIcon />
              {dog.location}
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

        </article>
      )}

      
      
      
    </div>
  );
}

export default DogDetailPage;