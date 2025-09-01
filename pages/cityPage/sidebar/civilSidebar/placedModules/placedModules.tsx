import { useCityContext } from "../../../cityComponents/cityContext/cityContext"
import { v4 as uuid } from "uuid"

export const PlacedModules = ({item}) => {
    const { contextValue } = useCityContext()
    const placeModule = (items) => {
        if (item.modules.length == 0) {
            const id = uuid()
            contextValue.setModule((prev) => ([
                ...prev,
                {id: id,
                relatedId :item.id,
                ...items,
                x: item.x,
                y: item.y,
            }]));
            if (item === item.id) {
                item.modules.push(id)
            }
        }
    }

    return(<>
    {item.level[item.currentLevel].numberOfModules  && <div className="module-container">
        {item.moduleType.map((items, index) => {
            return(
            <div onClick={() => placeModule(items)} className="module-button" key={index}>
                <h4>{items.name}</h4>
                <p>production</p>
                <p>{items.production}</p>
            </div>
        )
        })}
        </div>}
    </>)
} 