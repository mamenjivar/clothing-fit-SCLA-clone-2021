import React, { createContext, useState, FC } from 'react';

// create context
export const Context = createContext<any>(undefined);

// create the context provider, we are using the state
// to activate values from the context
export const UIProvider: FC = ({ children }) => {

    // the reactive values
    const [ showTabs, setShowTabs ] = useState(true);

    // the store object
    let state = {
        showTabs,
        setShowTabs
    };

    // wrap application in provider with initialized context
    return <Context.Provider value={state}>{children}</Context.Provider>
}

export default Context;