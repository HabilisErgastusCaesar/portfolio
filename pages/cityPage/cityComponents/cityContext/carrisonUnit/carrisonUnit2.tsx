import { meleeUnit } from "./unitTypes/meleeUnitType"
import { missileUnit } from "./unitTypes/missileUnitType"
import { cavalryUnit } from "./unitTypes/cavalryUnitTypes"
import { vehicleUnit } from "./unitTypes/vehicleUnitTypes"
import { artilleryUnit } from "./unitTypes/artillaryUnitTypes"
import { arialUnit } from "./unitTypes/arialUnitTypes"

export const carUnit2 = {
    name:"carrison 2",
    itemID:"car2",
    type: "button",
    checked: false,
    unitSize:0,
    totalUnits:200,
    melee:meleeUnit.car.car2,
    meleeType:[meleeUnit.bat, meleeUnit.speer, meleeUnit["short sword"]],
    meleeTypeTotal:[meleeUnit.batPushToCar["car2"], meleeUnit.speerPushToCar["car2"], meleeUnit["short swordPushToCar"]["car2"]],
    missile:missileUnit.car.car2,
    missileType:[missileUnit["speer thrower"],missileUnit.slinger,missileUnit.bow],
    missileTypeTotal:[missileUnit["speer throwerPushToCar"],missileUnit.slingerPushToCar,missileUnit.bowPushToCar],
    cavalry:cavalryUnit.car.car2,
    cavalryType:[],
    cavalryTypeTotal:[],
    vehicle:vehicleUnit.car.car2,
    vehicleType:[],
    vehicleTypeTotal:[],
    artillery:artilleryUnit.car.car2,
    artilleryType:[],
    artilleryTypeTotal:[],
    arial:arialUnit.car.car2,
    arialType:[],
    arialTypeTotal:[],
}