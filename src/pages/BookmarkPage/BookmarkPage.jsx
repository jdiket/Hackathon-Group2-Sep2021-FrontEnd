import BookmarkCard from '../../components/BookmarkCard/BookmarkCard'
import './bookmarkpage.css';
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const BookmarkPage = ({likedDogsArray, AddDogToLikedDogs}) => {

  return ( 
    <div className="BookmarkPage">
      <h1 className="header">Dogs You Like!</h1>
      <div className="card-container">
        {
          
          likedDogsArray.length !== 0 ?
          likedDogsArray.map((dogData) => {
            return <BookmarkCard dogData={dogData} AddDogToLikedDogs={AddDogToLikedDogs}/>
          })
          :
          <>
            <h1>Hrmm, it's suprisingly empty in here...</h1>
            <Link to="/">
              <h1>Go search for some Dogs!</h1>
            </Link>
          </>
        }
      </div>
    </div>
   );
}

export default BookmarkPage;