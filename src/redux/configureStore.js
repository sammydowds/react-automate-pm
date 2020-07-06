import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Projects } from './projects';
import { Phases } from './phases';
import { UserInterface } from './ui'; 
import { Log } from './log'; 
import { User } from './user'; 
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
  },
  deleteModal: {
    open: false
  }
}

const default_user = { user: {
  accountcreated: false, 
  loggedout: false, 
  authenticated: false, 
  username: null, 
  token: null
}
}


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      projects: Projects,
      phases: Phases, 
      userinterface: UserInterface, 
      log: Log, 
      user: User
    }),
    {
      userinterface: default_userinterface, 
      user: default_user, 
    }, 
    applyMiddleware(thunk, logger)
  );
  return store;
}