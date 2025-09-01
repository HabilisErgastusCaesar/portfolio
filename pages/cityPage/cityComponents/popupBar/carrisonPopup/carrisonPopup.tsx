import { useCityContext } from "../../cityContext/cityContext"

export const CarrisonPopup = () => {
    const { contextValue } = useCityContext();
    const armyHandling = (e, type) => {
        if (contextValue[e.target.dataset.itemId].type === "button") {
            if (contextValue.trackingObject == null) {
                e.target.style.background = "green"
                contextValue.setTrackingObject({
                    type:"carrison",
                    itemID:e.target.dataset.itemId,
                    width:`${(0.6 * 37.795275591) * 2}px`,
                    height:`${(0.6 * 37.795275591) * 2}px`,
                })
            } else {
                e.target.style.background = "red"
                contextValue.setTrackingObject(null)
            }
        } else if (contextValue[e.target.dataset.itemId].type === "checkbox") {
            contextValue[type]((prev) => ({
                ...prev,
                checked:e.target.checked
            }));
        }
    }
    return( <div className="carrisonLayout">
        <h3>carrison</h3>
        <ul className="carrisonContainer">
            <input
            style={{
                background:"red"
            }}
            type={contextValue.car1.type} data-item-id="car1" onClick={(e) => armyHandling(e, "setCar1")} />
            <input
            style={{
                background:"red"
            }}
            type={contextValue.car2.type} data-item-id="car2" onClick={(e) => armyHandling(e, "setCar2")} />
            <input
            style={{
                background:"red"
            }}
            type={contextValue.car3.type} data-item-id="car3" onClick={(e) => armyHandling(e, "setCar3")} />
            <input
            style={{
                background:"red"
            }}
            type={contextValue.car4.type} data-item-id="car4" onClick={(e) => armyHandling(e, "setCar4")} />
            <input
            style={{
                background:"red"
            }}
            type={contextValue.car5.type} data-item-id="car5" onClick={(e) => armyHandling(e, "setCar5")} />
            <input
            style={{
                background:"red"
            }}
            type={contextValue.car6.type} data-item-id="car6" onClick={(e) => armyHandling(e, "setCar6")} />
            <input
            style={{
                background:"red"
            }}
            type={contextValue.car7.type} data-item-id="car7" onClick={(e) => armyHandling(e, "setCar7")} />
            <input
            style={{
                background:"red"
            }}
            type={contextValue.car8.type} data-item-id="car8" onClick={(e) => armyHandling(e, "setCar8")} />
            <input
            style={{
                background:"red"
            }}
            type={contextValue.car9.type} data-item-id="car9" onClick={(e) => armyHandling(e, "setCar9")} />
            <input
            style={{
                background:"red"
            }}
            type={contextValue.car10.type} data-item-id="car10" onClick={(e) => armyHandling(e, "setCar10")} />
        </ul>
        </div>)
}