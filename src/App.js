import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import DogDetailPage from './pages/DogDetailPage/DogDetailPage';
import HomePage from './pages/HomePage/HomePage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <>
    <NavBar />
    <div className="App">

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/bookmark" component={BookmarkPage} />
        <Route path="/detail" component={DogDetailPage} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </div>
    </>
  );
}

export default App;