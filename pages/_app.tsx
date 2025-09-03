import { StargateProvider } from '../components/useContext/stargateComponents';

import '../styles/_app.css'
import '../styles/index.css'


const App = ({Component}) => {
  return (<StargateProvider>
    <Component />
  </StargateProvider>);
};

export default App;
