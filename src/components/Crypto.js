import Doge from './Doge';
import ETH from './ETH';
import BTC from './BTC';
import ADA from './ADA';

export default function Cryptos() {
 
    return (
        <div className="row">
       
            <Doge />
        
            <ETH />

            <BTC />
            <ADA />
          
        </div>
      
    );
};
