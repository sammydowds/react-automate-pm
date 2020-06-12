import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Projects } from './projects';
import { Phases } from './phases';
import { UserInterface } from './ui'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      projects: Projects,
      phases: Phases, 
      userinterface: UserInterface
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
}