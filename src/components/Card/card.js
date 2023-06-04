//  === Import  ===;
import { string } from 'prop-types';
//  === Import : local  ===;
import './card.scss';

//  === Component ===;
const Card = ({ label, title, picture }) => {
  console.log('Composant Card => ');

  return (
    <div className="card">
      <span> {label} </span>
      <img src={picture} alt="" className="cards__img" />
      <span> {title} </span>
    </div>
  );
};

export default Card;

Card.propTypes = {
  label: string.isRequired,
  picture: string.isRequired,
  title: string.isRequired,
};
