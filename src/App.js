import React from 'react';

import './App.css';
import logo from './The-Wall-Street-Journal-Logo.png'
//hey
function App() {
  return (
    <div>
      <header className="header">
        <div className='wrapper'>
          <img src={logo} alt="Logo" class="center" />
        </div>
      </header>
    </div>
  );
}


export default App;
