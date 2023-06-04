//  === Import  ===;

import { Link } from 'react-router-dom';
//  === Import : local  ===;

//  === Component ===;
const FreelanceForm = () => {
  console.log('Composant FreelanceForm => ');

  return (
    <div>
      <h2>Questionanire freelance </h2>
      <Link to="results"> Voir les résultats</Link>
    </div>
  );
};

export default FreelanceForm;
