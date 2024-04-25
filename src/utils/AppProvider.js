import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
    const [appMode, setAppMode] = useState("closed");

    return (
        <AppContext.Provider value={{ appMode, setAppMode }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
