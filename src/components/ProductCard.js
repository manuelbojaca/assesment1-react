import '../styles/components/ProductCard.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import counter from './counter';

const ProductCard = ({ image, title, id }) => {
  const [ran] = useState(Math.ceil(Math.random() * (3 - 0) + 0));
  const navigate = useNavigate();
  const [min, sec] = counter();

  const productDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div key={id} className="card" onClick={() => min < ran && productDetail(id)}>
      <div className="card--photo">
        <img loading="lazy" src={image} alt="lol"></img>
      </div>
      <p>
        {min}:{sec.toString().padStart(2, 0)} limit: {ran}min
      </p>
      <h2 className="card--title">{title}</h2>
    </div>
  );
};
ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number
};

export default ProductCard;
