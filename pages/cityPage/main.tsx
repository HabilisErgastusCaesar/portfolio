import React from "react"
import { Navigation } from "../../components/navigate"
import { CityMap } from "./cityComponents/cityMap/cityMap"
import { TopScreenBar } from "./cityComponents/topScreenBar/topScreenBar"
import { PopupBar } from "./cityComponents/popupBar/popupBar"
import { CityProvider } from "./cityComponents/cityContext/cityContext"
import { Sidebar } from "./sidebar/sidebar"

const Main = () => {
  
  return (<>
    <div>
        <Navigation.MainLink>
            <button>Main</button>
        </Navigation.MainLink>
      <ul>
        <button>world</button>
        <button>defense</button>
        <h3>city</h3>
      </ul>
    </div>
    <CityProvider>
    <div className="armyCarrison-container">
    <div className="gameWindow">
      <TopScreenBar />
      <CityMap />
      <PopupBar />
    </div>
    <Sidebar />
    </div>
    </CityProvider>
  </>)
}

export default Main