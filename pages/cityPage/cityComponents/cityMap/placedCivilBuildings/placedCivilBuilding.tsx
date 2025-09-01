import { useCityContext } from "../../cityContext/cityContext";

export const PlacedCivilBuildings = () => {
    const { contextValue } = useCityContext();
    
    const openClosePopup = (state, id) => {
        contextValue.setPlacedCivilBuildings(prev =>
            prev.map((building) => {
                if (building.id === id) {
                    return { ...building, popup: !state.popup };
                } else {
                    return { ...building, popup: false };
                }
            })
        );
        if (!state.popup) {
            contextValue.setItem(state.id)
        } else contextValue.setItem(null)
    }

    const selectedItem = (state) => {
        if (state) {
            return "0 0 10px 5px teal"
        } else {
            return ""
        }
    }
    
    const setSize = (size, perks) => {
        let width = size.width;
        let height = size.height;
        if (perks) {
            if (perks.perks){
                height = `${parseFloat(height) + parseFloat(perks.perks.height)}px`
                width = `${parseFloat(width) + parseFloat(perks.perks.width)}px`
            }
        }
        return {width, height}
    }

    const PreviewSize = ({item}) => {
        if (item.popup && item.level[item.currentLevel].width) {
            return(<div
                className="placedCivilBuildings"
                style={{
                    position: 'absolute',
                    top: item.y,
                    left: item.x,
                    width:setSize(item.level[item.currentLevel], item.setHeadbuildingType).width,
                    height:setSize(item.level[item.currentLevel], item.setHeadbuildingType).height,
                    zIndex: 9,
                }}>
            </div>)
        }
        return(<>
        </>)
    }

    return(<>
        {contextValue.placedCivilBuildings.map((item) => {
            return(
            <div key={item.id}>
                <div
                    onClick={() => openClosePopup(item, item.id)}
                    className="placedCivilBuildings"
                    style={{
                        position: 'absolute',
                        top: item.y,
                        left: item.x,
                        width:setSize(item, item.setHeadbuildingType).width,
                        height:setSize(item, item.setHeadbuildingType).height,
                        boxShadow: selectedItem(item.popup),
                        zIndex: 10,
                    }}>
                    <p>{item.name}</p>
                </div>
                <PreviewSize item={item}/>
            </div>)})}
        </>)
}