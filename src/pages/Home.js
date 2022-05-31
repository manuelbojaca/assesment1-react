import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/reducers/Product.reducer';
import ProductCard from '../components/ProductCard';
import '../styles/components/Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productReducer);
  const products = [...data.products];
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="home">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            id={product.id}
          />
        );
      })}
    </div>
  );
};

export default Home;
