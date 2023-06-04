//  === Import  ===;

import { Link } from 'react-router-dom';

//  === Import : local  ===;

//  === Component ===;
const Header = () => {
  console.log('Composant Header => ');

  return (
    <nav className="header">
      <Link to="/">Acceuil</Link>
      <Link to="/survey/1"> Questionnaire </Link>
      <Link to="/freelances"> Vers page freelance</Link>
    </nav>
  );
};

export default Header;
