import '../styles/components/ProductCard.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, title, id }) => {
  let time = new Date().getTime();
  const navigate = useNavigate();
  const productDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div key={id} className="card" onClick={() => productDetail(id)}>
      <div className="card--photo">
        <img loading="lazy" src={image} alt="lol"></img>
      </div>
      <h2 className="card--title">{title}</h2>
      <p>{time / 1000}</p>
    </div>
  );
};
ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number
};

export default ProductCard;
