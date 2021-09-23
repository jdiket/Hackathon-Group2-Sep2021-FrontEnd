import './tindercards.css'
import { useState } from 'react';
import TinderCard from 'react-tinder-card'
import dog from '../../images/example.jpeg'
import Modal from '../Modal/Modal'

// Material UI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}

const TinderCards = () => {
  const [ showModal, setShowModal ] = useState(false)

  const openModal = () => {
    console.log("modal clicked")
    setShowModal(prev => !prev)
  }
  
  return ( 
    <div className="TinderCard">
      {/* dog details page modal */}
      <Modal showModal={showModal} setShowModal={setShowModal}/>

      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
        preventSwipe={['right', 'left']}
        > 
         <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={dog}
              alt="dog"
            />
            <CardContent className="card__content">
              <div className="card__header">
                <Typography gutterBottom variant="h5" component="div">
                  Brandy
                </Typography>


                <button 
                  className="button"
                  onClick={openModal}
                >More Info
                </button>

                {/* <button className="button__more-info">more info</button> */}
                
                
              </div>
              <Typography variant="body2" color="text.secondary">
                Golden Retriever
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Brooklyn, NY
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Loves long walks on the beach and the fresh of a new tennis ball
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </TinderCard>
    
    </div>
   );
}
 
export default TinderCards;