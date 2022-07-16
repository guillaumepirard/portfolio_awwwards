// COMP Import
import FirstSlide from 'src/components/FirstSlide';
import SecondSlide from 'src/components/SecondSlide';
import Curtains from 'src/components/Curtains';

// Style
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <FirstSlide />
    <SecondSlide />
    <Curtains />
  </div>
);

// == Export
export default App;
