import { carDetail } from "./copyUnitTypes"
import { tribucheUnits } from "./artilleryUnits/tribucheUnits"
import { catapultUnits } from "./artilleryUnits/catapultUnits"
import { howitzerUnits } from "./artilleryUnits/howitzerUnits"

export const artilleryUnit = {
    name:["tribuche","catapult","howitzer"],
    car:{...carDetail},
    ...tribucheUnits,
    ...catapultUnits,
    ...howitzerUnits,
}