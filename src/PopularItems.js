import React from 'react'
import Onsaleitem from './Onsaleitem';

function PopularItems() {
  return (
    <div className='onsale'>
        <div className="title">
        Popular Items
        </div>
        <div className="onsaleslider">
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        </div>
        <div className="onsaleslider">
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        </div>
        <div className="onsaleslider">
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        </div>
        <div className="onsaleslider">
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        </div>
        <div className="onsaleslider">
        <Onsaleitem/>
        <Onsaleitem/>
        <Onsaleitem/>
        </div>
    </div>
  )
}

export default PopularItems