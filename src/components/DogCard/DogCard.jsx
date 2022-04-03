import React from 'react'
import styled from 'styled-components';

export const DogCard = ({ dog, openModal }) => {
  return (
    <DogCardStyled>
      <div className="dog__photo"
        style={{
          backgroundImage: `url(${dog.photo[0]})`
        }}
        >
      </div>
      <div className="dog__content">
        <div className="content__header">
          <h2>{dog.name}</h2>
          <button 
            className={"more__button"}
            onClick={() => openModal(dog)}
          > View More
          </button>
        </div>
        <div className="content__text">
          <p>{dog.breed}</p>
          <p>{dog.location}</p>
          <p>{dog.tagline}</p>
        </div>
      </div>
    </DogCardStyled>
  )
};

const DogCardStyled = styled.div`
  position: relative;
  background-color: #fff;
  width: 400px;
  min-width: 260px;
  max-width: 85vw;
  height: 500px;
  border-radius: 20px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  .dog__photo {
    width: 100%;
    height: 80%;
    background-size: cover;
    background-position: top;
    border-radius: 20px 20px 0 0;
    top: 0;
    left: 0;
  }
  .dog__content {
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .content__header {
    display: flex;
    justify-content: space-between;
    margin: 10px 5px 0 5px;
  }
  .content__text {
    margin: auto 5px;
    font-size: smaller;
    line-height: 1.25em;
  }
`;