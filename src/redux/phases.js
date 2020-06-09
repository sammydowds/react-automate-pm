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

    default:
      return state;
  }
}