import { useState } from "react"

export const ArmyDetailsItem = ({item, unit}) => {
    const updateItemWidth = (element, damageValue) => {
        element.style.width = damageValue.length * 10 + "px"; // Adjust width based on damage length
    }
    return(<>
    {unit.map((car, idx) => 
        <div key={idx}>
            <div className="army-detail-header">
            <h4>total units in use</h4>
            <h4 className="number">{item.unitSize}</h4>
            <h4>unit size</h4>
            <h4 className="number">{item.totalUnits}</h4>
        </div>
        <div>
            <div className="army-detail-names">
            <p>damage</p>
            <p>defense</p>
            <p>range</p>
            <p>ammunition</p>
            <p>acceleration</p>
            <p>movement speed</p>
            <p>braking</p>
            <p>flank attack</p>
            <p>flank defense</p>
            <p>in use</p>
            <p>total</p>
            </div>
        {car.name.map((select, index) => {
            const[unitValue, setUnitValue] = useState(unit[idx][select].inUse)
            const maxNumber = () => {
                const maxTotal = unit[idx][select].total - unit[idx][select].inUse
                return item.totalUnits
            }
            const updateUnitNumber = (e) => {
                if (!isNaN(e.target.value)) {
                    setUnitValue(e.target.value)
                }
            }
            return(<div className="army-detail-container" key={index}>
            <h5>{select}</h5>
            <div className="army-detail-item" ref={() => (element => updateItemWidth(element, unit[idx][select].damage))}>
            <p>{unit[idx][select].damage}</p>
            </div>
            <div className="army-detail-item">
            <p>{unit[idx][select].defense}</p>
            </div>
            <div className="army-detail-item">
            <p>{unit[idx][select].range}</p>
            </div>
            <div className="army-detail-item">
            <p>{unit[idx][select].ammunition}</p>
            </div>
            <div className="army-detail-item">
            <p>{unit[idx][select].acceleration}</p>
            </div>
            <div className="army-detail-item">
            <p>{unit[idx][select].movementSpeed}</p>
            </div>
            <div className="army-detail-item">
            <p>{unit[idx][select].braking}</p>
            </div>
            <div className="army-detail-item">
            <p>{unit[idx][select].flankAttack}</p>
            </div>
            <div className="army-detail-item">
            <p>{unit[idx][select].flankDefence}</p>
            </div>
            <div className="army-detail-item">
            <input type="text" min="0" max={maxNumber()} value={unitValue} onChange={((e) => updateUnitNumber(e))}/>
            <input type="range" min="0" max={maxNumber()} value={unitValue} onChange={((e) => updateUnitNumber(e))}/>
            </div>
            <div className="army-detail-item">
            <p>{unit[idx][select].total}</p>
        </div>
        </div>)})}
        </div>
        </div>
    )}
    </>)
}