import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Description from './components/Description';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Description />
      <Footer/>
    </div>
  );
}

export default App;
