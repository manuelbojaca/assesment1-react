import axios from 'axios';

export const PRODUCTS_LOADING = 'PRODUCTS_LOADING';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
export const PRODUCTS_ERROR = 'PRODUCTS_ERROR';

export const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: PRODUCTS_LOADING, payload: true });
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        dispatch({ type: PRODUCTS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: PRODUCTS_ERROR, payload: err });
      })
      .finally(() => {
        dispatch({ type: PRODUCTS_LOADING, payload: false });
      });
  };
};

const initialState = {
  products: [],
  loading: false,
  error: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...action.payload]
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;
