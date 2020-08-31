import React from 'react';

import Card from './components/card/Card';
import CardTwo from './components/cardTwo/CardTwo';
import CardThree from './components/cardThree/CardThree';
import CardFour from './components/cardFour/CardFour';
import CardFive from './components/cardFive/CardFive';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Apps" style={{background:"#ecf0f1"}}>
      <Navbar/>
      <Card/>
      <CardTwo/>
      <CardThree/>
      <CardFour/>
      <CardFive/>
      <Footer/>
    </div>
  );
}

export default App;
