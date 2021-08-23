import React, { Fragment } from 'react'
import Cryptos from './components/Crypto';
import './App.css'



function App() {

  return (
    <Fragment>
      <h1 className="text-center mt-5">Cryptocurrency Price</h1>
    <div className="container">
      <Cryptos/>
     
      </div>
      </Fragment>
  )
}

export default App
