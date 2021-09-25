import './App.css';
import { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage'
import NavBar from './components/NavBar/NavBar';
import DogDetailPage from './pages/DogDetailPage/DogDetailPage';
import SwipePage from './pages/SwipePage/SwipePage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';
import Footer from './components/Footer/Footer';
import { getUser } from './utilities/services/users-service'

const App = () => {

  const [user, setUser] = useState(getUser());

  let likedDogsArray = []

  const handleAddDog = (dogData) => {
    likedDogsArray.push(dogData)
    console.log(likedDogsArray)
  }

  return (
    <>
    { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <div className="App">
          <Switch>
          <Route exact path="/">
              <SwipePage handleAddDog={handleAddDog} />
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
      :
      <AuthPage setUser={setUser} />
    }
    </>
  );
}

export default App;