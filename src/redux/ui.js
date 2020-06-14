import * as ActionTypes from './ActionTypes';


//TODO: this seems too verbose - might look at refactoring to one reducer
export const UserInterface = (state = {
  userinterface: null
}, action) => {
  switch(action.type) {

    case ActionTypes.DETAILS_OPEN:
      const openProjectDetails = action.payload; 
      const opendetails_state = Object.assign({}, state); 
      opendetails_state.projectDetails = openProjectDetails; 
      return opendetails_state;

    case ActionTypes.DETAILS_CLOSE: 
      const closeProjectDetails = action.payload; 
      const closedetails_state = Object.assign({}, state); 
      closedetails_state.projectDetails = closeProjectDetails; 
      return closedetails_state; 

    case ActionTypes.PHASE_MODAL_OPEN:
      const openPhaseModal = action.payload; 
      const openphasemodal_state = Object.assign({}, state); 
      openphasemodal_state.phaseModal = openPhaseModal; 
      return openphasemodal_state; 

    case ActionTypes.PHASE_MODAL_CLOSE:
      const closePhaseModal = action.payload; 
      const closephasemodal_state = Object.assign({}, state); 
      closephasemodal_state.phaseModal = closePhaseModal; 
      return closephasemodal_state; 

    case ActionTypes.PROJECT_MODAL_OPEN:
      const openProjectModal = action.payload; 
      const openprojmodal_state = Object.assign({}, state); 
      openprojmodal_state.projectModal = openProjectModal; 
      return openprojmodal_state; 

    case ActionTypes.PROJECT_MODAL_CLOSE:
      const closeProjectModal = action.payload; 
      const closeprojmodal_state = Object.assign({}, state); 
      closeprojmodal_state.projectModal = closeProjectModal; 
      return closeprojmodal_state; 

    default:
      return state;
  }
}