import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import AboutPage from './pages/AboutPage/AboutPage'

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/">
          <h1>Homepage</h1>
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/find">
          <h1>Find Page</h1>
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;