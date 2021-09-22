import './navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="NavBar">
      <h1 className="title navbar__title">Dog Day</h1>
      <Link to='/' className="link">Home</Link>
      <Link to='/about' className="link">About</Link>
      <Link to='/bookmark' className="link">bookmarks</Link>
      <Link to='/detail' className="link">Dog Details Page</Link>
    </div>
  );
}