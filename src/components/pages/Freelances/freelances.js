//  === Import  ===;
import { useEffect, useState } from 'react';

//  === Import : local  ===;
import Card from '../../Card/card';
import Loader from '../../Loader/loader';
import './freelances.scss';

//  === Component ===;
const Freelances = () => {
  console.log('Composant Freelances => ');

  const [isDataLoading, setDataLoading] = useState(false);
  const [freelancesData, setFreelancesData] = useState([]);

  useEffect(() => {
    const fetchFreelancesData = async () => {
      setDataLoading(true);
      try {
        const res = await fetch('http://localhost:8000/freelances');
        const { freelancersList } = await res.json();
        setFreelancesData(freelancersList);
      }
      catch (err) {
        console.log(err);
        // setError(true);
      }
      finally {
        setDataLoading(false);
      }
    };
    fetchFreelancesData();
  }, []);

  return (
    <div className="freelances">
      {/* <h1>Cartes des freelances</h1> */}
      {
        isDataLoading ? (
          <Loader />
        ) : (
          freelancesData.map((profil) => (
            <Card
              key={profil.id}
              label={profil.job}
              picture={profil.picture}
              title={profil.name}
              className="freelances__contain"
            />
          ))
        )
      }
    </div>
  );
};

export default Freelances;
