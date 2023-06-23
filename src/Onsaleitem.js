import React, { useEffect, useState } from 'react'
import './Onsaleitem.css';
import breadpic from '../src/images/bread.png'

function Onsaleitem(props) {
    return (
        <div className="box">
            < img src={breadpic} className="img" />
            <div className='category'>{props.category}</div>
            <div className='itemtitle'>{props.title}</div>
            <div className="attrib">
                <span>100g</span>
                <span>Spain</span>
            </div>
            <div className="money">
                <div>
                    <div>49</div>
                    <span>253 - 49%</span>
                </div>
                <span>SEK {props.price}/kg</span>
            </div>
            <button class="btn">
                <div className="gft">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default Onsaleitem