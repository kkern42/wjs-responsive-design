import React from 'react';

import './App.css';
import logo from './The-Wall-Street-Journal-Logo.png'
//hey
function App() {

  const onChange = () => {
    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "fb96d153d3msha8bb9a91c05b002p1291b0jsncb0b53d50014"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })

      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <header className="header">
        <div className='wrapper'>
          <img src={logo} alt="Logo" className="center" />
        </div>
      </header>
      <button onClick={onChange}>Access API</button>
    </div>
  );
}


export default App;
