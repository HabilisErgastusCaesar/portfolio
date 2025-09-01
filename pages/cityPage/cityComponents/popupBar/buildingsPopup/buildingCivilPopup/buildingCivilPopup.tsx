import { useCallback } from "react";
import { useCityContext } from "../../../cityContext/cityContext";
import { v4 as uuid } from "uuid";

export const BuildingCivilPopup = ({civil}) => {
    const { contextValue } = useCityContext();
    const objectToTracking = (item, index) => {
        if (contextValue.trackingObject == null) {
            const id = uuid(); 
            contextValue.setTrackingObject({
            id: id,
            ...item,
            type: "civil",
            });
        } else {
            contextValue.setTrackingObject(null)
        }
    };

    return(civil.map((item, index)=> {
        return(<div onClick={() => objectToTracking(item, index)} className="building-button" key={index}>
            <h3>{item.name}</h3>
        </div>)
    }))
}