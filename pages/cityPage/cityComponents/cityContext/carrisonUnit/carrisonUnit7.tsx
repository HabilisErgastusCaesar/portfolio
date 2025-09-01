import { meleeUnit } from "./unitTypes/meleeUnitType"
import { missileUnit } from "./unitTypes/missileUnitType"
import { cavalryUnit } from "./unitTypes/cavalryUnitTypes"
import { vehicleUnit } from "./unitTypes/vehicleUnitTypes"
import { artilleryUnit } from "./unitTypes/artillaryUnitTypes"
import { arialUnit } from "./unitTypes/arialUnitTypes"

export const carUnit7 = {
    name:"carrison 7",
    itemID:"car7",
    type: "button",
    checked: false,
    unitSize:0,
    totalUnits:200,
    melee:meleeUnit.car.car7,
    meleeType:[meleeUnit.bat, meleeUnit.speer, meleeUnit["short sword"]],
    meleeTypeTotal:[meleeUnit.batPushToCar, meleeUnit.speerPushToCar, meleeUnit["short swordPushToCar"]],
    missile:missileUnit.car.car7,
    missileType:[missileUnit["speer thrower"],missileUnit.slinger,missileUnit.bow],
    missileTypeTotal:[missileUnit["speer throwerPushToCar"],missileUnit.slingerPushToCar,missileUnit.bowPushToCar],
    cavalry:cavalryUnit.car.car7,
    cavalryType:[],
    cavalryTypeTotal:[],
    vehicle:vehicleUnit.car.car7,
    vehicleType:[],
    vehicleTypeTotal:[],
    artillery:artilleryUnit.car.car7,
    artilleryType:[],
    artilleryTypeTotal:[],
    arial:arialUnit.car.car7,
    arialType:[],
    arialTypeTotal:[],
}