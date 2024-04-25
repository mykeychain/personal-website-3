import React, { useState } from 'react';
import OpenContext from './OpenContext';

const OpenProvider = ({ children }) => {
    const [openId, setOpenId] = useState("");

    function resetOpenIds() {
        setOpenId("");
    }

    return (
        <OpenContext.Provider value={{ openId, setOpenId, resetOpenIds }}>
            {children}
        </OpenContext.Provider>
    );
};

export default OpenProvider;
