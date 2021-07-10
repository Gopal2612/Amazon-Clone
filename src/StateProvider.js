import React,{createContext, useContext, useReducer} from 'react';
//this is the data layer
export const StateContext= createContext();

//
export const StateProvider =({ reducer,initialState,children })=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
)

//this is how we use it in inside of a component

export const useStateValue=()=>useContext(StateContext);