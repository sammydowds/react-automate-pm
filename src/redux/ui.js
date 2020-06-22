import * as ActionTypes from './ActionTypes';


//TODO: this seems too verbose - might look at refactoring to one reducer
export const UserInterface = (state = {
  userinterface: null
}, action) => {
  switch(action.type) {

    //Updating UI state for showing project details 
    case ActionTypes.DETAILS_OPEN:
      const openProjectDetails = action.payload; 
      const opendetails_state = Object.assign({}, state); 
      alert(JSON.stringify(openProjectDetails)); 
      opendetails_state.projectDetails = openProjectDetails; 
      return opendetails_state;

    case ActionTypes.DETAILS_CLOSE: 
      const closeProjectDetails = action.payload; 
      const closedetails_state = Object.assign({}, state); 
      closedetails_state.projectDetails = closeProjectDetails; 
      return closedetails_state; 

    //Updating UI state for the update modal both phase and project
    case ActionTypes.PHASE_UPDATE_MODAL_OPEN:
      const openPhaseModal = action.payload; 
      const openphasemodal_state = Object.assign({}, state); 
      openphasemodal_state.phaseUpdateModal = openPhaseModal; 
      return openphasemodal_state; 

    case ActionTypes.PHASE_UPDATE_MODAL_CLOSE:
      const closePhaseModal = action.payload; 
      const closephasemodal_state = Object.assign({}, state); 
      closephasemodal_state.phaseUpdateModal = closePhaseModal; 
      return closephasemodal_state; 

    case ActionTypes.PROJECT_UPDATE_MODAL_OPEN:
      const openProjectModal = action.payload; 
      const openprojmodal_state = Object.assign({}, state); 
      openprojmodal_state.projectUpdateModal = openProjectModal; 
      return openprojmodal_state; 

    case ActionTypes.PROJECT_UPDATE_MODAL_CLOSE:
      const closeProjectModal = action.payload; 
      const closeprojmodal_state = Object.assign({}, state); 
      closeprojmodal_state.projectUpdateModal = closeProjectModal; 
      return closeprojmodal_state; 

    //Updating UI State for creation modal both phase and project 
    case ActionTypes.PROJECT_CREATE_MODAL_OPEN:
      const openProjectCreateModal = action.payload; 
      const openprojcrmodal_state = Object.assign({}, state); 
      openprojcrmodal_state.projectCreateModal = openProjectCreateModal; 
      return openprojcrmodal_state; 

    case ActionTypes.PROJECT_CREATE_MODAL_CLOSE:
      const closeProjectCreateModal = action.payload; 
      const closeprojcrmodal_state = Object.assign({}, state); 
      closeprojcrmodal_state.projectCreateModal = closeProjectCreateModal; 
      return closeprojcrmodal_state; 

    case ActionTypes.PHASE_CREATE_MODAL_OPEN:
      const openPhaseCreateModal = action.payload; 
      const openphasecrmodal_state = Object.assign({}, state); 
      openphasecrmodal_state.phaseCreateModal = openPhaseCreateModal; 
      return openphasecrmodal_state; 

    case ActionTypes.PHASE_CREATE_MODAL_CLOSE:
      const closePhaseCreateModal = action.payload; 
      const closephasecrmodal_state = Object.assign({}, state); 
      closephasecrmodal_state.phaseCreateModal = closePhaseCreateModal; 
      return closephasecrmodal_state; 


    default:
      return state;
  }
}