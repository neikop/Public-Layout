import { createStore, combineReducers } from 'redux';
import coreui from './coreui';

export const store = createStore(
  combineReducers({
    coreui,
  }),
  {},
);
