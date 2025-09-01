import { meleeUnit } from "./unitTypes/meleeUnitType"
import { missileUnit } from "./unitTypes/missileUnitType"
import { cavalryUnit } from "./unitTypes/cavalryUnitTypes"
import { vehicleUnit } from "./unitTypes/vehicleUnitTypes"
import { artilleryUnit } from "./unitTypes/artillaryUnitTypes"
import { arialUnit } from "./unitTypes/arialUnitTypes"

export const carUnit8 = {
    name:"carrison 8",
    itemID:"car8",
    type: "button",
    checked: false,
    unitSize:0,
    totalUnits:200,
    melee:meleeUnit.car.car8,
    meleeType:[meleeUnit.bat, meleeUnit.speer, meleeUnit["short sword"]],
    meleeTypeTotal:[meleeUnit.batPushToCar, meleeUnit.speerPushToCar, meleeUnit["short swordPushToCar"]],
    missile:missileUnit.car.car8,
    missileType:[missileUnit["speer thrower"],missileUnit.slinger,missileUnit.bow],
    missileTypeTotal:[missileUnit["speer throwerPushToCar"],missileUnit.slingerPushToCar,missileUnit.bowPushToCar],
    cavalry:cavalryUnit.car.car8,
    cavalryType:[],
    cavalryTypeTotal:[],
    vehicle:vehicleUnit.car.car8,
    vehicleType:[],
    vehicleTypeTotal:[],
    artillery:artilleryUnit.car.car8,
    artilleryType:[],
    artilleryTypeTotal:[],
    arial:arialUnit.car.car8,
    arialType:[],
    arialTypeTotal:[],
}