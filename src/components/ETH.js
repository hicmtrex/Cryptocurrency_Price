import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { EthCoin } from './api/CryptoAxios'

export default function Doge() {
    const [crypto, setCrypto] = useState([]);

    
    const fetchEth =  async() => {
        const response = await axios.get(EthCoin)
        const dataEth = response.data.ticker;

        const ethApi = {
            key:dataEth.volume,
            price: dataEth.markets[2].price,
            name: dataEth.base
        }
        setCrypto(ethApi)
}


    useEffect(() => {
        const dogeTime = setInterval(() => {
            fetchEth()
             }, 500);
             return () => {
         clearInterval(dogeTime)
           };
       }, [fetchEth])

    return (
        <div className="col-md-3">
            <h2>
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="" />
                {crypto.name} COIN

            </h2>
            <h2><b className="text-danger">{crypto.price}</b>$</h2>
        </div>
    )
}
