import { useEffect, useState, useRef } from "react";

import { CityMiniMap } from "./cityMiniMap/cityMapMini";
import { PlacedCivilBuildings } from "./placedCivilBuildings/placedCivilBuilding";
import { PlacedSanitationBuildings } from "./placedSanitationBuildings/placedSanitationBuildings";
import { ObjectTracking } from "./objectTracking/objectTracking";
import { PlacedModules } from "./placedModule/placedModule";
import { ObjectRoadTracking } from "./objectRoadTracking/objectRoadTracking";
import { PlacedRoad } from "./placedRoad/placedRoad";
import { useCityContext } from "../cityContext/cityContext";
import { PlacedCarrisonArmy } from "./placedCarrisonArmy/placedCarrisonArmy";

export const CityMap = () => {
    const {contextValue} = useCityContext()
    const [mapCoordinates, setMapCoordinates] = useState({ x: 0, y: 0 });
    const mapRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const map = document.querySelector('.borderOffMap') as HTMLElement;
        let isDown = false;
        let startX, startY, scrollLeft, scrollTop;
    
        const handleMouseDown = (e: MouseEvent) => {
            isDown = true;
            map.classList.add('active');
            startX = e.pageX - map.offsetLeft;
            startY = e.pageY - map.offsetTop;
            scrollLeft = map.scrollLeft;
            scrollTop = map.scrollTop;
        };
    
        const handleMouseLeave = () => {
            isDown = false;
            map.classList.remove('active');
        };
    
        const handleMouseUp = () => {
            isDown = false;
            map.classList.remove('active');
        };
    
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - map.offsetLeft;
            const y = e.pageY - map.offsetTop;
            const walkX = (x - startX) * 3;
            const walkY = (y - startY) * 3;
            map.scrollLeft = scrollLeft - walkX;
            map.scrollTop = scrollTop - walkY;
            setMapCoordinates({ x: map.scrollLeft, y: map.scrollTop });
        };
        if (contextValue.roadTracking) {
            map.removeEventListener('mousedown', handleMouseDown);
            map.removeEventListener('mouseleave', handleMouseLeave);
            map.removeEventListener('mouseup', handleMouseUp);
            map.removeEventListener('mousemove', handleMouseMove);
        } else {
            map.addEventListener('mousedown', handleMouseDown);
            map.addEventListener('mouseleave', handleMouseLeave);
            map.addEventListener('mouseup', handleMouseUp);
            map.addEventListener('mousemove', handleMouseMove);
        }
    
        return () => {
            map.removeEventListener('mousedown', handleMouseDown);
            map.removeEventListener('mouseleave', handleMouseLeave);
            map.removeEventListener('mouseup', handleMouseUp);
            map.removeEventListener('mousemove', handleMouseMove);
        };
    }, [contextValue.roadTracking]);

    

    return(
    <>
    <div className='borderOffMap' ref={mapRef}>
        <div className="borderOffMapTwo">
            <div className="mainMapGridlayout">
                <PlacedCarrisonArmy mapRef={mapRef}/>
                <PlacedCivilBuildings />
                <PlacedSanitationBuildings />
                <PlacedModules mapRef={mapRef}/>
                <PlacedRoad mapRef={mapRef} />
                <ObjectTracking mapRef={mapRef}/>
                <ObjectRoadTracking mapRef={mapRef}/>
            </div>
        </div>
    </div>
    <CityMiniMap mapCoordinates={mapCoordinates} setMapCoordinates={setMapCoordinates} />
    </>
    )
}