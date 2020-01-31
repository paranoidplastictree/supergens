import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import supergens from './supergensReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  fuelSavings,
  supergens
});

export default rootReducer;
