import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/"><h3>Pers.io</h3></Link>
    <nav>
      <ul>
        <Link to="/"><li>Home</li></Link>
      </ul>
    </nav>
  </header>
);

export default Header;
