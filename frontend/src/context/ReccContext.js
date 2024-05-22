import { createContext, useReducer} from 'react';

export const ReccContext = createContext();

export const reccReducer = (state, action) => {

    switch (action.type){
        case 'SET_ARCcode':
            return {
                ARCcode: action.payload
    }

    case 'CREATE_RECC':
        return {
            ARCcode: [action.payload, ...state.ARCcode]
}
    default:
        return state;
    }
}


export const ReccContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer( reccReducer, {ARCcode: null} );

    return (
        <ReccContext.Provider value={{...state, dispatch}}>
            { children }
        </ReccContext.Provider>
    )
}