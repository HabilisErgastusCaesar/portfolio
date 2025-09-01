import { useCityContext } from "../../../cityContext/cityContext"

export const BuildingsRoadPopup = ({road}) => {
    const {contextValue} = useCityContext()
    const setRoadtoObject = (item) => {
        if (contextValue.roadTracking) {
            contextValue.setRoadTracking(null)
        } else {
            contextValue.setRoadTracking(item)
        }
    }
    return(road.map((item, index)=> {
        return(<div onClick={() => setRoadtoObject(item)} key={index}>{item.name}</div>)
}))}