import axios from 'axios';

export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_ERROR = 'POSTS_ERROR';
export const POSTS_DELETE = 'POSTS_DELETE';

export const getPosts = () => {
  return function (dispatch) {
    dispatch({ type: POSTS_LOADING, payload: true });
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        dispatch({ type: POSTS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: POSTS_ERROR, payload: err });
      })
      .finally(() => {
        dispatch({ type: POSTS_LOADING, payload: false });
      });
  };
};

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: [...action.payload]
      };
    case POSTS_DELETE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
