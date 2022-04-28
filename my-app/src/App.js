
import './App.module.css';
import logo from './images/logo.png'
import Home from './components/Home';
import React from 'react'


function App() {
  return (
    <div>
        <img src={logo} className = "logo" alt = ""/>
        <Home />
    
    </div>
      
  );
}

export default App;
