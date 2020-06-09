import * as ActionTypes from './ActionTypes'; 
import { baseUrl } from '../shared/baseUrl';

// THUNK
export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true));
  
    return fetch(baseUrl + 'projects')
      .then(response => {
        if (response.ok) {
          return response;
        }
        else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess= new Error(error.message);
        throw errmess;
      })
      .then(response => response.json())
      .then(projects=> dispatch(addProjects(projects)))
      .catch(error => dispatch(projectsFailed(error.message)));
  
  }

  // THUNK to fetch phases 
export const fetchPhases = () => (dispatch) => {
  dispatch(phasesLoading(true));

  return fetch(baseUrl + 'phases')
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
      var errmess= new Error(error.message);
      throw errmess;
    })
    .then(response => response.json())
    .then(phases => dispatch(addPhases(phases)))
    .catch(error => dispatch(phasesFailed(error.message)));

}

// THUNK - Patch to update project details 
export const updateProject = (id, name, status, complete) => (dispatch) => {
  const projectUpdates = {
    name: name, 
    status: status, 
    complete: complete, 
  }
  updateProject.lastupdated = new Date().toISOString();
  return fetch(baseUrl + 'projects/', {
    method: 'PATCH',
    body: JSON.stringify(projectUpdates),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
      var errmess= new Error(error.message);
      throw errmess;
    })
    .then(response => response.json())
    // Updating the redux store
    .then(response => dispatch(updateProject(response)))
    .catch(error => {
      console.log('Update project ', error.message);
      alert('Your updates could not be posted\nError: ' + error.message);
    });

}

// More Actions
export const projectsLoading = () => ({
  type: ActionTypes.PROJECTS_LOADING
});

export const projectsFailed = (errmess) => ({
  type: ActionTypes.PROJECTS_FAILED,
  payload: errmess
});

export const addProjects = (projects) => ({
  type: ActionTypes.ADD_PROJECTS,
  payload: projects
});

// More Actions for phases 
export const phasesLoading = () => ({
  type: ActionTypes.PHASES_LOADING
});

export const phasesFailed = (errmess) => ({
  type: ActionTypes.PHASES_FAILED,
  payload: errmess
});

export const addPhases = (phases) => ({
  type: ActionTypes.ADD_PHASES,
  payload: phases
});