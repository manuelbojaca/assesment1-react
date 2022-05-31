import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/components/ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();

  const data = useSelector((state) => state.productReducer);
  const product = data.products[id - 1];

  return (
    <div className="detail">
      <h1>{product.title}</h1>
      <img className="detail--photo" src={product.image}></img>
      <h2>{product.category}</h2>
      <p>{product.description}</p>
      <p className="detail--price">${product.price}</p>
      <p>Rate:{product.rating.rate}☆</p>
      <p>Stock: {product.rating.count}</p>
    </div>
  );
};

export default ProductDetail;
