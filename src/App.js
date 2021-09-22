import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AboutPage from './pages/AboutPage/AboutPage';
import DogDetailPage from './pages/DogDetailPage/DogDetailPage';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/find">
          <h1>Find Page</h1>
        </Route>

        <Route path="/detail" component={DogDetailPage} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;