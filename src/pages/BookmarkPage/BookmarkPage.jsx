import './bookmarkpage.css';
import React, { useState } from 'react'
import DetailCard from '../../components/DetailCard/DetailCard'

const BookmarkPage = ({ likedDogsArray }) => {

  const [bookmarkedDogsArray, setBookmarkedDogsArray] = useState(likedDogsArray)

  console.log(likedDogsArray);

  return ( 
    <div className="BookmarkPage">
      <h1 className="header">Dogs You Like!</h1>
      <div className="card-container">
        {likedDogsArray !== 0 ?
          likedDogsArray.map((dogData) => {
            return <DetailCard dogData={dogData} />
          }):
          'Go Get Dogs!'
        }
      </div>
    </div>
   );
}
 
export default BookmarkPage;