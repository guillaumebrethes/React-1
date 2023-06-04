//  === Import  ===;

import { Link } from 'react-router-dom';

//  === Import : local  ===;

//  === Component ===;
const Header = () => {
  console.log('Composant Header => ', Header);

  return (
    <nav>
      <Link to="/">Acceuil</Link>
      <Link to="/survey">Questionnaire </Link>
    </nav>
  );
};

export default Header;
