export const CivilMoving = ({handle, item }) => {
    return(<div className="civil-container">
        <h4>moving</h4>
        <div className="civil-button-container" onClick={() => handle.handlePopup("move up", item.y - 15, item.id)}>
            <div className="civil-up-button"/>
        </div>
        <div className="left-right-buttons">
            <div className="civil-button-container" onMouseDown={() => handle.handlePopup("move left", item.x - 15, item.id)} onMouseUp={handle.handleMouseUp} onMouseLeave={handle.handleMouseUp} >
                <div className="civil-left-button"/>
            </div>
            <div className="civil-button-container" onClick={() => handle.handlePopup("move right", item.x + 30, item.id)}>
                <div className="civil-right-button"/>
            </div>
        </div>
        <div className="civil-button-container" onClick={() => handle.handlePopup("move down", item.y + 30, item.id)}>
            <div className="civil-down-button"/>
        </div>
        </div>)
}