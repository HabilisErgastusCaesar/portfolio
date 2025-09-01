import { useCityContext } from "../../cityComponents/cityContext/cityContext";
import { CivilMoving } from "./civilMoving/civilMoving";
import { CivilLevel } from "./civilLevel/civilLevel";
import { CivilNeedProduction } from "./civilNeedProduction/civilNeedProduction";
import { PlacedModules } from "./placedModules/placedModules";

import { useState, useRef } from "react";
import { clearInterval } from "timers";

export const CivilSidebar = ({civil}) => {
    const {contextValue} = useCityContext()
    const [isMoving, setIsMoving] = useState(false)

    const intervalId = useRef(null);

    const handlePopup = (type, state, id) => {
        const adjustBuildingSize = (direction, value) => {
            contextValue.setPlacedCivilBuildings(prev =>
                prev.map((buildings) => 
                buildings.id === id ?
                { ...buildings, [direction]: value}
                : buildings
                )
            )
        }
    
        const economic = () => {
            let check = []
            let payment = []
            for (const [key, value] of Object.entries(state.level[state.currentLevel].buildNeeds)) {
                if (contextValue.resources[key][0] >= value) {
                    check.push(true)
                    payment.push({key, value})
                } else {check.push(false)}
            }
            if (check.includes(false)) {
                return false
            } else {
                paying(payment)
                return true
            }
        }
            
        const paying = (payment) => {
            payment.map((item) => {
                const newValue = contextValue.resources[item.key][0] - item.value;
                contextValue.setResources((prev) => ({
                  ...prev,
                  [item.key]: [newValue, true],
                }));
            });
        }
            
        const handleLvl = (switchLevel) => {
            contextValue.setPlacedCivilBuildings(prev =>
                prev.map((buildings) => 
                buildings.id === id ?
                { ...buildings, currentLevel: switchLevel}
                : buildings
                )
            )
        }

        const moving = (direction) => {
            const map = document.querySelector('.borderOffMap') as HTMLElement;
            const rect = map.getBoundingClientRect()
            if (state > 0) {
                setIsMoving(true);
                contextValue.setPlacedCivilBuildings(prev => 
                    prev.map((buildings) =>
                        buildings.id === id ?
                        {...buildings, [direction]: Math.round(state / (0.6 * 37.795275591) ) * (0.6 * 37.795275591) - 0.5 * (0.6 * 37.795275591)}
                        : buildings
                    )
                )
            }
        }

        const upgradeBuilding = () => {
            const level = (setLevel) => {
                contextValue.setPlacedCivilBuildings(prev =>
                    prev.map((buildings) =>
                        buildings.id === state.id ?
                        {...buildings, 
                            name:id.name,
                            currentLevel: setLevel,
                            setHeadbuildingType:id}
                        : buildings))}
            if (state.level[state.currentLevel].headbuildingChangeType && state.setHeadbuildingType === id) {
                level(state.currentLevel + 1)
            } else {
                level(id.unlockLvl + 1)
            }
        }
    
        if (type === "lvl down" || type === "lvl up") {
            if (type === "lvl up") {
                if (state.level[state.currentLevel+1]) {
                    const result = economic()
                    if (result) {
                        if (state.level[state.currentLevel].width) {
                            adjustBuildingSize("width" , state.level[state.currentLevel].width)
                            if (state.level[state.currentLevel].height) {
                                adjustBuildingSize("height" , state.level[state.currentLevel].height)
                            }}
                            let timer = 0;
                            handleLvl(state.currentLevel + 1); 
                        }
                }
            } else if (type === "lvl down") {
                if (state.currentLevel > 0) {
                    handleLvl(state.currentLevel - 1)
                }
            }
        } else if (type === "set building type") {
            upgradeBuilding();
        } else if (type === "move up" || type === "move left" || type === "move right" || type === "move down") {
            if (type === "move left" || type === "move right") {
                moving("x")
            } else if (type === "move up" || type === "move down") {
                moving("y")
            }
        } 
    };
    
    const handleMouseUp = () => {
    
    }
    return(<>
    {civil && <div key={civil.id} className="civil-button-columns">
        <div className="civil-button-section">
        <CivilLevel item={civil} handlePopup={handlePopup}/>
        <CivilMoving item={civil} handle={{handlePopup, handleMouseUp}}/>
        </div>
        <CivilNeedProduction item={civil} />
        <PlacedModules item={civil} />
        </div>
    }</>)
}