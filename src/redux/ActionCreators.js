import * as ActionTypes from './ActionTypes'; 
import { 
  baseUrl, 
  createProjectUrl,
  deleteProjectUrl,
  updateProjectUrl,
  createPhaseUrl,
  deletePhaseUrl,
  updatePhaseUrl,
  createLogEntryUrl, 
  loginUrl, 
  createUserUrl
} from '../shared/baseUrl';
import { normalize, schema } from 'normalizr';


//function to normalize an array of objects, returns normalized list of objects 
const normalizeResponse = (response) => {
  if (response.length !== 0) {
    const new_schema = new schema.Entity('schema', {attributeId: 'id'});  
    const norm_data = normalize(response, [new_schema]);
    return norm_data.entities.schema; 
  } else {
    return []; 
  }
    
}
//Log out user
export const logOut = () => (dispatch) => {
  localStorage.clear(); 
  dispatch(addUserCredentials({"authenticated": false, "username": null, "token": null, "loggedout": true, "accountcreated": false})); 
}

// Sign User Up 
export const signupUser = (user) => (dispatch) => {
  dispatch(userLoading(true)); 

  return fetch(baseUrl + createUserUrl, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
    .then(response => {
      if(response.ok) {
        return response; 
      } else {
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
    .then(dispatch(addUserCredentials({"accountcreated": true}))
  )
    .catch(error => dispatch(userFailed(error.message)));  
  }

// Login User 
export const checkCredentials = (user) => (dispatch) => {
  dispatch(userLoading(true)); 
  let user_info = user; 

  return fetch(baseUrl + loginUrl, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
    .then(response => {
      if(response.ok) {
        return response; 
      } else {
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
    .then(data => {
        localStorage.setItem("token", data.access)
        dispatch(fetchProjects()); 
        dispatch(fetchPhases()); 
        dispatch(fetchLog()); 
        dispatch(addUserCredentials({"authenticated": true, "username": user_info.username, "token": data.access}))
      }
    )
    .catch(error => dispatch(userFailed(error.message)));  
  }
export const userLoading = () => ({
  type: ActionTypes.USER_LOADING
}); 
export const addUserCredentials = (user_info) => ({
  type: ActionTypes.ADD_USER_CREDENTIALS,
  payload: user_info
}); 
export const userFailed = (error) => ({
  type: ActionTypes.USER_FAILED,
  payload: error
}); 

// THUNK
export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true));
    
    //for API 
    return fetch(baseUrl + 'projects/', {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
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
      //normalizing response 
      .then(notNrmResp => normalizeResponse(notNrmResp))
      .then(projects=> dispatch(addProjects(projects))) 
      .catch(error => dispatch(projectsFailed(error.message)));
  
  }

  export const fetchLog = () => (dispatch) => {
    dispatch(logLoading(true));

    //for API 
    return fetch(baseUrl + 'log/', {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
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
      //normalizing response 
      .then(notNrmResp => normalizeResponse(notNrmResp))
      .then(log => dispatch(addLog(log))) 
      .catch(error => dispatch(logFailed(error.message)));
  
  }

  // THUNK to fetch phases 
export const fetchPhases = () => (dispatch) => {
  dispatch(phasesLoading(true));

  //for API 
  return fetch(baseUrl + 'phases/', {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
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
    // normalizing response 
    .then(notNrmResp => normalizeResponse(notNrmResp))
    .then(phases => dispatch(addPhases(phases)))
    .catch(error => dispatch(phasesFailed(error.message)));

}

//Thunks CREATE Phase or Project 
export const createProject = (values) => (dispatch) => {
  
  //for API 
  dispatch(projectsUpdating(true)); 
  //save to new object, because values is not extensible for adding timestamp  
  let projectDetails = Object.assign({}, values); 
  projectDetails.lastupdated = new Date().toISOString(); 

  return fetch(baseUrl + createProjectUrl, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(projectDetails),
    headers: {
      'Content-Type': 'application/json', 
      "Authorization": `Bearer ${localStorage.getItem("token")}`
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
    .then(response => dispatch(createNewProject(response)))
    .catch(error => {
      console.log('Update project ', error.message);
      alert('Your phase updates could not be posted\nError: ' + error.message);
    });

}

export const createPhase = (proj_id, values) => (dispatch) => {

  //for API 
  dispatch(phasesUpdating(true)); 
  //save to new object, because values is not extensible for adding timestamp  
  let phaseDetails = Object.assign({}, values); 
  phaseDetails.lastupdated = new Date().toISOString(); 
  phaseDetails.projectId = proj_id; 
  return fetch(baseUrl + createPhaseUrl, {
    method: 'POST',
    body: JSON.stringify(phaseDetails),
    headers: {
      'Content-Type': 'application/json', 
      "Authorization": `Bearer ${localStorage.getItem("token")}`
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
    .then(response => dispatch(createNewPhase(response)))
    .catch(error => {
      console.log('Update project ', error.message);
      alert('Your phase updates could not be posted\nError: ' + error.message);
    });

}

//creating Log entry 
export const createLogEntry = (values) => (dispatch) => {
  //simulating locally

  //for API 
  //save to new object, because values is not extensible for adding timestamp 
  let entryDetails = Object.assign({}, values); 
  entryDetails.timestamp = new Date().toISOString();
  return fetch(baseUrl + createLogEntryUrl, {
    method: 'POST',
    body: JSON.stringify(entryDetails),
    headers: {
      'Content-Type': 'application/json', 
      "Authorization": `Bearer ${localStorage.getItem("token")}`
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
    .then(response => dispatch(createEntry(response)))
    .catch(error => {
      console.log('Update project ', error.message);
      alert('Your phase updates could not be posted\nError: ' + error.message);
    });

}

// THUNK - Patch to update project details 
export const updateProject = (proj_id, values) => (dispatch) => {

  //for API 
  dispatch(projectsUpdating(true)); 
  //save to new object, because values is not extensible for adding timestamp  
  let projectUpdates = Object.assign({}, values); 
  projectUpdates.lastupdated = new Date().toISOString();
  return fetch(baseUrl + updateProjectUrl + proj_id, {
    method: 'PATCH',
    body: JSON.stringify(projectUpdates),
    headers: {
      'Content-Type': 'application/json', 
      "Authorization": `Bearer ${localStorage.getItem("token")}`
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
  //for API 
  dispatch(phasesUpdating(true)); 
  //save to new object, because values is not extensible for adding timestamp  
  let phaseUpdates = Object.assign({}, values);
  phaseUpdates.lastupdated = new Date().toISOString();
  return fetch(baseUrl + updatePhaseUrl + phase_id, {
    method: 'PATCH',
    body: JSON.stringify(phaseUpdates),
    headers: {
      'Content-Type': 'application/json', 
      "Authorization": `Bearer ${localStorage.getItem("token")}`
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

// THUNK - Delete a project 
export const deleteProject = (proj_id) => (dispatch) => {
  //Simulating locally 

  //for API 
  dispatch(projectsUpdating(true)); 
  //save to new object, because values is not extensible for adding timestamp  
  return fetch(baseUrl + deleteProjectUrl + proj_id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json', 
      "Authorization": `Bearer ${localStorage.getItem("token")}`
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
    // Updating the redux store
    .then(response => dispatch(deleteProj(proj_id)))
    .catch(error => {
      console.log('Delete project ', error.message);
      alert('Your deletion could not be posted\nError: ' + error.message);
    });
}

//THUNK delete phase 
export const deleteSinglePhase = (phase_id) => (dispatch) => {
  //Simulating locally 

  //for API 
  dispatch(phasesUpdating(true)); 
  //save to new object, because values is not extensible for adding timestamp  
  return fetch(baseUrl + deletePhaseUrl + phase_id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json', 
      "Authorization": `Bearer ${localStorage.getItem("token")}`
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
    // Updating the redux store
    .then(proj_id => dispatch(deletePhase(phase_id)))
    .catch(error => {
      console.log('Delete phase ', error.message);
      alert('Your deletion could not be posted\nError: ' + error.message);
    });
}

// More Actions
export const projectsLoading = () => ({
  type: ActionTypes.PROJECTS_LOADING
});

export const projectsUpdating = () => ({
  type: ActionTypes.PROJECTS_UPDATING
}); 

export const projectsFailed = (errmess) => ({
  type: ActionTypes.PROJECTS_FAILED,
  payload: errmess
});

// Log main actions 
export const logLoading = () => ({
  type: ActionTypes.LOG_LOADING
});

export const logFailed = (errmess) => ({
  type: ActionTypes.LOG_FAILED,
  payload: errmess
});

export const addLog = (log) => ({
  type: ActionTypes.ADD_LOG,
  payload: log
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
//delete project
export const deleteProj = (proj_id) => ({
  type: ActionTypes.DELETE_PROJECT, 
  payload: proj_id
}); 
//create single phase
export const createNewPhase = (phase) => ({
  type: ActionTypes.CREATE_PHASE,
  payload: phase
});

export const phasesUpdating = () => ({
  type: ActionTypes.PHASES_UPDATING
}); 

export const deletePhase = (phase_id) => ({
  type: ActionTypes.DELETE_PHASE, 
  payload: phase_id
})
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

//logging change made 
export const createEntry = (entry) => ({
  type: ActionTypes.CREATE_LOG_ENTRY, 
  payload: entry
})

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
