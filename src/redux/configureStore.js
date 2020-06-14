import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Projects } from './projects';
import { Phases } from './phases';
import { UserInterface } from './ui'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const default_userinterface = {
  projectDetails: {
    open: false, 
    projectId: null
  }, 
  phaseModal: {
    open: false, 
    phaseId: null
  },
  projectModal: {
    open: false, 
    projectId: null
  }
}

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      projects: Projects,
      phases: Phases, 
      userinterface: UserInterface
    }),
    {
      userinterface: default_userinterface
    }, 
    applyMiddleware(thunk, logger)
  );
  return store;
}