import './homepage.css';
import TinderCard from 'react-tinder-card'
import dog from '../../images/example.jpeg'
import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const HomePage = () => {

  const [isShowingArrow, setIsShowingArrow] = useState(true)

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  useEffect(() => {
    const eraseArrowIndicator = () => {
      setTimeout(() => {
        setIsShowingArrow(false)
      },2000)
    }
    eraseArrowIndicator();
  },[])

  return (
    <div className="HomePage">
      <h1> Home Page </h1>
      <div className="card-swipe-container">
        <div className={`left-arrow-container arrow ${isShowingArrow ? 'arrow-show' : 'arrow-hidden'} `}>
        {'<-'} Swipe Left
        </div>
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
        <div className={`right-arrow-container arrow ${isShowingArrow ? 'arrow-show' : 'arrow-hidden'} `}>
          Swipe Right {'->'}
        </div>
            </div>
      </div>
  );
}

export default HomePage;