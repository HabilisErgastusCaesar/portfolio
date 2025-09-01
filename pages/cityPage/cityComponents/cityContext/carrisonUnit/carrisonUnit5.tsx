import { meleeUnit } from "./unitTypes/meleeUnitType"
import { missileUnit } from "./unitTypes/missileUnitType"
import { cavalryUnit } from "./unitTypes/cavalryUnitTypes"
import { vehicleUnit } from "./unitTypes/vehicleUnitTypes"
import { artilleryUnit } from "./unitTypes/artillaryUnitTypes"
import { arialUnit } from "./unitTypes/arialUnitTypes"

export const carUnit5 = {
    name:"carrison 5",
    itemID:"car5",
    type: "button",
    checked: false,
    unitSize:0,
    totalUnits:200,
    melee:meleeUnit.car.car5,
    meleeType:[meleeUnit.bat, meleeUnit.speer, meleeUnit["short sword"]],
    meleeTypeTotal:[meleeUnit.batPushToCar["car5"], meleeUnit.speerPushToCar["car5"], meleeUnit["short swordPushToCar"]["car5"]],
    missile:missileUnit.car.car5,
    missileType:[missileUnit["speer thrower"],missileUnit.slinger,missileUnit.bow],
    missileTypeTotal:[missileUnit["speer throwerPushToCar"],missileUnit.slingerPushToCar,missileUnit.bowPushToCar],
    cavalry:cavalryUnit.car.car5,
    cavalryType:[],
    cavalryTypeTotal:[],
    vehicle:vehicleUnit.car.car5,
    vehicleType:[],
    vehicleTypeTotal:[],
    artillery:artilleryUnit.car.car5,
    artilleryType:[],
    artilleryTypeTotal:[],
    arial:arialUnit.car.car5,
    arialType:[],
    arialTypeTotal:[],
}