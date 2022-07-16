// == Import : npm
import { render } from 'react-dom';

// == Import : local
// Composants
import App from 'src/components/App';

const rootReactElement = <App />;

const target = document.getElementById('root');

window.onload = () => {
  render(rootReactElement, target);
};
