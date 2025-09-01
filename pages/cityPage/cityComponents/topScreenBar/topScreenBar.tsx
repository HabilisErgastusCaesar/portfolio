import { Status } from "./states/status"
import { Resources } from "./resources/resources"
import { Date } from "./date/date"

export const TopScreenBar = () => {
    return(<div className="topScreenBar">
    <Status />
    <Resources />
    <Date />
    </div>)
}