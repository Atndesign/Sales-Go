import React from 'react';
import Converter from './components/converter/index.jsx'
import Result from './components/result/index.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <a>
          <img className="" srcset="./img/logoBlack.svg" src="./img/logoBlack.png"></img>
        </a>
        <h1>Sales&Go</h1>
      </header>
      <Converter />
      <Result />
    </div>
  );
}

export default App;
