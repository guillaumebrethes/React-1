//  === Import  ===;
import { string } from 'prop-types';
//  === Import : local  ===;
import './card.scss';

//  === Component ===;
const Card = ({ label, title, picture }) => {
  console.log('Composant Card => ');

  return (
    <div className="card">
      <span className="card__label"> {label} </span>
      {/* <img src={picture} alt="" className="card__img" /> */}
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
