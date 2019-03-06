import React, { Component } from 'react';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import ScatterPlot from './components/ScatterPlot';
import './App.css';

import basicBarData from './data/basic-bar';
import basicPieData from './data/basic-pie';
import basicScatter from './data/basic-scatter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarChart data={basicBarData} height={100} width={50} />
        <PieChart title="Commuting to work in Toronto" data={basicPieData} height={20} width={20} />
        <ScatterPlot title="Scatter plot" data={basicScatter} height={100} width={100} />
      </div>
    );
  }
}

export default App;
