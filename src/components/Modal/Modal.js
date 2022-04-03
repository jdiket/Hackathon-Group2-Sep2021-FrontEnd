import React from "react"
import styled from "styled-components"
import { DogDetailPage } from "../../pages";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const Modal = ({ showModal, setShowModal, dog }) => {
  return ( 
    <ModelStyled style={{display: showModal ? 'block' : 'none' }}>
      {dog && (
        <article className="modal__contents">
          <div className="contents__header">
            <div className="conents__title">
              <h1>{dog.name}</h1>
              <p>{dog.breed.map((breed) => breed + ` `)} | {dog.location}</p>
            </div>
      
            <IconButton 
              className="modal__button" 
              onClick={() => setShowModal(prev => !prev)}
              > <CloseIcon fontSize="large" />
            </IconButton>
          </div>

          <DogDetailPage dog={dog} />
        </article>
      )};
    </ModelStyled>
  )
};

const ModelStyled = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
  z-index: 2;
	overflow-y: scroll;
  .modal__contents {
    background: #FFFFFF;
    text-align: justify;
    width: 71.39%;
    border-radius: 20px;
    margin: 100px auto;
    box-shadow: 0 3px 3px black;
    padding: 2% 1%;

  }
  .contents__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal__button {
    align-self: flex-start;
    color: black;
    cursor: pointer;
    z-index: 5;
  }
`;