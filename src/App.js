import FetchStarships from './Components/Starship';
import './App.css';
import FetchPlanets from './Components/Planet';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Error from './Components/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='Title'>
          
        </div>
        <Nav />
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/Starship' element={<FetchStarships />} />
          <Route path='/Planet' element={<FetchPlanets />} />
        </Routes>
      </div>
    </BrowserRouter>     
    
  );
}

export default App;