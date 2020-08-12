import React from 'react';

import './App.css';
import logo from './The-Wall-Street-Journal-Logo.png'
//hey
function App() {
  const [getData, setData] = React.useState([]);

  const onChange = () => {
    fetch(process.env.REACT_SITE, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_API_KEY
      }
    })
      .then(response => response.json())
      .then(data => {
        setData(data.marketSummaryResponse.result);
        console.log(data.marketSummaryResponse.result);
      })

      .catch(err => {
        //console.log(err);
      });

  }

  return (
    <div>
      <header className="header">
        <div className='wrapper'>
          <img src={logo} alt="Logo" className="center" />
        </div>
      </header>
      <button onClick={onChange}>list of companies from API</button>
      {
        (getData.length > 0) && [
          getData.map((item, index) => {
            return (
              <div className="list">
                {item.fullExchangeName}
              </div>
            );
          })
        ]
      }
    </div>
  );
}


export default App;
