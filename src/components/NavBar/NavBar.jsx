import './navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link to='/about'>About</Link>
      <Link to='/find'>Find</Link>
      <Link to='/'>Home</Link>
    </div>
  );
}