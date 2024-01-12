// import React from 'react'

// const UpdateCoin = () => {
//     return (
//         <center>
//           <div className='submit-content-div'>
//             <center><h1>Submit Coin Details</h1></center><br/><br/><br/>
//             <div className='submit-coin-div'>
//             <div className='layout'>
//                 <h2>Coin Update</h2>
//                 <div>
//                     <label for="coin-name">Name*</label><br/>
//                     <div className="form-group">
//                         <input type="text" id="coin-name" placeholder="eg. Bitcoin" required/>
//                     </div>
//                 </div>
//                 <div>
//                     <label for="coin-symbol">Symbol*</label><br/>
//                     <div className="form-group">
//                         <input type="text" id="coin-symbol" placeholder="eg. BTC" required/>
//                     </div>
//                 </div>
//                 <div>
//                     <label for="coin-type">Type*</label><br/>
//                     <div className="form-group">
//                         {/* <input type="text" id="coin-type" placeholder="eg. (Presale, ICO, IEO, STO)"/> */}
//                         <select value={selectedType} onChange={handleTypeChange} required>
//                           <option value="" disabled>Select an option</option>
//                           <option value="Presale">Presale</option>
//                           <option value="ICO">ICO</option>
//                           <option value="IEO">IEO</option>
//                           <option value="STO">STO</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div>
//                     <label for="coin-name">Status*</label><br/>
//                     <div className="form-group">
//                     <select value={selectedStatus} onChange={handleStatusChange} required>
//                           <option value="" disabled>Select an option</option>
//                           <option value="Upcoming">Upcoming</option>
//                           <option value="Ongoing">Ongoing</option>
//                           <option value="Ended">Ended</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className='inner-layout'>
//                 <div className='inner'>
//                     <label>Soft Cap*</label><br/>
//                     <div className="form-group">
//                     <input type="number" id="coin-soft-cap" placeholder="eg. in numbers" required/>
//                     </div>
//                 </div>
//                 <div className='inner'>
//                     <label>Hard Cap*</label><br/>
//                     <div className="form-group">
//                     <input type="number" id="coin-hard-cap" placeholder="eg. in numbers" required/>
//                     </div>
//                 </div>
                
//                 </div>
//                 <div className='inner-layout'>
//                 <div className='inner'>
//                     <label>Chain*</label><br/>
//                     <div className="form-group">
//                     <input type="text" id="coin-chain" placeholder="eg. (Ethereum,  etc)" required/>
//                     </div>
//                 </div>
//                 <div className='inner'>
//                     <label>Chain Symbol*</label><br/>
//                     <div className="form-group">
//                         <input type="text" id="coin-chain-symbol" placeholder="eg. (ETH, BNB,  etc)" required/>
//                     </div>
//                 </div>
                
//                 </div>
//                 <div>
//                     <label for="coin-contract-add">Contract Addresses*</label><br/>
//                     <div className="form-group">
//                         <input type="text" id="coin-contract-add" placeholder="" required/>
//                     </div>
//                 </div>
    
//                 <h2>Dates</h2>
                    
//                 <div>
//                     <label>Launch Date</label><br/>
//                     <div className="form-group">
//                          <DatePicker selected={launchDate} onChange={handleLaunchDate} timeFormat='Pp'/>
//                     </div>
//                 </div>
//                 <div className='inner-layout'>
//                 <div className='inner'>
//                     <label>Start Date*</label><br/>
//                     <div className="form-group">
//                          <DatePicker selected={startDate} onChange={handleStartDate} timeFormat='Pp' required/>
//                     </div>
//                 </div>
//                 <div className='inner'>
//                     <label>End Date*</label><br/>
//                     <div className="form-group">
//                          <DatePicker selected={endDate} onChange={handleEndDate} timeFormat='Pp' required/>
//                     </div>
//                 </div>
//                 </div>
//                     {/* <div className="check">
//                         <div>
//                             <input type="checkbox" id="remember-me"/>
//                             <label for="remember-me">Remember me</label>
//                         </div>
//                         <div>
//                             <Link href="/">Forget password?</Link>
//                         </div>
//                     </div> */}
    
    
//                 {/* <center><Link href='/register'>Register Here</Link></center> */}
//           </div>
    
    
//           <div className='layout'>
//           <h2>Links</h2>
    
//                 <div>
//                     <label>Twitter*</label>
//                     <div className="form-group">
//                         <input type="text" id="coin-twitter-link" placeholder="eg. https://twitter.com/coinpresale" required/>
//                     </div>
//                 </div>
//                 <div>
//                     <label>Telegram</label>
//                     <div className="form-group">
//                         <input type="text" id="coin-telegram-link" placeholder="eg. https://t.me/coinpresale"/>
//                     </div>
//                 </div>
//                 <div>
//                     <label>Discord</label>
//                     <div className="form-group">
//                         <input type="text" id="coin-discord-link" placeholder="eg. https://discord.com/coinpresale"/>
//                     </div>
//                 </div>
//                 <div>
//                     <label>Website*</label>
//                     <div className="form-group">
//                         <input type="text" id="coin-website-link" placeholder="eg. https://coinpresale.net" required/>
//                     </div>
//                 </div>
//                 <div>
//                     <label>Discord</label>
//                     <div className="form-group">
//                         <input type="text" id="coin-coingecko-link" placeholder="eg. Bitcoin" required/>
//                     </div>
//                 </div>
//                 <div>
//                     <label>Coin Market Cap</label>
//                     <div className="form-group">
//                         <input type="text" id="coin-marketcap" placeholder="eg. https://coinmarketcap.com/currencies/bitcoin" required/>
//                     </div>
//                 </div>
//                 <div>
//                     <label>Whitepaper*</label>
//                     <div className="form-group">
//                         <input type="text" id="coin-whitepaper" placeholder="eg. Whitepaper link" required/>
//                     </div>
//                 </div>
    
//           <h2>Contact Information</h2>
                    
//                 <div>
//                     <label>Telegram*</label>
//                     <div className="form-group">
//                         <input type="text" id="coin-telegram-info" placeholder="" required/>
//                     </div>
//                 </div>
//                 <div>
//                     <label>Email*</label>
//                     <div className="form-group">
//                         <input type="email" id="coin-email-info" placeholder="" required/>
//                     </div>
//                 </div>
//           </div>
    
//             </div>
    
//             <br/><br/><br/><center><button type="submit">Submit Coin</button></center>
          
//         </div>
//         </center>
        
//       )
// }

// export default UpdateCoin