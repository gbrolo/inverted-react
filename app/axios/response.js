/**
 * Useful to parse axios error responses
 * @param {Axios response} response 
 */
const errorSwitch = (response) => {
  const data = {...response.data};
  const dispatchActions = [];

  switch(response.data.errorCode) {
    default:
      break;
  }

  data['actions'] = dispatchActions;

  return data;  
};

/**
 * Handles an Axios Request Promise and parses it so sagas can perform api calls and then inject state into reducers
 * @param {AxiosPromise} axiosPromise 
 */
export const responseFormatter = (axiosPromise) => {
  return new Promise((resolve, reject) => {
    axiosPromise
      .then(response => {        
        resolve(response.data);
      })
      .catch(error => {        
        if (error.response) {          
          reject(errorSwitch(error.response));
        } else {
          
          const response = {
            data: {
              error: 'Could not establish connection to server. Please wait for reconnection.',              
            },
          };
          reject(errorSwitch(response));
        }        
      })
  });
};