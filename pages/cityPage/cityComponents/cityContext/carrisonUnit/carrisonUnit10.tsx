import { meleeUnit } from "./unitTypes/meleeUnitType"
import { missileUnit } from "./unitTypes/missileUnitType"
import { cavalryUnit } from "./unitTypes/cavalryUnitTypes"
import { vehicleUnit } from "./unitTypes/vehicleUnitTypes"
import { artilleryUnit } from "./unitTypes/artillaryUnitTypes"
import { arialUnit } from "./unitTypes/arialUnitTypes"

export const carUnit10 = {
    name:"carrison 10",
    itemID:"car10",
    type: "button",
    checked: false,
    unitSize:0,
    totalUnits:200,
    melee:meleeUnit.car.car10,
    meleeType:[meleeUnit.bat, meleeUnit.speer, meleeUnit["short sword"]],
    meleeTypeTotal:[meleeUnit.batPushToCar, meleeUnit.speerPushToCar, meleeUnit["short swordPushToCar"]],
    missile:missileUnit.car.car10,
    missileType:[missileUnit["speer thrower"],missileUnit.slinger,missileUnit.bow],
    missileTypeTotal:[missileUnit["speer throwerPushToCar"],missileUnit.slingerPushToCar,missileUnit.bowPushToCar],
    cavalry:cavalryUnit.car.car10,
    cavalryType:[],
    cavalryTypeTotal:[],
    vehicle:vehicleUnit.car.car10,
    vehicleType:[],
    vehicleTypeTotal:[],
    artillery:artilleryUnit.car.car10,
    artilleryType:[],
    artilleryTypeTotal:[],
    arial:arialUnit.car.car10,
    arialType:[],
    arialTypeTotal:[],
}