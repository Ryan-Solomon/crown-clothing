import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from '../redux/cart/cart.reducers';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from '../redux/directory/directory.reducer';
import shopReducer from '../redux/shop/shop.reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
