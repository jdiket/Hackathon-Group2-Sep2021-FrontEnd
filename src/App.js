import './App.css';
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage'
import { LikedDogsContext } from './utilities/LikedDogsContext';
import NavBar from './components/NavBar/NavBar';
import DogDetailPage from './pages/DogDetailPage/DogDetailPage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage'
import { getUser } from './utilities/services/users-service'

const App = () => {
  const [user, setUser] = useState(getUser());
  let likedDogs = []

  return (
    <div>
      {/* { user ? ( */}
        <div className="App">
          <NavBar user={user} setUser={setUser} />
          <div className="Main">
            <Switch>
              
              {/* Landing Page */}

              <LikedDogsContext.Provider value={likedDogs}>
                <Route exact path="/" component={HomePage} />
                <Route path="/bookmark" component={BookmarkPage} />
              </LikedDogsContext.Provider>

              <Route path="/detail/:id" component={DogDetailPage} />

              {/* chat component */}
              
              {/* not found page */}
              
            </Switch>
          </div>

          <Footer />
        </div>
      {/* ) : (
        <AuthPage setUser={setUser} />
      )} */}
    </div> 
  );
}

export default App;