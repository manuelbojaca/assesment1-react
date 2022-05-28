import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  const data = useSelector((state) => state.productReducer);
  const product = data.products[id - 1];

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image}></img>
      <h2>{product.category}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
