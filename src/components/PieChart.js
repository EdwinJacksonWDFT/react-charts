import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';


export default ({title, ...props}) => (
    <div className="chart pie">
        <h1>{title}</h1>
        <Pie {...props}/>
    </div>
)