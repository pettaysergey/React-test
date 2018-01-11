import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List.js";
import test from "./Test.js";
import Calc from './Calc.js';
import getData from "./functions/data.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Загрузка данных с сервера</h1>
        </header>
        <List getData={getData} />
        <Calc start={10}/>
      </div>
    );
  }
}

export default App;
