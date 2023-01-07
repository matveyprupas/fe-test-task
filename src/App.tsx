import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Slider } from './components/Slider/index';
import { Learn } from './components/Learn';
import { Shop } from './components/Shop';
import { Filters } from './components/Filters';
import { useState } from 'react';

export interface StateFiltersInterface {
  'dry': boolean,
  'semi-dry': boolean,
  'sweet': boolean
}

function App() {

  const [filters, setFilters]= useState<StateFiltersInterface>({"dry": true, "semi-dry": true, 'sweet': true})

  const filtersHandler = (filter: 'dry' | 'semi-dry' | 'sweet', event: React.MouseEvent): void => {
    event.preventDefault();
    setFilters({...filters, [filter]: !filters[filter]});
  };

  return (
    <div className="app">
      <div className="app_container">
        <Filters filters={filters} onClick={filtersHandler} />
        {/* <div>dry: {filters.dry.toString()}</div>
        <div>seni-dry: {filters['semi-dry'].toString()}</div>
        <div>sweet: {filters.sweet.toString()}</div> */}
        <Routes>
          <Route path='/' element={<Slider filters={filters} />} />
          <Route path='/learn/:id' element={<Learn />} />
          <Route path='/shop/:id' element={<Shop />} />
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
