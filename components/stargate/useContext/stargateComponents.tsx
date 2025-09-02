import React, { createContext, useContext, useMemo, useState } from 'react';

const StargateContext = createContext<{ Context: any } | undefined>(undefined);

export const StargateProvider: React.FC = ({ children }) => {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState({
        select:false
    });
    const [classSelect, setClassSelect ] = useState({
        showName:       false,
        episodeName:    true,
        actor:          false,
        optionButton:   false,
    });
    const [windowWidth , setWindowWidth] = useState({
        searchFilter:true,
        optionButtons:true,
    });
    const [ reset, setReset ] = useState(false);
    const [ searchResult, setSearchResult] = useState([]);
    const [ scroll, setScroll ] = useState({
        infoScroll: false,
        CastScroll: false,
        episodeScroll: false,
    });
    const [castAtlantis, setCastAtlantis] = useState([]);
    const [episode, setEpisode] = useState({
        sgOne: [],
        atlantis: [],
        universe: []
    });
    const Context = useMemo(() => ({
        open, setOpen,classSelect, setClassSelect,searchResult, setSearchResult,castAtlantis, setCastAtlantis,
        search, setSearch, windowWidth , setWindowWidth, reset, setReset, scroll, setScroll, episode, setEpisode
    }), [
        search, open, classSelect, windowWidth, reset, searchResult, scroll, castAtlantis, episode
    ]);
    return (
        <StargateContext.Provider value={{ Context }}>
            {children}
        </StargateContext.Provider>
    );
};

export const useStargateContext = () => useContext(StargateContext);