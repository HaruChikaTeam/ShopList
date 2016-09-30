import { combineReducers } from 'redux';
import { 
  ADD_SHOP,
  EDIT_SHOP,
  DELETE_SHOP,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  FILTER_SHOP
} from '../action/action';

let lastId = 0;

function uniqeID(prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}

function shop(state = {} , action) {
  switch (action.type) {
    case ADD_SHOP:
      return {
        shop_ID : uniqeID(),
        shop_name: action.shop_name,
        address: action.address
      }
    case EDIT_SHOP:
      return Object.assign(
          {}, state, 
          { 
            shop_name: action.shop_name,
            address: action.address,
          });
    default:
      return state
  }
}

function shops(state = [] , action) {
  switch (action.type) {
    case ADD_SHOP:
      return [
        ...state,
        shop(undefined, action)
      ]
    case EDIT_SHOP:
      console.log(state);
      return [
        ...state.slice(0, action.shop_ID),
        shop(state[action.shop_ID], action),
        ...state.slice(Number(action.shop_ID) + 1)
      ]
    case DELETE_SHOP:
       return [
        ...state.slice(0, action.rowID),
        ...state.slice(Number(action.rowID) + 1)
      ]
    default:
      return state
  }
}

function product(state = {} , action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        shop_ID : action.shop_ID,
        product_name: action.product,
        price: action.price,
      }
    case EDIT_PRODUCT:
      return Object.assign(
          {}, state, 
          { 
            product: action.product,
            price: action.price,
          });
    default:
      return state
  }
}

function products(state = [] , action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        product(undefined, action)
      ]
    case EDIT_PRODUCT:
      return [
        ...state.slice(0, action.product_ID),
        product(undefined, action),
        ...state.slice(action.product_ID + 1)
      ]
    case DELETE_PRODUCT:
      return [
        ...state.slice(0, action.product_ID),
        ...state.slice(action.product_ID + 1)
      ]
    default:
      return state
  }
}



function filtersShop(state = {}, action) {
  switch (action.type) {
    case FILTER_SHOP:
      return Object.assign({}, 
        state[action.index], 
        { productsOfShop : action.shop_ID });
    default:
      return state
  }  
}

const shopApp = combineReducers({
  shops,
  products,
  filtersShop
})

export default shopApp