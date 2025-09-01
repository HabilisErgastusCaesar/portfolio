import { carDetail } from "./copyUnitTypes"
import { jeepUnits } from "./vehicleUnits/jeepUnits"
import { tankUnits } from "./vehicleUnits/tankUnits"
import { halftruckUnits } from "./vehicleUnits/halftruckUnits"

export const vehicleUnit = {
    name:["jeep","tank","halftruck"],
    car:{...carDetail},
    ...jeepUnits,
    ...tankUnits,
    ...halftruckUnits,
}