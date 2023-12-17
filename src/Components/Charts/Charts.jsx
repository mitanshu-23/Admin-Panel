import React from 'react'
import './charts.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = ({title, data, dataKey, grid}) => {

    

  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer style={{width:"100%"}} aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" stroke='#5550bd'/>
          {/* <YAxis /> */}
          <Line type="monotone" dataKey={dataKey} stroke='#5550bd'/>
          <Tooltip />
          <Legend />
         {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
        </LineChart>
       
        </ResponsiveContainer>
       
    </div>
  )
}

export default Charts