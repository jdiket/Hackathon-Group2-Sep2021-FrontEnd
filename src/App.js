import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import AboutPage from './pages/AboutPage/AboutPage'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/find">
          <h1>Find Page</h1>
        </Route>
        <Route path="/">
          <h1>homepage</h1>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;