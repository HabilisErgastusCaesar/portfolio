export const MainMap = ({data, setData}) => {
    const handlePopup = (e, type) => {
        if (type.popup) {
            e.target.classList.add('onHover');
            e.target.classList.remove("selected");
        } else {
            e.target.classList.remove('onHover');
            e.target.classList.add("selected");
        }
        setData(prevState => ({
            ...prevState,
            city: prevState.city.map(city =>
                city.id === "mainMapPlayer_one"
                ? {
                    ...city,
                    mainBuilding: {
                        ...city.mainBuilding,
                        popup: !city.mainBuilding.popup
                    }
                    }
                : city
            )
        }));
    }
    const onHover = (e, type) => {
        if (!type.popup) {
            e.target.classList.add('onHover');
        }
    }
    const hoverOut = (e, type) => {
        if (!type.poup) {
            e.target.classList.remove('onHover');
        }
    }
    return (<div className="main-map">
        <div className="play-map">
            {data.city && data.city.map((item , index) => {
                {if (item.mainBuilding)  
                    {return <canvas key={index}
                    className="mainBuilding"
                    onClick={((e) => handlePopup(e, item.mainBuilding))}
                    onMouseEnter={(e) => onHover(e, item.mainBuilding)}
                    onMouseLeave={(e) => hoverOut(e, item.mainBuilding)}
                    style={{
                    width:`${item.mainBuilding.width}px`,
                    height:`${item.mainBuilding.height}px`,
                    left:`${item.mainBuilding.x}px`,
                    top:`${item.mainBuilding.y}px`,
                    }}>
                    <h1>headbuilding</h1>
                </canvas>}}
            })}
        </div>
    </div>)
}