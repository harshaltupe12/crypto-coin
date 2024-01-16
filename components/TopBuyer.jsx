import React from 'react'
import style from '../styles/TopBuyer.module.scss'
import { BarChart   , Tooltip   , CartesianGrid    , XAxis   , YAxis , Legend, Bar    } from 'recharts';

const TopBuyer = () => {
    const data = [
        {
          "name": "2017",
          "uv": 4000,
          "pv": 2400,
          "eth": 1300,
          "btc":3000
        },
        {
          "name": "2018",
          "uv": 3000,
          "pv": 1398,
          "eth": 1300,
          "btc":3000
        },
        {
          "name": "2019",
          "uv": 2000,
          "pv": 9800,
          "eth": 1300,
          "btc":3000
        },
        {
          "name": "2020",
          "uv": 2780,
          "pv": 3908,
          "eth": 1300,
          "btc":3000
        },
        {
          "name": "2021",
          "uv": 1890,
          "pv": 4800,
          "eth": 1300,
          "btc":3000
        },
        {
          "name": "2022",
          "uv": 2390,
          "pv": 3800,
          "eth": 1300,
          "btc":3000
        },
        {
          "name": "2023",
          "uv": 3490,
          "pv": 4300,
          "eth": 1300,
          "btc":3000
        }
      ]
      
  return (
    <div className={style.main}>
        <div className={style.title}>
            <h1 style={{textAlign:'center'}}>Top Buyer</h1>
        </div>
        <div className={style.chart}>
        <BarChart width={1350} height={450} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Bar dataKey="pv" fill="#eb34d5" />
            <Bar dataKey="uv" fill="#b504a0" />
            <Bar dataKey="eth" fill="#b11ed6" />
            <Bar dataKey="btc" fill="#790596" />
        </BarChart>
        </div>
    </div>
  )
}

export default TopBuyer