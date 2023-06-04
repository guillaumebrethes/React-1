//  === Import  ===;

//  === Import : local  ===;
import DefaultPicture from '../../../assets/favicon.ico';
import Card from '../../Card/card';

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
];
//  === Component ===;
const Freelances = () => {
  console.log('Composant Freelances => ');

  return (
    <div className="freelances">
      <h1>Cartes des freelances</h1>
      {
        freelanceProfiles.map((profil) => (
          <Card
            key={profil.name}
            label={profil.jobTitle}
            picture={profil.picture}
            title={profil.name}
            className="freelances__contain"
          />
        ))
      }
    </div>
  );
};

export default Freelances;
