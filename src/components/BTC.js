import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { BtcCoin } from './api/CryptoAxios'

export default function Doge() {
    const [crypto, setCrypto] = useState([]);

    const fetchDoge =  async() => {
        const response = await axios.get(BtcCoin)
        const dataBtc = response.data.ticker;

        const btcApi = {
            key:dataBtc.volume,
            price: dataBtc.markets[2].price,
            name: dataBtc.base
        }
        setCrypto(btcApi)
}
    useEffect(() => {
        const dogeTime = setInterval(() => {
            fetchDoge()
             }, 500);
             return () => {
         clearInterval(dogeTime)
           };
    }, [fetchDoge])
    
    return (
        <div className="col-md-3 ">
            <h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png" alt="" />
                {crypto.name} COIN</h2>
            <h2><b className="text-danger">{crypto.price}</b>$</h2>
        </div>
    )
}
