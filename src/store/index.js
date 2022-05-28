import { createStore, combineReducers, applyMiddleware } from 'redux';
import productReducer from './reducers/Product.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  productReducer
});
const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);
