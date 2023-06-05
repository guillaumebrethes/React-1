//  === Import  ===;

import { Link } from 'react-router-dom';

//  === Import : local  ===;
import './header.scss';
//  === Component ===;
const Header = () => {
  console.log('Composant Header => ');

  return (
    <div className="header">
      <div>LOGO</div>
      <nav className="header__nav">
        <Link to="/" className="header__link">Acceuil</Link>
        <Link to="/survey/1" className="header__link"> Questionnaire </Link>
        <Link to="/freelances" className="header__link"> Vers page freelance</Link>
      </nav>
    </div>
  );
};

export default Header;
