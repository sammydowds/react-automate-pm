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
      const project = action.payload; 
      const new_state = Object.assign({}, state); 
      new_state.projects[project.id] = project; 
      return {...state, projects: new_state.projects}; 

    default:
      return state;
  }
}