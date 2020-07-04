import * as ActionTypes from './ActionTypes';

export const Log = (state = {
    isLoading: true,
    errMess: null,
    log: []
  }, action) => {
  switch(action.type) {
    case ActionTypes.ADD_LOG:
      return {...state, isLoading: false, errMess: null, log: action.payload};

    case ActionTypes.LOG_LOADING:
      return {...state, isLoading: true, errMess: null, log: []};

    case ActionTypes.LOG_FAILED:
      return {...state, isLoading: false, errMess: action.payload, log: []};
    
    case ActionTypes.CREATE_LOG_ENTRY:
      const new_entry = action.payload; 
      const edit_state = Object.assign({}, state); 
      edit_state.log[new_entry.id] = new_entry; 
      return {...state, log: edit_state.log}; 

    default:
      return state;
  }
}