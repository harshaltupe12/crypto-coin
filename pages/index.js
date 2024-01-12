import Head from 'next/head'
import Image from 'next/image'
import { PromotedCoin } from '@/components';


  
export default function Home() {

  const cardsData = [
    { title: 'Card 1', description: 'Description for Card 1', buttonText: 'Button 1' },
    { title: 'Card 2', description: 'Description for Card 2', buttonText: 'Button 2' },
    { title: 'Card 3', description: 'Description for Card 3', buttonText: 'Button 3' },
    { title: 'Card 4', description: 'Description for Card 4', buttonText: 'Button 4' },
    { title: 'Card 5', description: 'Description for Card 5', buttonText: 'Button 5' },
    { title: 'Card 5', description: 'Description for Card 5', buttonText: 'Button 5' },
  ];

  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const chunkedCards = chunkArray(cardsData, 4);

  return (
    <>
      <div className='features'>
        <div className='features-div'>
          <p>Trending Coins</p>
          <table className=''>
            <thead>
              <tr>
              <td className='col1'>Coin</td>
              <td className='col2'>Coin Name </td>
              <td className='col3'>Type</td>
              <td className='col4'>Chain</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='td-content'>
                  <img src='images/coin1x.png'/>  
                  </div>
                </td>
                <td>
                      GigaChaggpt $GIGA
                </td>
                <td>
                  <div className='ico'>
                  ICO
                  </div>
                </td>
                <td>
                  Chain
                  </td>
              </tr>
              <tr>
                <td>
                  <div className='td-content'>
                  <img src='images/coin1x.png'/>  
                  </div>
                </td>
                <td>
                      GigaChaggpt $GIGA
                </td>
                <td>
                  <div className='ido'>
                  IDO
                  </div>
                </td>
                <td>
                  Chain
                  </td>
              </tr><tr>
                <td>
                  <div className='td-content'>
                  <img src='images/coin1x.png'/>  
                  </div>
                </td>
                <td>
                      GigaChaggpt $GIGA
                </td>
                <td>
                  <div className='ido'>
                  IDO
                  </div>
                </td>
                <td>
                  Chain
                  </td>
              </tr><tr>
                <td>
                  <div className='td-content'>
                  <img src='images/coin1x.png'/>  
                  </div>
                </td>
                <td>
                      GigaChaggpt $GIGA
                </td>
                <td>
                  <div className='ido'>
                  IDO
                  </div>
                </td>
                <td>
                  Chain
                  </td>
              </tr><tr>
                <td>
                  <div className='td-content'>
                  <img src='images/coin1x.png'/>  
                  </div>
                </td>
                <td>
                      GigaChaggpt $GIGA
                </td>
                <td>
                  <div className='ido'>
                  IDO
                  </div>
                </td>
                <td>
                  Chain
                  </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div className='features-div'>
          <p>New Listed Coins</p>
          <table>
            <thead>
              <tr>
              <td className='col1'>Coin</td>
              <td className='col2'>Coin Name </td>
              <td className='col3'>Type</td>
              <td className='col4'>Age</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='td-content'>
                  <img src='images/coin1x.png'/>  
                  </div>
                </td>
                <td>
                      GigaChaggpt $GIGA
                </td>
                <td>
                  <div className='ico'>
                  ICO
                  </div>
                </td>
                <td>
                  {/* Chain */}
                  </td>
              </tr>
              <tr>
                <td>
                  <div className='td-content'>
                  <img src='images/coin1x.png'/>  
                  </div>
                </td>
                <td>
                      GigaChaggpt $GIGA
                </td>
                <td>
                  <div className='ido'>
                  IDO
                  </div>
                </td>
                <td>
                  {/* Chain */}
                  </td>
              </tr><tr>
                <td>
                  <div className='td-content'>
                  <img src='images/coin1x.png'/>  
                  </div>
                </td>
                <td>
                      GigaChaggpt $GIGA
                </td>
                <td>
                  <div className='ido'>
                  IDO
                  </div>
                </td>
                <td>
                  {/* Chain */}
                  </td>
              </tr><tr>
                <td>
                  <div className='td-content'>
                  <img src='images/coin1x.png'/>  
                  </div>
                </td>
                <td>
                      GigaChaggpt $GIGA
                </td>
                <td>
                  <div className='ido'>
                  IDO
                  </div>
                </td>
                <td>
                  {/* Chain */}
                  </td>
              </tr><tr>
                <td>
                  <div className='td-content'>
                  <img src='images/coin1x.png'/>  
                  </div>
                </td>
                <td>
                      GigaChaggpt $GIGA
                </td>
                <td>
                  <div className='ido'>
                  IDO
                  </div>
                </td>
                <td>
                  {/* Chain */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='features-div'>
          <p>Fear & Greed Index</p>
        </div>
      </div>

      {/* <button>PROMOTED COIN</button> */}
      <center><div className='promoted-name'>PROMOTED COIN</div></center>
      <div className='promoted-div'>
      {chunkedCards.map((row, rowIndex) => (
        <span key={rowIndex}>
          {row.map((card, index) => (
            <PromotedCoin
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
            />
          ))}
        </span>
      ))}
      </div>
    </>
  )
}