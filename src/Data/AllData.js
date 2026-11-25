import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const apiValue = createContext();

function AllData({children}) {
    const [text, setText] = useState([]);

    useEffect(() => {
        
    }, []);

    return (
        <apiValue.Provider value={text}>
            {children}
        </apiValue.Provider>
    );
}

export { AllData, apiValue };