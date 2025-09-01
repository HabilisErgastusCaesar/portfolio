import { meleeUnit } from "./unitTypes/meleeUnitType"
import { missileUnit } from "./unitTypes/missileUnitType"
import { cavalryUnit } from "./unitTypes/cavalryUnitTypes"
import { vehicleUnit } from "./unitTypes/vehicleUnitTypes"
import { artilleryUnit } from "./unitTypes/artillaryUnitTypes"
import { arialUnit } from "./unitTypes/arialUnitTypes"

export const carUnit6 = {
    name:"carrison 6",
    itemID:"car6",
    type: "button",
    checked: false,
    unitSize:0,
    totalUnits:200,
    melee:meleeUnit.car.car6,
    meleeType:[meleeUnit.bat, meleeUnit.speer, meleeUnit["short sword"]],
    meleeTypeTotal:[meleeUnit.batPushToCar, meleeUnit.speerPushToCar, meleeUnit["short swordPushToCar"]],
    missile:missileUnit.car.car6,
    missileType:[missileUnit["speer thrower"],missileUnit.slinger,missileUnit.bow],
    missileTypeTotal:[missileUnit["speer throwerPushToCar"],missileUnit.slingerPushToCar,missileUnit.bowPushToCar],
    cavalry:cavalryUnit.car.car6,
    cavalryType:[],
    cavalryTypeTotal:[],
    vehicle:vehicleUnit.car.car6,
    vehicleType:[],
    vehicleTypeTotal:[],
    artillery:artilleryUnit.car.car6,
    artilleryType:[],
    artilleryTypeTotal:[],
    arial:arialUnit.car.car6,
    arialType:[],
    arialTypeTotal:[],
}