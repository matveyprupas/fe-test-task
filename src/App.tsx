import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Slider } from './components/Slider/index';
import { Learn } from './components/Learn';
import { Shop } from './components/Shop';

function App() {
  return (
    <div className="App">
      <Routes>
				<Route path='/' element={<Slider/>} />
				<Route path='/learn/:id' element={<Learn />} />
				<Route path='/shop/:id' element={<Shop />} />
			</Routes>
    </div>
  );
}

export default App;
