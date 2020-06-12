import * as ActionTypes from './ActionTypes'; 
import { baseUrl } from '../shared/baseUrl';
import { normalize, schema } from 'normalizr'; 

//function to normalize an array of objects, returns normalized list of objects 
const normalizeResponse = (response) => {
  const new_schema = new schema.Entity('schema', {attributeId: 'id'});  
  const norm_data = normalize(response, [new_schema]);
  return norm_data.entities.schema;   
}

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
      //normalizing response 
      .then(notNrmResp => normalizeResponse(notNrmResp))
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
    // normalizing response 
    .then(notNrmResp => normalizeResponse(notNrmResp))
    .then(phases => dispatch(addPhases(phases)))
    .catch(error => dispatch(phasesFailed(error.message)));

}

// THUNK - Patch to update project details 
export const updateProject = (proj_id, values) => (dispatch) => {
  //save to new object, because values is not extensible for adding timestamp  
  let projectUpdates = Object.assign({}, values); 
  projectUpdates.lastupdated = new Date().toISOString();
  return fetch(baseUrl + 'projects/' + proj_id, {
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
    .then(response => dispatch(updateProj(response)))
    .catch(error => {
      console.log('Update project ', error.message);
      alert('Your phase updates could not be posted\nError: ' + error.message);
    });

}

// THUNK - Patch to update project details 
export const updatePhase = (phase_id, values) => (dispatch) => {
  //save to new object, because values is not extensible for adding timestamp  
  let phaseUpdates = Object.assign({}, values); 
  phaseUpdates.lastupdated = new Date().toISOString();
  return fetch(baseUrl + 'phases/' + phase_id, {
    method: 'PATCH',
    body: JSON.stringify(phaseUpdates),
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
    .then(response => dispatch(updatePhaseDetails(response)))
    .catch(error => {
      console.log('Update phase ', error.message);
      alert('Your phase updates could not be posted\nError: ' + error.message);
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

//update single project
export const updateProj = (project) => ({
  type: ActionTypes.UPDATE_PROJECT,
  payload: project
});

//update single phase
export const updatePhaseDetails = (phase) => ({
  type: ActionTypes.UPDATE_PHASE,
  payload: phase
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
