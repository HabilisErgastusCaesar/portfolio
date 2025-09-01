import { carDetail } from "../copyUnitTypes"

export const helicopterUnits = {
    helicopter:{total:0,inUse:0,damage:1,defense:1,flankAttack:1,flankDefence:1,acceleration:0,movementSpeed:0,braking:0,ammunition:0,range:0,},
    helicopterPushToCar:{...carDetail},
}