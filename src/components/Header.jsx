import './Header.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="main-header">
      <div className='header'>
        
      <h1>Cypress Demo</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" data-cy="header-home-link">Home</Link>
            </li>
            <li>
              <Link to="/about" data-cy="header-about-link">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <img src={logo} alt="A list" />
      <h1>Cypress React Tasks</h1>
    </header>
  );
}

export default Header;
