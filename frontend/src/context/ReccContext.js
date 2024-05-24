import { createContext, useReducer } from 'react';

export const ReccContext = createContext();

export const reccReducer = (state, action) => {

    switch (action.type){
        case 'SET_ARCcode':
            return {
                routes: action.payload
    }
        case 'CREATE_RECC':
            return {
                routes: [action.payload, ...state.routes]
    }
        default:
            return state;
    }
}


export const ReccContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer( reccReducer, { routes: null });

    return (
        <ReccContext.Provider value={{...state, dispatch}}>
            { children }
        </ReccContext.Provider>
    )
}