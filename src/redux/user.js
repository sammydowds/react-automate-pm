import * as ActionTypes from './ActionTypes';

const default_user = {"authenticated": false, "username": null, "token": null, "loggedout": true, "accountcreated": false, "firstname": null}

export const User = (state = {
    isLoading: true,
    errMess: null,
    user: default_user
  }, action) => {
  switch(action.type) {
    case ActionTypes.USER_LOADING:
      return {...state, isLoading: true, errMess: null};
      case ActionTypes.USER_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    case ActionTypes.ADD_USER_CREDENTIALS:
      return {...state, isLoading: false, errMess: null, user: action.payload};
    default:
      return state;
  }
}