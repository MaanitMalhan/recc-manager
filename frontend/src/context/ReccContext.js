import { createContext, useReducer } from 'react';

export const ReccContext = createContext();

let initialState = {
    reccArray: [],
    filteredReccArray: [],
}

export const reccReducer = (state, action) => {

    switch (action.type){
        case 'SET_RECCS': 
            return {
                reccArray: action.payload,
                filteredReccArray: action.payload,
            }       
        case 'CREATE_RECC':
            return {
                reccArray: [action.payload, ...state.reccArray],
                filteredReccArray: [action.payload, ...state.reccArray],
    }
        case 'DELETE_RECC':
            return {
                reccArray: state.reccArray.filter((r)=> r._id !== action.payload._id),
                filteredReccArray: state.reccArray.filter((r)=> r._id !== action.payload._id),
    }
        case 'FILTER_RECCS': {
            let newFilteredReccArray = [];
            if (action.payload === '') {
                newFilteredReccArray = state.reccArray;
            } else {
                state.reccArray.forEach((r) => {
                    if (r.ARCcode === parseFloat(action.payload)) {
                        newFilteredReccArray.push(r);
                    }
                });
            }

            return {
                reccArray: state.reccArray,
                filteredReccArray: newFilteredReccArray,
            }};
            

            case 'UPDATE_RECC':
            return {
                reccArray: state.reccArray.map((r) => 
                    r._id === action.payload._id ? action.payload : r
                ),
                filteredReccArray: state.filteredReccArray.map((r) => 
                    r._id === action.payload._id ? action.payload : r
                ),
            }
        
        default:
            return state;
    }
}


export const ReccContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer( reccReducer, initialState);

    return (
        <ReccContext.Provider value={{...state, dispatch}}>
            { children }
        </ReccContext.Provider>
    )
}