import { meleeUnit } from "./unitTypes/meleeUnitType"
import { missileUnit } from "./unitTypes/missileUnitType"
import { cavalryUnit } from "./unitTypes/cavalryUnitTypes"
import { vehicleUnit } from "./unitTypes/vehicleUnitTypes"
import { artilleryUnit } from "./unitTypes/artillaryUnitTypes"
import { arialUnit } from "./unitTypes/arialUnitTypes"

export const carUnit4 = {
    name:"carrison 4",
    itemID:"car4",
    type: "button",
    checked: false,
    unitSize:0,
    totalUnits:200,
    melee:meleeUnit.car.car4,
    meleeType:[meleeUnit.bat, meleeUnit.speer, meleeUnit["short sword"]],
    meleeTypeTotal:[meleeUnit.batPushToCar["car4"], meleeUnit.speerPushToCar["car4"], meleeUnit["short swordPushToCar"]["car4"]],
    missile:missileUnit.car.car4,
    missileType:[missileUnit["speer thrower"],missileUnit.slinger,missileUnit.bow],
    missileTypeTotal:[missileUnit["speer throwerPushToCar"],missileUnit.slingerPushToCar,missileUnit.bowPushToCar],
    cavalry:cavalryUnit.car.car4,
    cavalryType:[],
    cavalryTypeTotal:[],
    vehicle:vehicleUnit.car.car4,
    vehicleType:[],
    vehicleTypeTotal:[],
    artillery:artilleryUnit.car.car4,
    artilleryType:[],
    artilleryTypeTotal:[],
    arial:arialUnit.car.car4,
    arialType:[],
    arialTypeTotal:[],
}