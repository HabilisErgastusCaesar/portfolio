import React, { createContext, useContext, useMemo, useState } from 'react';

const LearningContext = createContext<{ Context: any } | undefined>(undefined);

export const LearningProvider: React.FC = ({ children }) => {
    const [logedIn, setLogedIn] = useState({
        id : "logged-out"
    });
    const [loading, setLoading] = useState(true);
    const [ QandAData, setQandAData ] = useState([]);
    const Context = useMemo(() => ({
        logedIn, setLogedIn, loading, setLoading, QandAData, setQandAData
    }), [
        logedIn, loading, QandAData
    ]);
    return (
        <LearningContext.Provider value={{ Context }}>
            {children}
        </LearningContext.Provider>
    );
};

export const useLearningContext = () => useContext(LearningContext);