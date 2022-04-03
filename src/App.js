import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LikedDogsContext } from './utilities/LikedDogsContext';
import { getUser } from './utilities/services/users-service'
import { MainLayout } from './layouts';
import { 
  AuthPage,
  AboutPage,
  HomePage, 
  BookmarkPage, 
  DogDetailPage,
  NotFoundPage
} from './pages'

const App = () => {
  const [user, setUser] = useState(true);
  let likedDogs = []

  return (
    <MainLayout>
      { user ? 
        <Switch>
          {/* Landing Page */}
          <LikedDogsContext.Provider value={likedDogs}>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/bookmarks" component={BookmarkPage} />
            <Route path="/detail/:id" component={DogDetailPage} />
          </LikedDogsContext.Provider>             

          {/* chat component */}
          
          {/* not found page */}
          <Route path="*" component={NotFoundPage} />
          
        </Switch>
      : <AuthPage /> }
    </MainLayout>
  );
}

export default App;