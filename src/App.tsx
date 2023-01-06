import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Slider } from './components/Slider/index';
import { Learn } from './components/Learn';
import { Shop } from './components/Shop';
import { Filters } from './components/Filters';

function App() {
  return (
    <div className="app">
      <div className="app_container">
        <Filters/>
        <Routes>
          <Route path='/' element={<Slider/>} />
          <Route path='/learn/:id' element={<Learn />} />
          <Route path='/shop/:id' element={<Shop />} />
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
