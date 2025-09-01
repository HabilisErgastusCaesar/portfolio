import { ArmyDetailsItem } from "./armyDetailsItem"

import { useState } from "react"

export const ArmyDetails = ({item ,unit}) => {
    const [isOpen, setIsOpen] = useState({
        melee:true,
        missile:false,
        cavalry:false, 
        vehicle:false, 
        artillery:false, 
        arial:false,
    })
    const handleOpen = (type) => {
        setIsOpen((prev) => ({
            ...prev,
            [type] : true,
            melee: type === "melee" ? true: false,
            missile: type === "missile" ? true: false, 
            cavalry: type === "cavalry" ? true: false,
            vehicle: type === "vehicle" ? true: false, 
            artillery: type === "artillery" ? true: false,
            arial: type === "arial" ? true: false, 
        }))
    }
    return(<div className="army-detail-item">
        <div className="army-detail-container">
        {isOpen.melee ? (
        <div className="army-detail-Button army-detail-Button-open" onClick={() => handleOpen("melee")}>
            <h4>melee</h4>
        </div>
        ):(
        <div className="army-detail-Button" onClick={() => handleOpen("melee")}>
            <h4>melee</h4>
        </div>)}
        {isOpen.missile ? (
        <div className="army-detail-Button army-detail-Button-open" onClick={() => handleOpen("missile")}>
            <h4>missile</h4>
        </div>
        ):(
        <div className="army-detail-Button" onClick={() => handleOpen("missile")}>
            <h4>missile</h4>
        </div>)}
        {isOpen.cavalry ? (
        <div className="army-detail-Button army-detail-Button-open" onClick={() => handleOpen("cavalry")}>
            <h4>cavalry</h4>
        </div>):(
        <div className="army-detail-Button" onClick={() => handleOpen("cavalry")}>
        <h4>cavalry</h4>
        </div>)}
        {isOpen.vehicle ? (
        <div className="army-detail-Button army-detail-Button-open" onClick={() => handleOpen("vehicle")}>
            <h4>vehicle</h4>
        </div>):(
        <div className="army-detail-Button" onClick={() => handleOpen("vehicle")}>
            <h4>vehicle</h4>
        </div>)}
        {isOpen.artillery ? 
        (<div className="army-detail-Button army-detail-Button-open" onClick={() => handleOpen("artillery")}>
            <h4>artillery</h4>
        </div>):(
        <div className="army-detail-Button" onClick={() => handleOpen("artillery")}>
            <h4>artillery</h4>
        </div>)}
        {isOpen.arial ? 
        (<div className="army-detail-Button army-detail-Button-open" onClick={() => handleOpen("arial")}>
            <h4>arial</h4>
        </div>):(
        <div className="army-detail-Button" onClick={() => handleOpen("arial")}>
            <h4>arial</h4>
        </div>)}
        </div>
        {isOpen.melee && <ArmyDetailsItem  item={item} unit={[unit.melee]}/>}
        {isOpen.missile && <ArmyDetailsItem  item={item} unit={[unit.missile]}/>}
        {isOpen.cavalry && <ArmyDetailsItem  item={item} unit={[unit.cavalry]}/>}
        {isOpen.vehicle && <ArmyDetailsItem  item={item} unit={[unit.vehicle]}/>}
        {isOpen.artillery && <ArmyDetailsItem  item={item} unit={[unit.artillery]}/>}
        {isOpen.arial && <ArmyDetailsItem  item={item} unit={[unit.arial]}/>}
    </div>)
}