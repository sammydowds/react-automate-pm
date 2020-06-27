import * as ActionTypes from './ActionTypes';

export const User = (state = {
    isLoading: true,
    errMess: null,
    user: []
  }, action) => {
  switch(action.type) {
    case ActionTypes.USER_LOADING:
      return {...state, isLoading: true, errMess: null, user: []};
      case ActionTypes.USER_FAILED:
        return {...state, isLoading: false, errMess: action.payload, user: []};
    case ActionTypes.ADD_USER_CREDENTIALS:
      return {...state, isLoading: false, errMess: null, user: action.payload};
    default:
      return state;
  }
}