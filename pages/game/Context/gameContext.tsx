import React, { createContext, useContext, useMemo, useState } from 'react';

const GamesContext = createContext<{ Context: any } | undefined>(undefined);

export const GamesProvider: React.FC = ({ children }) => {
    const [logedIn, setLogedIn] = useState({
        id : "logged-out"
    });
    const [loading, setLoading] = useState(true);
    const Context = useMemo(() => ({
        logedIn, setLogedIn, loading, setLoading
    }), [
        logedIn, loading
    ]);
    return (
        <GamesContext.Provider value={{ Context }}>
            {children}
        </GamesContext.Provider>
    );
};

export const useGamesContext = () => useContext(GamesContext);