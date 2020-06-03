import * as ActionTypes from './ActionTypes'; 
import { baseUrl } from '../shared/baseUrl';

// THUNK
export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true));
  
    return fetch(baseUrl + 'projects')
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
      .then(projects=> dispatch(addProjects(projects)))
      .catch(error => dispatch(projectsFailed(error.message)));
  
  }

// // THUNK
// export const updateProject = (id, name, author, comment) => (dispatch) => {
//   const newComment = {
//     dishId: dishId,
//     rating: rating,
//     author: author,
//     comment: comment
//   }
//   newComment.date = new Date().toISOString();
//   return fetch(baseUrl + 'comments', {
//     method: 'POST',
//     body: JSON.stringify(newComment),
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     credentials: 'same-origin'
//   })
//     .then(response => {
//       if (response.ok) {
//         return response;
//       }
//       else {
//         var error = new Error('Error ' + response.status + ': ' + response.statusText);
//         error.response = response;
//         throw error;
//       }
//     },
//     error => {
//       var errmess= new Error(error.message);
//       throw errmess;
//     })
//     .then(response => response.json())
//     // Updating the redux store
//     .then(response => dispatch(addComment(response)))
//     .catch(error => {
//       console.log('Post comments ', error.message);
//       alert('Your comment could not be posted\nError: ' + error.message);
//     });

// }

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