import * as ActionTypes from './ActionTypes'; 
import { baseUrl } from '../shared/baseUrl';
import { normalize, schema } from 'normalizr';
//Simulating API locally  
import { PROJECTS } from '../shared/projects';
import { PHASES } from '../shared/phases';  

let PROJECTS_DB = PROJECTS; 
let PHASES_DB = PHASES; 
//function to normalize an array of objects, returns normalized list of objects 
const normalizeResponse = (response) => {
  const new_schema = new schema.Entity('schema', {attributeId: 'id'});  
  const norm_data = normalize(response, [new_schema]);
  return norm_data.entities.schema;   
}

// THUNK
export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true));
    //Simulating locally 
    const response_proj = PROJECTS_DB.projects; 
    const projs = normalizeResponse(response_proj); 
    dispatch(addProjects(projs)); 
    
    // //for API 
    // return fetch(baseUrl + 'projects')
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     }
    //     else {
    //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //   error => {
    //     var errmess= new Error(error.message);
    //     throw errmess;
    //   })
    //   .then(response => response.json())
    //   //normalizing response 
    //   .then(notNrmResp => normalizeResponse(notNrmResp))
    //   .then(projects=> dispatch(addProjects(projects))) 
    //   .catch(error => dispatch(projectsFailed(error.message)));
  
  }

  // THUNK to fetch phases 
export const fetchPhases = () => (dispatch) => {
  dispatch(phasesLoading(true));
  //Simulating locally
  const response_phases = PHASES_DB.phases; 
  const phases_local = normalizeResponse(response_phases); 
  dispatch(addPhases(phases_local)); 
  //for API 
  // return fetch(baseUrl + 'phases')
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     }
  //     else {
  //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //       error.response = response;
  //       throw error;
  //     }
  //   },
  //   error => {
  //     var errmess= new Error(error.message);
  //     throw errmess;
  //   })
  //   .then(response => response.json())
  //   // normalizing response 
  //   .then(notNrmResp => normalizeResponse(notNrmResp))
  //   .then(phases => dispatch(addPhases(phases)))
  //   .catch(error => dispatch(phasesFailed(error.message)));

}

//Thunks CREATE Phase or Project 
export const createProject = (values) => (dispatch) => {
  //simulating locally
  const projects_len = PROJECTS_DB.projects.length; 
  let projectDetails = Object.assign({}, values);
  projectDetails.lastupdated = new Date().toISOString();
  projectDetails.id = projects_len; 
  PROJECTS_DB.projects.push(projectDetails); 
  dispatch(createNewProject(projectDetails)); 
  
  //for API 
  //save to new object, because values is not extensible for adding timestamp  
  // let projectDetails = Object.assign({}, values); 
  // projectDetails.lastupdated = new Date().toISOString();
  // return fetch(baseUrl + 'projects', {
  //   method: 'POST',
  //   body: JSON.stringify(projectDetails),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   credentials: 'same-origin'
  // })
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     }
  //     else {
  //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //       error.response = response;
  //       throw error;
  //     }
  //   },
  //   error => {
  //     var errmess= new Error(error.message);
  //     throw errmess;
  //   })
  //   .then(response => response.json())
  //   // Updating the redux store
  //   .then(response => dispatch(createNewProject(response)))
  //   .catch(error => {
  //     console.log('Update project ', error.message);
  //     alert('Your phase updates could not be posted\nError: ' + error.message);
  //   });

}

export const createPhase = (proj_id, values) => (dispatch) => {
  //simulating locally
  const phases_len = PHASES_DB.phases.length; 
  let phasesDetails = Object.assign({}, values); 
  phasesDetails.lastupdated = new Date().toISOString();
  phasesDetails.id = phases_len; 
  phasesDetails.projectId = proj_id; 
  PHASES_DB.phases.push(phasesDetails); 
  dispatch(createNewPhase(phasesDetails)); 

  //for API 
  //save to new object, because values is not extensible for adding timestamp  
  // let phaseDetails = Object.assign({}, values); 
  // phaseDetails.lastupdated = new Date().toISOString();
  // phaseDetails.projectId = proj_id; 
  // return fetch(baseUrl + 'phases', {
  //   method: 'POST',
  //   body: JSON.stringify(phaseDetails),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   credentials: 'same-origin'
  // })
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     }
  //     else {
  //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //       error.response = response;
  //       throw error;
  //     }
  //   },
  //   error => {
  //     var errmess= new Error(error.message);
  //     throw errmess;
  //   })
  //   .then(response => response.json())
  //   // Updating the redux store
  //   .then(response => dispatch(createNewPhase(response)))
  //   .catch(error => {
  //     console.log('Update project ', error.message);
  //     alert('Your phase updates could not be posted\nError: ' + error.message);
  //   });

}

