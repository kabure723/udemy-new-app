import { createStore, combineReducers } from 'redux';
import userReducer from './reducer/user';
import { composeWithDevTools } from 'redux-devtools-extension';

// jsonツリー
const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
