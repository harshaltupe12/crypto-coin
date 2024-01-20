import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import style from '../styles/PresaleAnalytic.module.scss'

const PresaleAnalytic = () => {
    const data = [{name: 'GGP', uv: 100, pv: 2400, amt: 2400}, 
                  {name: 'CMZ', uv: 200, pv: 2400, amt: 2400},
                  {name: 'SZM', uv: 450, pv: 2400, amt: 2400},
                  {name: 'ETH', uv: 500, pv: 2400, amt: 2400},
                  {name: 'BTC', uv: 830, pv: 2400, amt: 2400},
                ];
  return (
    <div className={style.main}>
        <div className={style.left}>
            <div className={style.styleChart}>
                <div className={style.title}><h1>Presale</h1></div>
                <LineChart width={600} height={350} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#c12c97" />
                <XAxis dataKey="name" />
                <YAxis />
                </LineChart>
            </div>
            <div className={style.container}>
                <div className={style.index}>
                    <h2 style={{textAlign:'center', margin:'10px'}}>Index</h2>
                    <p style={{textAlign:'center', margin:'10px', fontSize:'small', fontWeight:'bold', color:'#e3be19'}}>stage/price</p>
                </div>
                <div className={style.phase}>
                    <h2 style={{textAlign:'center', margin:'10px'}}>Phase</h2>
                    <p style={{textAlign:'center', margin:'10px', fontSize:'small', fontWeight:'bold', color:'#e3be19'}}>15 Stage</p>
                </div>
                <div className={style.softCap}>
                    <h2 style={{textAlign:'center', margin:'10px'}}>Soft Cap</h2>
                    <p style={{textAlign:'center', margin:'10px', fontSize:'small', fontWeight:'bold', color:'#e3be19'}}>1 Million</p>
                </div>
                <div className={style.hardCap}>
                    <h2 style={{textAlign:'center', margin:'10px'}}>Hard Cap</h2>
                    <p style={{textAlign:'center', margin:'10px', fontSize:'small', fontWeight:'bold', color:'#e3be19'}}>5 Million</p>
                </div>
            </div>
        </div>

        <div className={style.right}>
            <div className={style.rightTop}>
                <div className={style.personalInfo}>
                    <div className={style.title}>
                        <h1>Personal Info</h1>
                    </div>
                    <div className={style.mainBody}>
                        <div className={style.col1}>
                            <div className={style.data1} style={{fontWeight:'bold'}}>Start</div>
                            <div className={style.data2} style={{fontWeight:'bold'}}>End</div>
                            <div className={style.data2} style={{fontWeight:'bold'}}>Launch</div>
                        </div>
                        <div className={style.col2}>
                            <div className={style.data1}>13/11/2023</div>
                            <div className={style.data2}>1/2/2024</div>
                            <div className={style.data2}>1/2/2024</div>
                        </div>
                        <div className={style.col3}>
                            <div className={style.data1} style={{color:'#e3be19'}}>12:10 pm UTC</div>
                            <div className={style.data2} style={{color:'#e3be19'}}>12:10 pm UTC</div>
                            <div className={style.data2} style={{color:'#e3be19'}}>12:10 pm UTC</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.rightBottom}>
                <div className={style.kyc}>
                    <div className={style.title}>
                        <h1>Audit & KYC</h1>
                    </div>
                    <div className={style.container}>
                        <div className={style.audit} style={{background:'blue', padding:'10px', borderRadius:'10px', width:'60px', textAlign:'center'}}>Audit</div>
                        <div className={style.doxed} style={{background:'#e3cc02', padding:'10px', borderRadius:'10px', width:'60px', textAlign:'center'}}>Doxxed</div>
                        <div className={style.kyc} style={{background:'green', padding:'10px', borderRadius:'10px', width:'60px', textAlign:'center'}}>KYC</div>
                        <div className={style.safu} style={{background:'#9e3494', padding:'10px', borderRadius:'10px', width:'60px', textAlign:'center'}}>Safu</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default PresaleAnalytic