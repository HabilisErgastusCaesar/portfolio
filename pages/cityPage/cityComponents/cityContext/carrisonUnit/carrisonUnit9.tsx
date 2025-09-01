import { meleeUnit } from "./unitTypes/meleeUnitType"
import { missileUnit } from "./unitTypes/missileUnitType"
import { cavalryUnit } from "./unitTypes/cavalryUnitTypes"
import { vehicleUnit } from "./unitTypes/vehicleUnitTypes"
import { artilleryUnit } from "./unitTypes/artillaryUnitTypes"
import { arialUnit } from "./unitTypes/arialUnitTypes"

export const carUnit9 = {
    name:"carrison 9",
    itemID:"car9",
    type: "button",
    checked: false,
    unitSize:0,
    totalUnits:200,
    melee:meleeUnit.car.car9,
    meleeType:[meleeUnit.bat, meleeUnit.speer, meleeUnit["short sword"]],
    meleeTypeTotal:[meleeUnit.batPushToCar, meleeUnit.speerPushToCar, meleeUnit["short swordPushToCar"]],
    missile:missileUnit.car.car9,
    missileType:[missileUnit["speer thrower"],missileUnit.slinger,missileUnit.bow],
    missileTypeTotal:[missileUnit["speer throwerPushToCar"],missileUnit.slingerPushToCar,missileUnit.bowPushToCar],
    cavalry:cavalryUnit.car.car9,
    cavalryType:[],
    cavalryTypeTotal:[],
    vehicle:vehicleUnit.car.car9,
    vehicleType:[],
    vehicleTypeTotal:[],
    artillery:artilleryUnit.car.car9,
    artilleryType:[],
    artilleryTypeTotal:[],
    arial:arialUnit.car.car9,
    arialType:[],
    arialTypeTotal:[],
}