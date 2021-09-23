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

const DetailCard = ({dogData}) => {
  const [ showModal, setShowModal ] = useState(false)

  const openModal = () => {
    console.log("modal clicked")
    setShowModal(prev => !prev)
  }
  
  return ( 
    <div className="TinderCard">
      {/* dog details page modal */}
      <Modal dogData={dogData} showModal={showModal} setShowModal={setShowModal}/>
         <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={dogData.photo[0]}
              alt="dog"
            />
            <CardContent className="card__content">
              <div className="card__header">
                <Typography gutterBottom variant="h5" component="div">
                  {dogData.name}
                </Typography>

                <button 
                  className="button__more"
                  onClick={openModal}
                >More Info
                </button>

              </div>
              <Typography variant="body2" color="text.secondary">
                {dogData.breed.map((breed) => breed + ` `)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dogData.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dogData.description.substring(0,40)}...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </div>
   );
}
 
export default DetailCard;