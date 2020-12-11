import axios from 'axios';

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";

export const ADD_SMURFS = "ADD_SMURFS";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_ERROR = "ADD_SMURFS_ERROR";

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURFS })
        axios.get("http://localhost:3333/smurfs")
            .then(response => {
                console.log("success fetching Smurfs", response.data);
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data})
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: FETCH_SMURFS_ERROR, payload: {message: 'Error'}})
            })
    }
}

export const addSmurfs = (smurf) => {
    return (dispatch) => {
        dispatch({ type: ADD_SMURFS })
        axios.post('http://localhost:3333/smurfs', smurf)
        .then(response => {
            console.log("success posting smurfs", response)
            dispatch({type: ADD_SMURFS_SUCCESS, payload:response.data})
        }) 
        .catch(error => {
            console.log(error)
            dispatch({ type: ADD_SMURFS_ERROR, payload: error.response })
        })   
}
}

// Task List:
// 1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
// 2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
// 3. Add set error text action:
//              - return action object setting error text
// 4. Any other actions you deem nessiary to complete application