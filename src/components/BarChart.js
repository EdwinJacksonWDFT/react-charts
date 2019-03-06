import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './bar-chart.css';

export default props => (
    <div className="chart">
        <h1>Bar Chart</h1>
        <Bar
            data={props.data}
            width={props.width}
            height={props.height}
            options={{
                maintainAspectRatio: false
            }}
        />
    </div>
);