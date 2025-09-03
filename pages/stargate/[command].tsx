import { DropDownMenu } from "../../components/stargate/dropDownMenu"
import { StargateSearchEpisode } from "../../components/stargate/stargateSearchEpisode"

const Stargate = () => {
    return(<div style={{
        backgroundColor:"black",
        height:"100vh",
    }}>
        <DropDownMenu />
        <StargateSearchEpisode />
    </div>)
}

export default Stargate