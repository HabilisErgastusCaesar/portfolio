import { useState } from "react"
import { ArmyPopup } from "./armyPopup/armyPopup"
import { BuildingsPopup } from "./buildingsPopup/buildingsPopup"
import { CarrisonPopup } from "./carrisonPopup/carrisonPopup"

export const PopupBar = () => {
    const [isOpen, setIsOpen] = useState({
        army:false,
        buildings:false,
        carrison:false,
        backpack:false,
    })
    
    const handleIsOpen = (type) => {
        setIsOpen((prev) => ({
            ...prev,
            [type]: true,
            buildings: type === "buildings" ? true : false, 
            army: type === "army" ? true : false,
            carrison: type === "carrison" ? true : false,
            backpack: type === "backpack" ? true : false,
        }))    
    }
          
        
    return(<div className="popupBar">
    <ul>
        {isOpen.buildings ? (
            <div className="left-button-container button-container-open" onClick={() => handleIsOpen("buildings")}>
                <p>buildings</p>
            </div>
        ):(
            <div className="left-button-container" onClick={() => handleIsOpen("buildings")}>
                <p>buildings</p>
            </div>
        )}
        {isOpen.backpack ? (
            <div className="left-button-container button-container-open" onClick={() => handleIsOpen("backpack")}>
                <p>backpack</p>
            </div>
        ):(
            <div className="left-button-container" onClick={() => handleIsOpen("backpack")}>
                <p>backpack</p>
            </div>
        )}
    </ul>
    {isOpen.army && <ArmyPopup />}
    {isOpen.carrison && <CarrisonPopup />}
    {isOpen.buildings && <BuildingsPopup />}
    <ul>
        {isOpen.army ? (
            <div className="right-button-container button-container-open" onClick={() => handleIsOpen("army")}>
                <p>army</p>
            </div>
        ):(
            <div className="right-button-container" onClick={() => handleIsOpen("army")}>
                <p>army</p>
            </div>
        )}
        {isOpen.carrison ? (
            <div className="right-button-container button-container-open" onClick={() => handleIsOpen("carrison")}>
                <p>carrison</p>
            </div>
        ):(
            <div className="right-button-container" onClick={() => handleIsOpen("carrison")}>
                <p>carrison</p>
            </div>
        )}
    </ul>
    </div>)
}