import { carDetail } from "./copyUnitTypes"
import { speerThrowUnit } from "./missileUnits/speerThrowerUnit"
import { slingerUnit } from "./missileUnits/slingerUnit"
import { bowUnit } from "./missileUnits/bowUnit"

export const missileUnit = {
    name:["speer thrower","slinger","bow"],
    car:{...carDetail},
    ...speerThrowUnit,
    ...slingerUnit,
    ...bowUnit,
}