import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { Dogecoin } from './api/CryptoAxios'

export default function Doge() {
    const [crypto, setCrypto] = useState([]);

    
    const fetchDoge = async () => {
  
        const response = await axios.get(Dogecoin)
        const dataDoge = response.data.ticker;
  
        const dogeApi = {
            key:dataDoge.volume,
            price: dataDoge.markets[2].price,
            name: dataDoge.base
        }
        setCrypto(dogeApi)
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
        <div className="col-md-3">
                       
            <h2> <img className="" src="https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png" alt="" />
                {crypto.name} COIN
            </h2>
            <h2><b className="text-danger">{crypto.price}</b>$</h2>
        </div>
    );
};
