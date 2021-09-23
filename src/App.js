import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import DogDetailPage from './pages/DogDetailPage/DogDetailPage';
import HomePage from './pages/HomePage/HomePage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';
import Footer from './components/Footer/Footer';

const App = () => {

  const [likedDogsArray, setLikedDogsArray] = useState([{_id:1},{_id:2},{_id:3}]);

  const handleAddDog = (dogData) => {
    console.log('added doggo', dogData)
    setLikedDogsArray([...likedDogsArray, dogData])
  }

  const rejectDog = (dogData) => {
    let filterDogArray = [...likedDogsArray];
    filterDogArray = filterDogArray.filter((dog) => {
      if(dog._id !== dogData._id) {
        return dog;
      }
    })
    console.log(filterDogArray)
    setLikedDogsArray(filterDogArray)
  }

  return (
    <>
    <NavBar />
    <div className="App">

      <Switch>
        <Route exact path="/">
          <HomePage AddDogToLikedDogs={handleAddDog} />
        </Route>
        <Route path="/bookmark">
          <BookmarkPage  likedDogsArray={likedDogsArray} AddDogToLikedDogs={handleAddDog}/>
        </Route>
        <Route path="/detail">
          <DogDetailPage></DogDetailPage>
        </Route>
        <Redirect to="/" />
      </Switch>

      <Footer />
    </div>
    </>
  );
}

export default App;