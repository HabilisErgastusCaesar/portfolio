import { carDetail } from "./copyUnitTypes"
import { droneUnit } from "./arialUnits/droneUnits"
import { helicopterUnits } from "./arialUnits/helicopterUnits"

export const arialUnit = {
    name:["drone","helicopter"],
    car:{...carDetail},
    ...droneUnit,
    ...helicopterUnits,
}