// THUNK - Patch to update project details 
export const updateProject = (proj_id, values) => (dispatch) => {
  //Simulating locally 
  let projectUpdates = Object.assign({}, values); 
  projectUpdates.lastupdated = new Date().toISOString();
  let proj_changed = Object.assign(PROJECTS_DB.projects[proj_id], projectUpdates); 
  PROJECTS_DB.projects[proj_id] = proj_changed; 
  dispatch(updateProj(proj_changed)); 

  //for API 
  //save to new object, because values is not extensible for adding timestamp  
  // let projectUpdates = Object.assign({}, values); 
  // projectUpdates.lastupdated = new Date().toISOString();
  // return fetch(baseUrl + 'projects/' + proj_id, {
  //   method: 'PATCH',
  //   body: JSON.stringify(projectUpdates),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   credentials: 'same-origin'
  // })
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     }
  //     else {
  //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //       error.response = response;
  //       throw error;
  //     }
  //   },
  //   error => {
  //     var errmess= new Error(error.message);
  //     throw errmess;
  //   })
  //   .then(response => response.json())
  //   // Updating the redux store
  //   .then(response => dispatch(updateProj(response)))
  //   .catch(error => {
  //     console.log('Update project ', error.message);
  //     alert('Your phase updates could not be posted\nError: ' + error.message);
  //   });

}

// THUNK - Patch to update project details 
export const updatePhase = (phase_id, values) => (dispatch) => {
  // Simulating Locally 
  let phaseUpdates = Object.assign({}, values); 
  phaseUpdates.lastupdated = new Date().toISOString();
  let phase_changed = Object.assign(PHASES_DB.phases[phase_id], phaseUpdates); 
  PHASES_DB.phases[phase_id] = phase_changed; 
  dispatch(updatePhaseDetails(phase_changed)); 
  //for API 
  //save to new object, because values is not extensible for adding timestamp  
  // let phaseUpdates = Object.assign({}, values); 
  // phaseUpdates.lastupdated = new Date().toISOString();
  // return fetch(baseUrl + 'phases/' + phase_id, {
  //   method: 'PATCH',
  //   body: JSON.stringify(phaseUpdates),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   credentials: 'same-origin'
  // })
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     }
  //     else {
  //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //       error.response = response;
  //       throw error;
  //     }
  //   },
  //   error => {
  //     var errmess= new Error(error.message);
  //     throw errmess;
  //   })
  //   .then(response => response.json())
  //   // Updating the redux store
  //   .then(response => dispatch(updatePhaseDetails(response)))
  //   .catch(error => {
  //     console.log('Update phase ', error.message);
  //     alert('Your phase updates could not be posted\nError: ' + error.message);
  //   });

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
//create single project
export const createNewProject = (project) => ({
  type: ActionTypes.CREATE_PROJECT,
  payload: project
});
//create single phase
export const createNewPhase = (phase) => ({
  type: ActionTypes.CREATE_PHASE,
  payload: phase
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

//UI actions 
//could combineReducers here probably 
export const initializeUserInterface = () => (dispatch) => {
  const uiinitvals = {
  projectDetails: {
    open: false, 
    projectId: null
  }, 
  phaseModal: {
    open: false, 
    projectId: null
  },
  projectModal: {
    open: false, 
    projectId: null
  },
}
  dispatch({
    type: ActionTypes.INITIALIZE_UI, 
    payload: uiinitvals
  }); 
}

export const openDetails = (projectId) => (dispatch) => {
  const details_project = {
    open: true, 
    projectId: projectId
  }
  dispatch({
    type: ActionTypes.DETAILS_OPEN, 
    payload: details_project
  }); 
}

export const closeDetails = () => (dispatch) => {
  const details_project = {
      open: false, 
      projectSelected: null
    }
  dispatch({
    type: ActionTypes.DETAILS_CLOSE, 
    payload: details_project
  }); 
}

export const openPhaseUpdateModal = (phaseId) => (dispatch) => {
  const details_phase = {
    open: true, 
    phaseId: phaseId
  }
  dispatch({
    type: ActionTypes.PHASE_UPDATE_MODAL_OPEN, 
    payload: details_phase
  }); 
}

export const closePhaseUpdateModal = () => (dispatch) => {
  const details_phase = {
    open: false, 
    phaseId: null
  }
  dispatch({
    type: ActionTypes.PHASE_UPDATE_MODAL_CLOSE, 
    payload: details_phase
  }); 
}

export const openProjectUpdateModal = (projectId) => (dispatch) => {
  const details_phase = {
    open: true, 
    projectId: projectId
  } 
  dispatch({
    type: ActionTypes.PROJECT_UPDATE_MODAL_OPEN, 
    payload: details_phase
  }); 
}

export const closeProjectUpdateModal = () => (dispatch) => {
  const details_phase = {
    open: false, 
    projectId: null
  }
  dispatch({
    type: ActionTypes.PROJECT_UPDATE_MODAL_CLOSE, 
    payload: details_phase
  }); 
}

export const openProjectCreateModal = () => (dispatch) => {
  const details_phase = {
    open: true 
  } 
  dispatch({
    type: ActionTypes.PROJECT_CREATE_MODAL_OPEN, 
    payload: details_phase
  }); 
}

export const closeProjectCreateModal = () => (dispatch) => {
  const details_phase = {
    open: false
  }
  dispatch({
    type: ActionTypes.PROJECT_CREATE_MODAL_CLOSE, 
    payload: details_phase
  }); 
}

export const openPhaseCreateModal = () => (dispatch) => {
  const details_phase = {
    open: true 
  } 
  dispatch({
    type: ActionTypes.PHASE_CREATE_MODAL_OPEN, 
    payload: details_phase
  }); 
}

export const closePhaseCreateModal = () => (dispatch) => {
  const details_phase = {
    open: false
  }
  dispatch({
    type: ActionTypes.PHASE_CREATE_MODAL_CLOSE, 
    payload: details_phase
  }); 
}
