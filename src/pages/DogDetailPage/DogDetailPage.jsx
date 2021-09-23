import './dogdetailpage.css'
import dog from '../../images/example.jpeg'
import DateMenu from '../../components/DateTimeMenu/DateMenu';
import TimeMenu from '../../components/DateTimeMenu/TimeMenu';
import { useState } from 'react'

// Material UI imports
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';


const DogDetailPage = () => {
  const [ reserved, setReserved ] = useState("RESERVE")
  const [ numAdoptions, setNumAdoptions ] = useState(Math.floor(Math.random() * 10))
  const [ adoptionFee, setAdoptionFee ] = useState(Math.floor(Math.random() * 50) + 50)
  const [ story, setStory ] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in. Diam quis enim lobortis scelerisque fermentum.")

  const handleClick = () => {
    setReserved("Awaiting Confirmation");
    setNumAdoptions(numAdoptions + 1);
  }

  return (  
    <div className="dogdetailpage">

      <div className="detail__header">
        <h1 className="detail__title">Dog Name</h1>
        <p>breed | location</p>
      </div>

      <div className="detail__photos">
        <div className="photo__main" style={{backgroundImage: `url(${dog})`}}/>
        <div className="photo photo__2" style={{backgroundImage: `url(${dog})`}}/>
        <div className="photo photo__3" style={{backgroundImage: `url(${dog})`}}/>
        <div className="photo photo__4" style={{backgroundImage: `url(${dog})`}}/>
        <div className="photo photo__5" style={{backgroundImage: `url(${dog})`}}/>
      </div>
      
      <div className="detail__description">
        <div className="detail__info">
          <h2>Basic Info</h2>
          <hr className="solid" />
        </div>

        <div className="detial__story">
          <h2>My Story</h2>
          <hr className="solid" />
          <p>{story}</p>
        </div>
      </div>
      
      <div className="detail__playdate">
        <div className="playdate__location">
          <PersonIcon />
          Shelter Location
        </div>

        <div className="playdate__schedule">
          <h2 className="schedule__header">Schedule Your Playdate!</h2>
          
          <Stack className="card__buttons" spacing={2} direction="row">
            <DateMenu />
            <TimeMenu />
          </Stack>

          <button 
            className="button__reserve"
            onClick={handleClick}
            > {reserved}
          </button>
        </div>

        <div className="playdate__adopt">
          <h2 className="adopt__header">Adopt Me!</h2>
          <p>{numAdoptions} of people want to take me home!</p>
          <p>${adoptionFee} adoption fee</p>
        </div>

      </div>
      
      
    </div>
  );
}

export default DogDetailPage;