import { useEffect, useState } from "react";

export const CityMiniMap = ({ mapCoordinates, setMapCoordinates }) => {
    const [view, isView] = useState(true)
    const handleMiniMapClick = (e) => {
        const miniMap = e.target.getBoundingClientRect();
        const newX = (e.clientX - miniMap.left) * 390;
        const newY = (e.clientY - miniMap.top) * 410;

        setMapCoordinates({ x: newX, y: newY });

        const mainMap = document.querySelector('.borderOffMap') as HTMLElement;
        mainMap.scrollLeft = newX;
        mainMap.scrollTop = newY;
    };

    const showSide = async() => {
        const sideBar = document.querySelector('.sideBarStats');
        if (sideBar) {
            sideBar.classList.add('open');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY >= 280) {
            isView(false)
        } else {
            isView(true)
        }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return(<>
    {view && <div className='miniMapContainer'>
        <div className="minimapbutton" onClick={() => showSide()}>
            <p>side info</p>
        </div>
        <div className='miniMap' onClick={handleMiniMapClick}>
        <div className="MiniMap_River">
        <div className="MiniMap_Island"></div>
        </div>
        <div
            className='miniMap-indicator'
            style={{
                position: 'absolute',
                top: `${(mapCoordinates.y / 450) + 24}px `,
                left: `${mapCoordinates.x / 420}px`,
            }}>
        </div>
    </div>
    </div>}
    </>)
}