import React, { createContext, useContext, useMemo, useState } from 'react';

import { headbuilding } from './civilBuildings/headbuilding';

import { farmHouse } from './civilBuildings/farmHouse';
import { markt } from './economicBuilding/markt';

import { carUnit1 } from './carrisonUnit/carrisonUnit1';
import { carUnit2 } from './carrisonUnit/carrisonUnit2';
import { carUnit3 } from './carrisonUnit/carrisonUnit3';
import { carUnit4 } from './carrisonUnit/carrisonUnit4';
import { carUnit5 } from './carrisonUnit/carrisonUnit5';
import { carUnit6 } from './carrisonUnit/carrisonUnit6';
import { carUnit7 } from './carrisonUnit/carrisonUnit7';
import { carUnit8 } from './carrisonUnit/carrisonUnit8';
import { carUnit9 } from './carrisonUnit/carrisonUnit9';
import { carUnit10 } from './carrisonUnit/carrisonUnit10';

import { meleeUnit } from './carrisonUnit/unitTypes/meleeUnitType';
import { missileUnit } from './carrisonUnit/unitTypes/missileUnitType';
import { cavalryUnit } from './carrisonUnit/unitTypes/cavalryUnitTypes';
import { vehicleUnit } from './carrisonUnit/unitTypes/vehicleUnitTypes';
import { artilleryUnit } from './carrisonUnit/unitTypes/artillaryUnitTypes';
import { arialUnit } from './carrisonUnit/unitTypes/arialUnitTypes';

const CityContext = createContext<{ contextValue: any } | undefined>(undefined);

export const CityProvider: React.FC = ({ children }) => {
    const [melee, setMelee] = useState(meleeUnit)
    const [missile, setMissile] = useState(missileUnit)
    const [cavalry, setCavalry] = useState(cavalryUnit)
    const [vehicle, setVehicle] = useState(vehicleUnit)
    const [artillery, setArtillery] = useState(artilleryUnit)
    const [arial, setArial] = useState(arialUnit)
    
    const [car1, setCar1] = useState(carUnit1)
    const [car2, setCar2] = useState(carUnit2)
    const [car3, setCar3] = useState(carUnit3)
    const [car4, setCar4] = useState(carUnit4)
    const [car5, setCar5] = useState(carUnit5)
    const [car6, setCar6] = useState(carUnit6)
    const [car7, setCar7] = useState(carUnit7)
    const [car8, setCar8] = useState(carUnit8)
    const [car9, setCar9] = useState(carUnit9)
    const [car10, setCar10] = useState(carUnit10)
    
    const [placedCivilBuildings, setPlacedCivilBuildings] = useState([
        headbuilding
    ]);
    const [civilBuildings, setCivilBuildings] = useState([
        farmHouse
    ]);
    const [economicBuilding, setEconomicBuilding] = useState(
        markt
    )
    const [road, setRoad] = useState([
        {   
            id: "test 1",
            name:"sand",
            speed:1
        },
    ])
    const [roadTracking, setRoadTracking] = useState(null);
    const [placedRoad, setPlacedRoad] = useState<number[][]>([]);
    const [module, setModule] = useState([]);
    const [resources, setResources] = useState({
        bone: [1200,true], hide: [1200,true], iron: [0,false]
    });
    const [trackingObject, setTrackingObject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [placedObject, setPlacedObject] = useState(null);
    const [item, setItem] = useState([]);
    const [carrisonArmy, setCarrisonArmy] = useState([])
    const contextValue = useMemo(() => ({
        placedCivilBuildings, setPlacedCivilBuildings,
        resources, setResources,
        civilBuildings, setCivilBuildings,
        module, setModule,
        trackingObject, setTrackingObject,
        mousePosition, setMousePosition, placedObject, setPlacedObject, item, setItem, road, setRoad,
        roadTracking, setRoadTracking, placedRoad, setPlacedRoad, carrisonArmy, setCarrisonArmy,
        car1, setCar1, car2, setCar2, car3, setCar3, car4, setCar4, car5, setCar5, 
        car6, setCar6, car7, setCar7, car8, setCar8, car9, setCar9, car10, setCar10,
        melee, setMelee, missile, setMissile, cavalry, setCavalry, vehicle, setVehicle, 
        artillery, setArtillery, arial, setArial
    }), [
        placedCivilBuildings ,car1 ,car2 ,car3 ,car4 ,car5 ,car6 ,car7 ,car8 ,car9 ,car10 
        ,carrisonArmy ,placedRoad ,roadTracking ,road, resources, civilBuildings, trackingObject, mousePosition, placedObject, module, item,
        melee, missile, cavalry, vehicle, artillery, arial
    ]);
    return (
        <CityContext.Provider value={{ contextValue }}>
            {children}
        </CityContext.Provider>
    );
};

export const useCityContext = () => useContext(CityContext);