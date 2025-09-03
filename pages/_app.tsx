import { LearningProvider } from '../components/learningApp/Context/learningContext'
import { GamesProvider } from '../components/game/Context/gameContext'
import { StargateProvider } from '../components/stargate/useContext/stargateComponents'

import '../styles/game/mainMap.css'
import '../styles/game/mainMapContainer.css'
import '../styles/game/optionsBar.css'
import '../styles/game/statusBar.css'
import '../styles/game/sideBar.css'

import '../styles/stargate/episode.css'
import '../styles/stargate/dropDownMenu.css'
import '../styles/stargate/stargateSearchEpisode.css'
import '../styles/stargate/searchFilter.css'
import '../styles/stargate/searchResult.css'
import '../styles/stargate/stargateLayoutEpisodeAtlantis.css'
import '../styles/stargate/stargateLayoutEpisodeSg.css'
import '../styles/stargate/stargateLayoutBiggerContainer.css'
import '../styles/stargate/dialingSequence.css'
import '../styles/stargate/stargateLayoutCastAtlantis.css'
import '../styles/stargate/loading.css'


import '../styles/Learning/acceptChanges.css'

import '../styles/Learning/Menu.css'
import '../styles/Learning/testList.css'

import '../styles/index.css'

const App = ({ Component}) => {
  return (<StargateProvider>
  <LearningProvider>
    <GamesProvider>
      <Component />
    </GamesProvider>
  </LearningProvider>
  </StargateProvider>);
};

export default App;
