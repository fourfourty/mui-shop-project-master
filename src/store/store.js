import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartStatusReducer } from './reducers/cartStatus';
import { ordersReducer } from './reducers/orders';
import { snackReducer } from './reducers/snackStatus';

const rootReducers = combineReducers({
    cartStatus: cartStatusReducer,
    isSnackStatus: snackReducer, 
    orders: ordersReducer
  })

const store = createStore(rootReducers, composeWithDevTools());

export default store;