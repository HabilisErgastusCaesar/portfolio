import { useState, useEffect } from "react"

import { useCityContext } from "../../cityContext/cityContext";
import { BuildingCivilPopup } from "./buildingCivilPopup/buildingCivilPopup";
import { BuildingsRoadPopup } from "./buildingsRoadPopup/buildingsRoadPopup";

export const BuildingsPopup = () => {
    const { contextValue } = useCityContext();
    const [isLoading, setIsLoading] = useState({
        civil:false,
        sanitation:true,
        militairy:true,
        economic:true,
        road:false,
    });
    const loadingCivil = () => {
        return contextValue.civilBuildings;
    };
    const loadingSanitation = () => {
        return []; 
    };
    const loadingMilitairy = () => {
        return []; 
    };
    const loadingEconomic = () => {
        return []; 
    };
    const loadingRoad = () => {
        return contextValue.road;
    }
    const [civil, setCivil] = useState(loadingCivil);
    const [sanitation, setSanitation] = useState(loadingSanitation);
    const [militairy, setMilitairy] = useState(loadingMilitairy);
    const [economic, setEconomic] = useState(loadingEconomic);
    const [road, setRoad] = useState(loadingRoad)
    return(<div className="buildingLayout">
        <div className="buildingColumn">
            <h4>civil</h4>
            {isLoading.civil ? (
                <h4>loading......</h4>
            ):(
                <BuildingCivilPopup civil={civil}/>
            )}
        </div>
        <div className="buildingColumn">
            <h4>sanitation</h4>
            {isLoading.sanitation ? (
                <h4>loading......</h4>
            ):(
                sanitation.map((item, index)=> {
                    return(<p>{item.name}</p>)
                })
            )}
        </div>
        <div className="buildingColumn">
            <h4>militairy</h4>
            {isLoading.militairy ? (
                <h4>loading......</h4>
            ):(
                militairy.map((item, index)=> {
                    return(<p>{item.name}</p>)
                })
            )}
        </div>
        <div className="buildingColumn">
            <h4>economic</h4>
            {isLoading.economic ? (
                <h4>loading......</h4>
            ):(
                economic.map((item, index)=> {
                    return(<p>{item.name}</p>)
                })
            )}
        </div>
        <div className="buildingColumn">
            <h4>economic</h4>
            {isLoading.road ? (
                <h4>loading......</h4>
            ):(
                <BuildingsRoadPopup road={road}/>
               )}
        </div>
    </div>)
}