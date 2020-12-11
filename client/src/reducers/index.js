import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR, ADD_SMURFS, ADD_SMURFS_SUCCESS, ADD_SMURFS_ERROR } from "../actions/index";

export const initialState = {
    smurfData: [],
    isFetching: false,
    error:"",
    updated: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS:
          return {
            ...state,
            isFetching: true,
            error: ""
          };
        case FETCH_SMURFS_SUCCESS:
          return {
            ...state,
            isFetching: false,
            error: "",
            smurfData: action.payload
          };
        case FETCH_SMURFS_ERROR:
          return {
            ...state,
            error: action.payload,
            isFetching: false
          };
        case ADD_SMURFS:
            return {
                ...state,
            };
        case ADD_SMURFS_SUCCESS:
            return {
                ...state,
                updated: true,
                smurfData: action.payload
            }
        case ADD_SMURFS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
          return state;
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary