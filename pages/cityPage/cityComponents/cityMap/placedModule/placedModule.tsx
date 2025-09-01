import { useCityContext } from "../../cityContext/cityContext"

export const PlacedModules = ({mapRef}) => {
    const { contextValue } = useCityContext()
    const calculatePosition = (id) => {

        const result = contextValue.placedCivilBuildings.find((search) => search.id === id)
        const left = result.x
        const top = result.y
        return {left, top }
    }
    return(<>
    {contextValue.module && contextValue.module.map((item) => {
        return(<div key={item.id}
        style={{
            position: 'absolute',
            top: calculatePosition(item.relatedId).top,
            left: calculatePosition(item.relatedId).left,
            width:item.width,
            height:item.height,
            backgroundColor:"green",
        }}>
            <h4>{item.name}</h4>
        </div>)
    })}
    </>)
}