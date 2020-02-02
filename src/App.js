import React from 'react';
import Converter from './components/converter/index.jsx'
import Result from './components/result/index.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <a>
          <img className="logo" srcset="./img/logoBlack.svg" src="./img/logoBlack.png" width="27" height="22"></img>
        </a>
        <h1 className="title">Sales&Go</h1>
      </header>
      <Converter />
      <Result />
    </div>
  );
}

export default App;
