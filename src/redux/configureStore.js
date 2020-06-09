import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Projects } from './projects';
import { Phases } from './phases';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      projects: Projects,
      phases: Phases
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
}