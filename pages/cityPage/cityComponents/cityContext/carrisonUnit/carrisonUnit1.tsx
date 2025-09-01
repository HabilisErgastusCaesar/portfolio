import { meleeUnit } from "./unitTypes/meleeUnitType"
import { missileUnit } from "./unitTypes/missileUnitType"
import { cavalryUnit } from "./unitTypes/cavalryUnitTypes"
import { vehicleUnit } from "./unitTypes/vehicleUnitTypes"
import { artilleryUnit } from "./unitTypes/artillaryUnitTypes"
import { arialUnit } from "./unitTypes/arialUnitTypes"

export const carUnit1 = {
    name:"carrison 1",
    itemID:"car1",
    type: "button",
    checked: false,
    unitSize:0,
    totalUnits:200,
    melee:meleeUnit.car.car1,
    meleeType:[meleeUnit.bat, meleeUnit.speer, meleeUnit["short sword"]],
    meleeTypeTotal:[meleeUnit.batPushToCar["car1"], meleeUnit.speerPushToCar["car1"], meleeUnit["short swordPushToCar"]["car1"]],
    missile:missileUnit.car.car1,
    missileType:[missileUnit["speer thrower"],missileUnit.slinger,missileUnit.bow],
    missileTypeTotal:[missileUnit["speer throwerPushToCar"],missileUnit.slingerPushToCar,missileUnit.bowPushToCar],
    cavalry:cavalryUnit.car.car1,
    cavalryType:[],
    cavalryTypeTotal:[],
    vehicle:vehicleUnit.car.car1,
    vehicleType:[],
    vehicleTypeTotal:[],
    artillery:artilleryUnit.car.car1,
    artilleryType:[],
    artilleryTypeTotal:[],
    arial:arialUnit.car.car1,
    arialType:[],
    arialTypeTotal:[],
}