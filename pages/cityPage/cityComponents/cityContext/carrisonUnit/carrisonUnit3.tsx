import { meleeUnit } from "./unitTypes/meleeUnitType"
import { missileUnit } from "./unitTypes/missileUnitType"
import { cavalryUnit } from "./unitTypes/cavalryUnitTypes"
import { vehicleUnit } from "./unitTypes/vehicleUnitTypes"
import { artilleryUnit } from "./unitTypes/artillaryUnitTypes"
import { arialUnit } from "./unitTypes/arialUnitTypes"

export const carUnit3 = {
    name:"carrison 3",
    itemID:"car3",
    type: "button",
    checked: false,
    unitSize:0,
    totalUnits:200,
    melee:meleeUnit.car.car3,
    meleeType:[meleeUnit.bat, meleeUnit.speer, meleeUnit["short sword"]],
    meleeTypeTotal:[meleeUnit.batPushToCar["car3"], meleeUnit.speerPushToCar["car3"], meleeUnit["short swordPushToCar"]["car3"]],
    missile:missileUnit.car.car3,
    missileType:[missileUnit["speer thrower"],missileUnit.slinger,missileUnit.bow],
    missileTypeTotal:[missileUnit["speer throwerPushToCar"],missileUnit.slingerPushToCar,missileUnit.bowPushToCar],
    cavalry:cavalryUnit.car.car3,
    cavalryType:[],
    cavalryTypeTotal:[],
    vehicle:vehicleUnit.car.car3,
    vehicleType:[],
    vehicleTypeTotal:[],
    artillery:artilleryUnit.car.car3,
    artilleryType:[],
    artilleryTypeTotal:[],
    arial:arialUnit.car.car3,
    arialType:[],
    arialTypeTotal:[],
}