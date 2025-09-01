import { useState } from "react"

import { CarrisonHandling } from "./component/carrisonHandling"
import { ArmyCarrisonItem } from "./component/armyCarrisonItem"
import { ArmyDetails } from "./component/armyDetails"
import { useCityContext } from "../../cityContext/cityContext"

export const ArmyPopup = () => {
    const { contextValue } = useCityContext();
    
    const [isOpen, setIsOpen] = useState({
        state:true,
        itemID:NaN
    })

    
    const item = ([
        {name:"car1", car:[contextValue.car1]},
        {name:"car2", car:[contextValue.car2]},
        {name:"car3", car:[contextValue.car3]},
        {name:"car4", car:[contextValue.car4]},
        {name:"car5", car:[contextValue.car5]},
        {name:"car6", car:[contextValue.car6]},
        {name:"car7", car:[contextValue.car7]},
        {name:"car8", car:[contextValue.car8]},
        {name:"car9", car:[contextValue.car9]},
        {name:"car10",car:[contextValue.car10]},
    ])

    const handleInfo = (e) => {
        const state = isOpen.state
        const itemID = e.target.getAttribute('itemID')
        setIsOpen((prev) => ({
            ...prev,
            state:!state,
            itemID:itemID,
        }))
    }
    
    const melee = contextValue.melee;
    const missile = contextValue.missile;
    const cavalry = contextValue.cavalry;
    const vehicle = contextValue.vehicle;
    const artillery = contextValue.artillery;
    const arial = contextValue.arial;
    
    return(<div className="armyLayout">
        {isOpen.state ? (
        <div className="armyCarrison-container">
            {item.map((items, index) => 
                <ArmyCarrisonItem key={index} state={items.car[0]} handleInfo={handleInfo}/>
            )}
        </div>
        ):(
            item.find((element) => element.name === `${isOpen.itemID}`).car.map((filteredItem, index) => (
                <div key={index} className="army-detail-view">
                <div>
                    <CarrisonHandling item={filteredItem}/>
                </div>
                <ArmyDetails item={filteredItem} unit={{melee, missile, cavalry, vehicle, artillery, arial}}/>
                </div>
            ))
        )}
        {isOpen.state ? (
            <h3>to see more details click on the item</h3>
        ):(
            <h3 onClick={(e) => handleInfo(e)}>to go back click here</h3>
        )}
    </div>)
}