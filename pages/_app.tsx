import { LearningProvider } from './Learning/learningContext'
import { GamesProvider } from './game/Context/gameContext'

import './game/mainMap/mainMap.css'
import './game/mainMap/mainMap/mainMap.css'
import './game/mainMap/optionsBar/optionsBar.css'
import './game/mainMap/statusBar/statusBar.css'
import './game/mainMap/sideBar/sideBar.css'

import './cityPage/main.css'
import './cityPage/mains.css'
import './cityPage/cityComponents/cityMap/cityMap.css'
import './cityPage/cityComponents/topScreenBar/topScreenBar.css'
import './cityPage/cityComponents/popupBar/popupBar.css'
import './cityPage/cityComponents/popupBar/armyPopup/armyPopup.css'
import './cityPage/cityComponents/popupBar/buildingsPopup/buildingsPopup.css'
import './cityPage/cityComponents/popupBar/carrisonPopup/carrisonPopup.css'
import './cityPage/cityComponents/cityMap/placedCivilBuildings/placedCivilBuilding.css'
import './cityPage/cityComponents/cityMap/cityMiniMap/cityMapMini.css'
import './cityPage/cityComponents/topScreenBar/date/date.css'

import './cityPage/sidebar/sidebar.css'
import './cityPage/sidebar/civilSidebar/civilLevel/civilLevel.css'
import './cityPage/sidebar/civilSidebar/placedModules/placedModules.css'

import './stargate/stargateSeasons/stargateSearchEpisode.css'
import './stargate/stargateSeasons/dropDownMenu.css'
import './stargate/episode/episode.css'
import './stargate/component/searchFilter/searchFilter.css'
import './stargate/component/searchFilter/searchResult/searchResult.css'
import './stargate/component/stargateLayoutEpisodeAtlantis/stargateLayoutEpisodeAtlantis.css'
import './stargate/component/stargateLayoutEpisodeSg/stargateLayoutEpisodeSg.css'
import './stargate/component/stargateLayoutBiggerContainer/stargateLayoutBiggerContainer.css'
import './stargate/component/stargateLayoutBiggerContainer/dialingSequence/dialingSequence.css'
import './stargate/component/stargateLayoutCastAtlantis/stargateLayoutCastAtlantis.css'
import './stargate/component/loading/loading.css'

import './Learning/Menu.css'
import './Learning/testList/testList.css'
import './Learning/testList/component/acceptChanges.css'

import './index.css'

const App = ({ Component}) => {
  return (<LearningProvider>
    <GamesProvider>
      <Component />
    </GamesProvider>
  </LearningProvider>);
};

export default App;
