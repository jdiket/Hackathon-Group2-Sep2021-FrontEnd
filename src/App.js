import './App.css';
import { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import DogDetailPage from './pages/DogDetailPage/DogDetailPage';
import HomePage from './pages/HomePage/HomePage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';
import Footer from './components/Footer/Footer';

const App = () => {

  let likedDogsArray = []

  const handleAddDog = (dogData) => {
    likedDogsArray.push(dogData)
    console.log(likedDogsArray)
  }

  return (
    <>
    <NavBar />
    <div className="App">

      <Switch>

      <Route exact path="/">
          <HomePage handleAddDog={handleAddDog} />
        </Route>
        <Route path="/bookmark">
          <BookmarkPage  likedDogsArray={likedDogsArray} handleAddDog={handleAddDog}/>
        </Route>
        <Route path="/details">
          <DogDetailPage></DogDetailPage>
        </Route>

      </Switch>

      <Footer />
    </div>
    </>
  );
}

export default App;