import '../styles/components/ProductCard.scss';
import PropTypes from 'prop-types';

const ProductCard = ({ image, title, id }) => {
  return (
    <div className="card">
      <div className="card--photo">
        <img loading="lazy" src={image} alt="lol"></img>
      </div>
      <h2 className="card--title">{title}</h2>
      <h3 className="card--id">{id}</h3>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number
};

export default ProductCard;
