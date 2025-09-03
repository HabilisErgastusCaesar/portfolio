import { useState } from "react"
import { useRouter } from "next/router";

import { Navigation } from "../../navigate"
import { useStargateContext } from "../useContext/stargateComponents"
import { SearchResult } from "./searchResult/searchResult";

export const SearchFilter = ({stargate}) => {
    console.log(stargate)
    const { Context } = useStargateContext();
    const router = useRouter();
    const classSelect = stargate
    const [hoveredIndex, setHoveredIndex] = useState(
        {index:null,idx:null}
    );
    const searchFilter = (value) => {
        Context.setSearch(value)
        let actor = Context.classSelect.actor
        let episodeName = Context.classSelect.episodeName;
        let showName = Context.classSelect.showName;
        let series = "stargate";
        const updateState = async(type) => {
            const response = await fetch(`/api/stargate/stargateGetEpisodeMatch${type}?episode=${encodeURIComponent(value.trim())}&series=${series}`);
            const episodeName = await response.json()
            Context.setSearchResult(episodeName);
        };
        if (value !== "") {
            if ((value.toLowerCase().includes("sg-1") || 
                value.toLowerCase().includes("atlantis") ||
                value.toLowerCase().includes("universe") && 
                showName && episodeName && !actor)
                || (value.toLowerCase().includes("sg-1") ||
                value.toLowerCase().includes("atlantis") || 
                value.toLowerCase().includes("universe") &&
                showName && !episodeName && actor)
                || (value.toLowerCase().includes("sg-1") ||
                value.toLowerCase().includes("atlantis") || 
                value.toLowerCase().includes("universe") &&
                showName && episodeName && actor)
            ) {
                if (value.toLowerCase().includes("sg-1")) {
                    series = "sg-1";
                    value = value.toLowerCase().replace("sg-1","");
                } else if (value.toLowerCase().includes("atlantis")) {
                    series = "Atlantis";
                    value = value.toLowerCase().replace("atlantis","");
                } else if (value.toLowerCase().includes("universe")) {
                    series = "universe";
                    value = value.toLowerCase().replace("universe","");
                }
                if (value !== "" && episodeName && actor) {
                    updateState("NameActor");
                } else if (value !== "" && episodeName) {
                    updateState("Name");
                } else if (value !== "" && actor) {
                    updateState("Actor")
                }
            } else if (value !== "" && episodeName && actor) {
                updateState("NameActor");
            } else if (value !== "" && episodeName) {
                updateState("Name");
            } else if (value !== "" && actor) {
                updateState("Actor");
            }
        } else {
            console.log("trigger")
            Context.setSearchResult([]);
        }
    }
    
    const searchFilterType = (e) => {
        Context.setClassSelect((prev) => {
            const updatedValue = Context.classSelect.optionButton;
            return {
                ...prev,
                optionButton: !updatedValue
            };
        });
        Context.setOpen((prev) => ({
            ...prev,
            select:!Context.open.select
        }))
    }
    
    const selectType = (e, type) => {
        const checkList = [Context.classSelect.showName,Context.classSelect.episodeName,Context.classSelect.actor]
        let count = 0
        for (let i = 0; i < checkList.length; i++) {
            if (checkList[i]) {
                count += 1
            }
        }
        if (count <= 1) {
            Context.setClassSelect((prev) => {
                return {
                    ...prev,
                    [type]: true
                };
            });
        } else {
            Context.setClassSelect((prev) => {
                const updatedValue = !prev[type];
                return {
                    ...prev,
                    [type]: updatedValue
                };
            });
        }
    };
    
    const dialSequence = ["/images/glyph27-negative.jpg","/images/glyph07-negative.png",
    "/images/glyph15-negative.png","/images/glyph32-negative.png","/images/glyph12-negative.png",
    "/images/glyph30-negative.png","/images/glyph01-negative.png"]
    return (<>
    <div style={{
        display:"flex",
        width:"100%",
    }}>
        {Context.classSelect.optionButton ? (
            <div className={`buttonSearchFilter buttonSearchFilter-${classSelect} buttonSearchFilter-${classSelect}-State`} onClick={(e) => searchFilterType(e)}></div>
        ):(
            <div className={`buttonSearchFilter buttonSearchFilter-${classSelect} buttonSearchFilter-${classSelect}-unselected`} onClick={(e) => searchFilterType(e)}></div>
        )}
        <input type="text" value={Context.search} onChange={(e) => searchFilter(e.target.value)} className={`inputSearchFilter inputSearchFilter-${classSelect}`} />
    </div>
    {Context.searchResult.length > 0 && (
    <div className="stargate-popup-dropBox">
        <SearchResult />
    </div>
    )}
    {Context.open.select && 
    <div className={`stargate-popup-dropBox stargate-popup-dropBox-${classSelect}`}>
        <section onClick={(e) => selectType(e, "showName")} 
        className={`${Context.classSelect.showName && "State"}`} >show name</section>
        {classSelect === "sg-1" && <span>
            {dialSequence.map((image, index) => {
                return (<section key={index} className={`block part${index + 1}`}>
                    <img src={image}/>
                </section>)})}
        </span>}
        {classSelect === "atlantis" && <span>
            <svg viewBox="0 0 100 25">
            <line x1="0" y1="5" x2="20" y2="10" stroke="white" />
            <line x1="40" y1="0" x2="20" y2="10" stroke="white" />
            <line x1="40" y1="0" x2="40" y2="20" stroke="white" />
            <line x1="40" y1="20" x2="60" y2="5" stroke="white" />
            <line x1="60" y1="5" x2="100" y2="25" stroke="white" />
            </svg>
        </span>}
        <section onClick={(e) => selectType(e, "episodeName")} className={`${Context.classSelect.episodeName && "State"}`}
        >episode name</section>
        <section onClick={(e) => selectType(e, "actor")} className={`${Context.classSelect.actor && "State"}`}
        >actor/character name</section>
    </div>}
    </>)
}