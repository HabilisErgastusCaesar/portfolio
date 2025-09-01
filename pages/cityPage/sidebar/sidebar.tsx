import { useCityContext } from "../cityComponents/cityContext/cityContext"
import { CivilSidebar } from "./civilSidebar/civilSidebar"

export const Sidebar = () => {
    const {contextValue} = useCityContext()
    const civil = contextValue.placedCivilBuildings.find((items) => items.id === contextValue.item)
    return(<div>
        <header>
            <button>
            sidebar
            </button>
        </header>
        <CivilSidebar civil={civil}/>
        </div>)
}