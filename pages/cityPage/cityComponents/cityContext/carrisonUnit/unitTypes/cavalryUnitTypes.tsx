import { carDetail } from "./copyUnitTypes"
import { shortSwordCavalryUnits } from "./cavalryUnits/shortSwordCavalryUnits"
import { slingerCavalry } from "./cavalryUnits/slingerCavalry"
import { bowCavalry } from "./cavalryUnits/bowCavalry"

export const cavalryUnit = {
    name:["short sword","slinger","bow"],
    car:{...carDetail},
    ...shortSwordCavalryUnits,
    ...slingerCavalry,
    ...bowCavalry,
}