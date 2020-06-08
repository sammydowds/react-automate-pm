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

// THUNK
export const updateProject = (id, name, status, complete) => (dispatch) => {
  const newProject = {
    // TODO: Put form data here and as vars 
    id: id,
    name: name, 
    status: status, 
    complete: complete, 
  }
  newProject.lastupdated = new Date().toISOString();
  return fetch(baseUrl + 'projects', {
    method: 'POST',
    body: JSON.stringify(newProject),
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