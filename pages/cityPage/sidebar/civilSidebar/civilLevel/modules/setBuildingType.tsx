export const SetBuildingType = ({item, handlePopup}) => {
    let headbuildingChangeTypeList = []
    let currentLvl = []
    const handleMouseOver = () => {
        console.log("Mouse over the button!");
    };

    const handleMouseOut = () => {
        console.log("Mouse out of the button!");
    };
    const CivilBuildingButton = ({module,name}) => {
        return (<div>
            <h3>{name}</h3>
            <div className="civil-button-setType-hover">
            <div
                onClick={() => handlePopup('set building type', item, module)}
                onMouseEnter={() => handleMouseOver()}
                onMouseLeave={() => handleMouseOut()}
                className="civil-button-setType">
            <h4>{module.name}</h4>
            </div>
            </div>
        </div>)
    }
    return(<div>
    {item.setHeadbuildingType.length > 0 &&
    <p>Warning if you convert there will be a level panalty.
        The level will be set to same level as where you can first unlock this upgrade
    </p>
    }
    {item.setHeadbuildingTypeType.map((module, index) => {
    if (module.unlockLvl <= item.currentLevel) {
        if (item.setHeadbuildingType.type === module.type && module.unlockLvl === item.currentLevel && 
            !item.level[item.currentLevel].headbuildingChangeType) {
            return(<CivilBuildingButton key={index} module={module} name="upgrade to"/>)
        } else if (
            item.level[item.currentLevel].headbuildingChangeType) {
                if (item.setHeadbuildingType.type === module.type && module.currentLvl > item.setHeadbuildingType.currentLvl) {
                    headbuildingChangeTypeList.push(module)
                    currentLvl.push(module.currentLvl)
                } else if (item.setHeadbuildingType.type === module.type && module.unlockLvl === item.setHeadbuildingType.unlockLvl) {
                    headbuildingChangeTypeList.push(module)
                    currentLvl.push(module.currentLvl)
                } else if (item.setHeadbuildingType.type !== module.type && module.unlockLvl === item.setHeadbuildingType.unlockLvl) {
                    return(<CivilBuildingButton key={index} module={module} name="convert to"/>)
                }
        } else if (item.setHeadbuildingType.type !== module.type && module.unlockLvl === item.setHeadbuildingType.unlockLvl) {
            return(<CivilBuildingButton key={index} module={module} name="convert to"/>)
        } else if (item.setHeadbuildingType.type !== module.type &&  module.unlockLvl === item.currentLevel && module.currentLvl === 1) {
            return(<CivilBuildingButton key={index} module={module} name="upgrade to new type"/>)
        }}
    })}
    {headbuildingChangeTypeList.map((module, index) => {
        const result = currentLvl.sort().reverse()
        if (module.currentLvl == result[0]) {
            return(<CivilBuildingButton key={index} module={module} name="upgrade to"/>)
        }
    })}
    </div>)
}