import { createStore, combineReducers, applyMiddleware } from 'redux';
import postReducer from './reducers/Post.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  postReducer
});
const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);
