import { carDetail } from "./copyUnitTypes"
import { batUnit } from "./meleeUnits/batUnit"
import { speerUnit } from "./meleeUnits/speerUnit"
import { shortSword } from "./meleeUnits/shortSwordUnit"

export const meleeUnit = {
    name:["bat","speer","short sword"],
    car:{...carDetail},
    ...batUnit,
    ...speerUnit,
    ...shortSword,
}