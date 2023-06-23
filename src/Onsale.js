import React from 'react'
import Onsaleitem from './Onsaleitem'
import './Onsale.css';

function Onsale() {
  return (
    <div className='onsale'>
        <div className="title">
        This week's extra prices
        </div>
        <div className="onsaleslider">
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        </div>
    </div>
  )
}

export default Onsale