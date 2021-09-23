import './tindercards.css'
import { Link } from 'react-router-dom';
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


const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}

const TinderCards = () => {
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
              image={dog}
              alt="dog"
            />
            <CardContent className="card__content">
              <div className="card__header">
                <Typography gutterBottom variant="h5" component="div">
                  Brandy
                </Typography>

                <Link to="/details">
                  <Button variant="outlined">more info</Button>
                </Link>
                
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

 
      <Stack className="card__buttons" spacing={4} direction="row">
        <Button className="card__button" variant="outlined">
          <p className="pass-or-like">Pass</p>
        </Button>
        <Button className="card__button" variant="outlined">
          <p className="pass-or-like">Like</p>
        </Button>
      </Stack>
    
    </div>
   );
}
 
export default TinderCards;