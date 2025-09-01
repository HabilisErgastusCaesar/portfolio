import { DropDownMenu } from "./stargateSeasons/dropDownMenu"
import { StargateProvider } from "./stargateComponents/stargateComponents"
import { StargateSearchEpisode } from "./stargateSeasons/stargateSearchEpisode"

const Stargate = () => {
    return(<div style={{
        backgroundColor:"black",
        height:"100vh",
    }}>
    <StargateProvider >
        <DropDownMenu />
        <StargateSearchEpisode />
    </StargateProvider>
    </div>)
}

export default Stargate