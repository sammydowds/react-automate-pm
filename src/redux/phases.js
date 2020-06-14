import * as ActionTypes from './ActionTypes';

export const Phases = (state = {
    isLoading: true,
    errMess: null,
    phases: []
  }, action) => {
  switch(action.type) {
    case ActionTypes.ADD_PHASES:
      return {...state, isLoading: false, errMess: null, phases: action.payload};

    case ActionTypes.PHASES_LOADING:
      return {...state, isLoading: true, errMess: null, phases: []};

    case ActionTypes.PHASES_FAILED:
      return {...state, isLoading: false, errMess: action.payload, phases: []};
    
    case ActionTypes.UPDATE_PHASE:
      const phase = action.payload; 
      const new_state = Object.assign({}, state); 
      new_state.phases[phase.id] = phase; 
      return {...state, phases: new_state.phases}; 

    case ActionTypes.CREATE_PHASE:
      const new_phase = action.payload; 
      const edit_state = Object.assign({}, state); 
      edit_state.phases[new_phase.id] = new_phase; 
      return {...state, phases: edit_state.phases}; 

    default:
      return state;
  }
}