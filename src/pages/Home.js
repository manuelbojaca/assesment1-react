import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/reducers/Post.reducer';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const obj = { ...data.posts[0] };
  console.log('data: ', obj.id);
  return (
    <div>
      <ProductCard image={obj.image} title={obj.title} id={obj.id} />
    </div>
  );
};

export default Home;
