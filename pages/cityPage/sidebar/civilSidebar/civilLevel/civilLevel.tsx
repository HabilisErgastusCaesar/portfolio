import { SetBuildingType } from "./modules/setBuildingType";

export const CivilLevel = ({ item, handlePopup }) => {
  return (
    <>
    <h4>{item.name}</h4>
    <div className="civil-container">
      
    {item.level[item.currentLevel].headbuildingType ? (
      <SetBuildingType item={item} handlePopup={handlePopup} />
    ):(
    <>
    <h4>Set Level</h4>
    <div
      className="civil-button-container"
      onClick={() => handlePopup('lvl up', item, item.id)}>
    <div className="civil-up-button" />
    </div>
    <p>{item.currentLevel}</p>
    <div
      className="civil-button-container"
      onClick={() => handlePopup('lvl down', item, item.id)}>
      <div className="civil-down-button" />
    </div>
    </>
    )}
    {item.level[item.currentLevel] ? (
    <div className="resource-list">
      {Object.entries(item.level[item.currentLevel].buildNeeds).map(
        ([key, value]) => (
          <span key={key} className="resource-item">
            {key}: {value}
          </span>
        )
       )}
      </div>
    ) : (
      <h4>Max</h4>
    )}
    <h4>Missing Resources</h4>
    </div>
  </>
  );};