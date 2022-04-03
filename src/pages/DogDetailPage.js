import React, { useState } from 'react'
import styled from "styled-components"
import DateMenu from '../components/DateTimeMenu/DateMenu';
import TimeMenu from '../components/DateTimeMenu/TimeMenu';


// Material UI imports
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';

export const DogDetailPage = ({ dog }) => {
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
    <DogDetailPageStyled>
      <div className="detail__photos">
        <div className="photo__main" style={{backgroundImage: `url(${dog.photo[0]})`}}/>
        <div className="photo photo__2" style={{backgroundImage: `url(${dog.photo[1]})`}}/>
        <div className="photo photo__3" style={{backgroundImage: `url(${dog.photo[2]})`}}/>
        <div className="photo photo__4" style={{backgroundImage: `url(${dog.photo[3]})`}}/>
        <div className="photo photo__5" style={{backgroundImage: `url(${dog.photo[4]})`}}/>
      </div>
      
      <div className="detail__description">
        <div className="basic__info">
          <h2 className="info__title">Basic Info</h2>
          <hr className="solid" />
          <div className="info__tags">
            {dog.vaccinated && <p className="tag"> Vaccinated </p>}
            {dog.goodWithKids && <p className="tag"> Good With Kids </p>}
            {dog.houseTrained && <p className="tag"> House Trained</p>}
            {dog.goodWithdogs && <p className="tag"> Good With dogs</p>}
            {dog.weight && <p className="tag"> {dog.weight} lbs </p>}
            {dog.sex && <p className="tag"> {dog.sex} </p>}
            {dog.color && <p className="tag"> {dog.color} </p>}
          </div>
        </div>

        <div className="detial__story">
          <h2 className="story__title">My Story</h2>
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
    </DogDetailPageStyled>
  );
};

const DogDetailPageStyled = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: [first] 50% [line2] auto [line3] 25% [end];
  grid-template-rows: [start] 304px [row2] auto [last];
  .detail__photos {
    grid-column: 1 / span 4;
    grid-row: start;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 50%);
  }
  .photo {
    margin: 5px;
    border: 1px solid;
    border-radius: 4px;
  }
  .photo__main {
    background-size: cover;
    background-position: center;
    margin: 5px;
    border-radius: 4px;
    border: 1px solid;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
  .photo__2 {
    grid-column: 3 / span 1;
    grid-row: 2;
    background-size: cover;
    background-position: center;
  }
  .photo__3 {
    grid-column: 4 / span 1;
    grid-row: 2;
    background-size: cover;
    background-position: center;
  }
  .photo__4 {
    grid-column: 3 / span 1;
    grid-row: 1;
    background-size: cover;
    background-position: center;
  }
  .photo__5 {
    grid-column: 4 / span 1;
    grid-row: 1;
    background-size: cover;
    background-position: center;
  }
  .detail__description {
    padding-right: 30px;
    grid-column: first / span 1;
    grid-row: row2;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }

  .basic__info {
    width: 100%;
    margin-bottom: 43px;
  }
  .info__title {
    margin-bottom: 16px;
  }
  /* Solid border */
  hr.solid {
    border-top: 1px solid;
    width: 100%;
    margin-bottom: 8px;
  }
  .info__tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .tag {
    border: 1px solid;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 6px 16px;
    margin: 8px 16px 8px 0;
  }


  .detail__story {
    min-height: 500px;
  }
  .story__title {
    margin-bottom: 16px;
  }
  .story__description {
    margin-top: 10px;
  }

  .detail__playdate {
    grid-column: line2 / span 3;
    grid-row: row2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
  .playdate__location {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .playdate__schedule {
    width: 90%;
    padding: 10px 20px;
    border: 1px solid;
    text-align: left;
    background: #F8F2E5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  .button__reserve {
    height: 35px;
    width: 100%;
  }
  .playdate__adopt {
    width: 90%;
    margin-top: 10px;
    padding: 10px 20px;
    border: 1px solid;
    text-align: left;
    line-height: 3em;
    background: #F8F2E5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;