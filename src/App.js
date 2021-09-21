import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to='/about'>About</Link>
      <Link to='/find'>Find</Link>
      <Link to='/'>Home</Link>
      {/*nav component here*/}
      <Switch>
        <Route path="/about">
          <h1>About Page</h1>
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