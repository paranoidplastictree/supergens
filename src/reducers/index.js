import { combineReducers } from 'redux';
import supergens from './supergensReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  supergens
});

export default rootReducer;
