import './tindercards.css'
import { useLayoutEffect } from 'react'
import TinderCard from 'react-tinder-card'
import dog from '../../images/example.jpeg'

// Material UI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Material UI Icons
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import * as locationsApi from '../../utilities/location-api'

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}

let locale = '';

const TinderCards = ({dogData, AddDogToLikedDogs}) => {

  useLayoutEffect(() => {
    const getLocation = async () => {
      const location = await locationsApi.getLocationById(dogData.location)
      locale = location.name;
    }
    getLocation();
  })

  const onSwipe = (direction,dogData) => {
    console.log('You swiped: ' + direction)
    if(direction === 'right') {
      handleAddDoggo(dogData)
    }
  }

  const handleAddDoggo = (doggo) => {
    AddDogToLikedDogs(doggo);
  }

  return ( 
    <div className="TinderCard">
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
              image={dogData.photo}
              alt="dog"
            />
            <CardContent>
              <div className="card__header">
                <Typography gutterBottom variant="h5" component="div">
                {dogData.name}
                </Typography>
                <Button variant="outlined">more info</Button>
              </div>
              <Typography variant="body2" color="text.secondary">
                {dogData.breed.map((breed) => breed)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {locale}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Loves long walks on the beach and the fresh of a new tennis ball
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </TinderCard>

 
      <Stack className="card__buttons" spacing={4} direction="row">
        <Button className="card__button" variant="outlined"><CloseIcon/></Button>
        <Button onClick={AddDogToLikedDogs} className="card__button" variant="outlined"><CheckIcon/></Button>
      </Stack>
    
    </div>
   );
}
 
export default TinderCards;