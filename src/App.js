import React from 'react';
import './App.css';
import NavBar from './components/Header';
import Banner from './components/Banner';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Description />
    </div>
  );
}

export default App;
