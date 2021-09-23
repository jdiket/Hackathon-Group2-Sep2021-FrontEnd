import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import dog from '../../images/example.jpeg'

const BookmarkCard = ({dogData}) => {

    return (
        <div>
        <Card className="card" sx={{ maxWidth: 345 }} onClick={() => console.log('showModal')}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={dog}
              alt="dog"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Brandy
                </Typography>
                <Button variant="outlined">more info</Button>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
    )
}

export default BookmarkCard;