import React from 'react'
import style from '../styles/UserCard.module.scss'


const UserCard = () => {
  return (
    <div className={style.main}>
        <div className={style.usercard}>
            <div className={style.left}>
                <div className={style.lLeft}>
                    <div className={style.lImg}>
                        <img src="https://shorturl.at/iANR4" alt="" />
                    </div>
                </div>

                <div className={style.rLeft}>
                    <div className={style.top}>
                        <div className={style.title}>
                            Gigachatgpt <span className={style.subtitle}>
                                $GIGA
                            </span>
                        </div>
                    </div>
                    <div className={style.mid}>
                        <div className={style.midleft}>
                            <div className={style.name}>
                                ETH
                            </div>
                            <div className={style.presale}>
                                Presale
                            </div>
                            <div className={style.status}>
                                Ongoing
                            </div>
                        </div>
                        <div className={style.midright}>
                            <div className={style.top}>
                                <div className={style.container}>
                                    <img src="https://shorturl.at/jBHQW" alt="" height={30} width={30} className={style.image}/>
                                    <img src="https://shorturl.at/qKTU1" alt="" height={30} width={30} className={style.image}/>
                                    <img src="https://shorturl.at/bnGIS" alt="" height={30} width={30} className={style.image}/>
                                    <img src="https://shorturl.at/bdrz7" alt="" height={30} width={30} className={style.image}/>
                                    <img src="https://shorturl.at/gmEJ2" alt="" height={30} width={30} className={style.image}/>
                                </div> 
                            </div>
                            <div className={style.bottom}>
                                <div className={style.title}>
                                    Add to Watchlist 
                                    <span className={style.number}>200</span>
                                </div>
                                    <img src="https://rb.gy/r9jz1q" alt="" height={30} width={30}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.bottom}>
                        <div className={style.l}>
                            <div className={style.title}>
                                ATH : <span style={{color:'#00FF19'}}>224%</span>
                            </div>
                            <div className={style.price}>
                                Price : <span>0.015$</span>
                            </div>
                        </div>
                        <div className={style.r}>
                            <div className={style.price}>ATH Price : <span style={{color:'#00FF19'}}>0.03$</span></div>
                            <div className={style.supply}>Total Supply : 2,00,00,0000</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.right}>
                <div className={style.top}>
                    <div className={style.up}>
                        <div className={style.col1}>
                            <span className={style.btn}>Promote</span>
                        </div>
                        <div className={style.col2}>
                            <span>
                            Todays Promote
                            </span>
                            <br/>
                            <span style={{textAlign:"center", marginLeft:'40px', color:'#00FF19'}}>6</span>
                        </div>
                        <div className={style.col3}>
                        <span>
                            Total Promote
                            </span>
                            <br/>
                            <span style={{textAlign:"center", marginLeft:'35px', color:'#00FF19'}}>1646</span>
                        </div>
                    </div>
                    <div className={style.down}>
                    <div className={style.col1}>
                            <span className={style.btn}>Promote</span>
                        </div>
                        <div className={style.col2}>
                            <span>
                            Todays Votes
                            </span>
                            <br/>
                            <span style={{textAlign:"center", marginLeft:'20px', color:'#00FF19'}}>30,00</span>
                        </div>
                        <div className={style.col3}>
                        <span>
                            Total Votes  
                            </span>
                            <br/>
                            <span style={{textAlign:"center", marginLeft:'15px', color:'#00FF19'}}>1,40,00</span>
                        </div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.container}>
                        <div className={style.btn}>
                            Buy
                        </div>
                        <div className={style.img1}>Image</div>
                        <div className={style.img2}>Image2</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCard