import General from './General';
import Listings from '../Components/Listings.js';
import AppProvider from "../utils/AppProvider.js";
import OpenProvider from '../utils/OpenProvider.js';
import '../Styles/App.css';

function App() {
  return (
    <AppProvider>
        <OpenProvider>
          <div className="App">
            <General />
            <Listings />
          </div>
        </OpenProvider>
    </AppProvider>
  );
}

export default App;
