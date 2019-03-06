import React, { Component } from 'react';
import BarChart from './components/BarChart';
import './App.css';

import basicBarData from './data/basic-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarChart data={basicBarData} height={100} width={50} />
      </div>
    );
  }
}

export default App;
