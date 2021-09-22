import './tindercards.css'
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
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem ipsum dolor
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam velit dolorem laboriosam magni aspernatur corporis suscipit, enim nam, temporibus explicabo id sit neque necessitatibus iure facilis? Quia, molestiae sunt!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </TinderCard>

 
      <Stack className="card__buttons" spacing={4} direction="row">
        <Button variant="outlined">no</Button>
        <Button variant="outlined">more info</Button>
        <Button variant="outlined">yes</Button>
      </Stack>
    
    </div>
   );
}
 
export default TinderCards;