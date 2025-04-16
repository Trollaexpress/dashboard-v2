// import {combineReducers} from 'redux';
// import {persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import authSlice from './slice/auth-slice';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   blacklist: ['error_message', 'is_loading'],
// };

// const authConfig = {
//   key: 'auth',
//   version: 1,
//   storage,
//   keyPrefix: '',
//   blacklist: [],
// };

// const rootReducer = combineReducers({
//   auth: persistReducer(authConfig, authSlice),
// });

// export default persistReducer(persistConfig, rootReducer);


// root-reducer.ts
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './slice/auth-slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [], 
};

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['isLoading', 'error'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export default persistReducer(persistConfig, rootReducer);
