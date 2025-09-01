export const ArmyCarrisonItem = ({state ,handleInfo}) => {
    return(<div itemID={state.itemID} className="armyCarrison-item" onClick={(e) => handleInfo(e)}>
    <h4>{state.name}</h4>
    <div className="armyCarrison-itemGrid">
        <p>melee</p><p className="armyCarrison-unitTotal">{state.melee}</p>
        <p>missile</p><p className="armyCarrison-unitTotal">{state.missile}</p>
        <p>cavalry</p><p className="armyCarrison-unitTotal">{state.cavalry}</p>
        <p>vehicle</p><p className="armyCarrison-unitTotal">{state.vehicle}</p>
        <p>artillery</p><p className="armyCarrison-unitTotal">{state.artillery}</p>
        <p>arial</p><p className="armyCarrison-unitTotal">{state.arial}</p>
    </div>
</div>)
}