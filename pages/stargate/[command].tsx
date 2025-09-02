import { DropDownMenu } from "../../components/stargate/dropDownMenu"
import { StargateProvider } from "../../components/stargate/useContext/stargateComponents"
import { StargateSearchEpisode } from "../../components/stargate/stargateSearchEpisode"

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