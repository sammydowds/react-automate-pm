import * as ActionTypes from './ActionTypes';

export const Projects = (state = {
    isLoading: true,
    errMess: null,
    projects: []
  }, action) => {
  switch(action.type) {
    case ActionTypes.ADD_PROJECTS:
      return {...state, isLoading: false, errMess: null, projects: action.payload};

    case ActionTypes.PROJECTS_LOADING:
      return {...state, isLoading: true, errMess: null, projects: []};

    case ActionTypes.PROJECTS_FAILED:
      return {...state, isLoading: false, errMess: action.payload, projects: []};
    
    case ActionTypes.UPDATE_PROJECT:
      // TODO: Update the store. Probably will normalize the data
      return state; 

    default:
      return state;
  }
}