//  === Import  ===;

//  === Import : local  ===;
import { Link } from 'react-router-dom';
//  === Component ===;
const ClientForm = () => {
  console.log('Composant CLientForm => ');

  return (
    <div>
      <h2>Questionnaire client</h2>
      <Link to="results"> Voir les résultats</Link>
    </div>
  );
};

export default ClientForm;
