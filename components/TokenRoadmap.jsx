    import React from 'react'
    import style from '../styles/TokenRoadmap.module.scss'
    import { PieChart } from 'react-minimal-pie-chart';
    
    const TokenRoadmap = () => {
      return (
        <div className={style.main}>
            <div className={style.left}>
                <div className={style.title}><h1>Tokenoies</h1></div>
                    <div className={style.leftContainer}>
                        <div className={style.leftChart}>
                          <div className={style.chart}>
                            <PieChart
                            radius={35}
                            data={[
                              { title: 'One', value: 10, color: '#E38627' },
                              { title: 'Two', value: 15, color: '#C13C37' },
                              { title: 'Three', value: 20, color: '#6A2135' },
                            ]}
                            />
                        </div>
                        </div>
                        <div className={style.rightinfo}>
                          <div className={style.team}>Team <span style={{backgroundColor:'green', padding:'3px', borderRadius:'5px'}}>5%</span></div>

                          <div className={style.presale}>Presale<span style={{backgroundColor:'green', padding:'3px', borderRadius:'5px'}}>5%</span></div>

                          <div className={style.liquadity}>Liquadity<span style={{backgroundColor:'green', padding:'3px', borderRadius:'5px'}}>5%</span></div>

                          <div className={style.presale}>Treasure Development and Marketing <span style={{marginLeft:'10px', backgroundColor:'green', padding:'5px', height:'max-content', borderRadius:'5px'}}>5%</span></div>
                        </div>
                    </div>
            </div>
            <div className={style.right}>
                <h1>Road map</h1>
            </div>
        </div>
      )
    }
    
    export default TokenRoadmap