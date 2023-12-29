import Phones from './components/JoueursBarca';
import JoueursReal from './components/JoueursReal';
import './App.css';
import Home from './components/Equipes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/JoueursBarca' element={<Phones/>}/>
          <Route path='/JoueursReal' element={<JoueursReal/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
