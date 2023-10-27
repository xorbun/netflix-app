
import './App.css';
import Tvseries from './components/Gallery';
import Myfooter from './components/Myfooter';
import Mynav from './components/Mynavbar';

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div >
      <header>
        <Mynav/>
      </header>
      <main>
        <Tvseries example="Trending now" search="&s=harry%20potter"/>
        <Tvseries example="Watch now" search="&s=star+wars"/>
        <Tvseries example="New Releases" search="&s=lord+of+the+rings"/>
      </main>
      <footer>
      <Myfooter/>
      </footer>
    </div>
  );
}

export default App;
