import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Projects } from './projects';
import { Phases } from './phases';
import { UserInterface } from './ui'; 
import { Log } from './log'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const default_userinterface = {
  projectDetails: {
    open: false, 
    projectId: null
  }, 
  phaseUpdateModal: {
    open: false, 
    phaseId: null
  },
  projectUpdateModal: {
    open: false, 
    projectId: null
  }, 
  projectCreateModal: {
    open: false 
  }, 
  phaseCreateModal: {
    open: false 
  }
}

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      projects: Projects,
      phases: Phases, 
      userinterface: UserInterface, 
      log: Log
    }),
    {
      userinterface: default_userinterface
    }, 
    applyMiddleware(thunk, logger)
  );
  return store;
}