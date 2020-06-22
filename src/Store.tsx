import React, { createContext } from 'react';

interface IState {
  episode: [],
  favourites: []
}

const initialState:IState = {
  episode: [],
  favourites: []
}

export const Store = createContext(initialState );


const reducer = () => {

}

export const StoreProvidor = ({ children }: {children:any}):JSX.Element => {
  return <Store.Provider value={initialState}>{children}</Store.Provider>
}

