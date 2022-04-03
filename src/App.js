import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import AuthPage from './pages/AuthPage/AuthPage'
import { LikedDogsContext } from './utilities/LikedDogsContext';
import { getUser } from './utilities/services/users-service'
import { MainLayout } from './layouts';
import { 
  HomePage, 
  BookmarkPage, 
  DogDetailPage,
  NotFoundPage
} from './pages'

const App = () => {
  const [user, setUser] = useState(getUser());
  let likedDogs = []

  return (
    <MainLayout>
      {/* user */}
      <Switch>
          
        {/* Landing Page */}
        <LikedDogsContext.Provider value={likedDogs}>
          <Route exact path="/" component={HomePage} />
          <Route path="/bookmark" component={BookmarkPage} />
          <Route path="/detail/:id" component={DogDetailPage} />
        </LikedDogsContext.Provider>             

        {/* chat component */}
        
        {/* not found page */}
        <Route path="*" component={NotFoundPage} />
        
      </Switch>
    </MainLayout>
  );
}

export default App;