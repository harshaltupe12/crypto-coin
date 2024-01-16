    import React from 'react'
    import style from '../styles/TokenRoadmap.module.scss'
    import { FunnelChart  , Tooltip   , Funnel   , LabelList  , Radar , Legend   } from 'recharts';
    
    const TokenRoadmap = () => {
        const data = [
            {
              "value": 100,
              "name": "Team",
              "fill": "#8884d8"
            },
            {
              "value": 70,
              "name": "Presale",
              "fill": "#83a6ed"
            },
            {
              "value": 50,
              "name": "Lequdity",
              "fill": "#8dd1e1"
            },
            {
              "value": 30,
              "name": "Treasury development and marketing",
              "fill": "#82ca9d"
            },
          ]
      return (
        <div className={style.main}>
            <div className={style.left}>
                <div className={style.title}><h1>Tokenoies</h1></div>
                    <div className={style.leftContainer}>
                        <div className={style.leftChart}>
                        <FunnelChart width={730} height={330}>
                            <Tooltip />
                            <Funnel
                                dataKey="value"
                                data={data}
                                isAnimationActive
                            >
                                <LabelList position="right" fill="#fff" stroke="none" dataKey="name" />
                            </Funnel>
                        </FunnelChart>
                        </div>
                        <div className={style.rightinfo}>
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