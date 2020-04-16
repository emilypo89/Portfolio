import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Description from './components/Description';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Description />
      <About />
      <Footer/>
    </div>
  );
}

export default App;
