import * as ActionTypes from './ActionTypes';

export const UserInterface = (state = {
    userinterface: []
  }, action) => {
  switch(action.type) {

    case ActionTypes.INITIALIZE_UI: 
        return {...state, userinterface: action.payload};  


    case ActionTypes.DETAILS_OPEN:
        return {...state, userinterface: action.payload};  


    case ActionTypes.DETAILS_CLOSE: 
        return {...state, userinterface: action.payload};  

    default:
      return state;
  }
}