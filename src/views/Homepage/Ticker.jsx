import React from 'react';
import './ticker.css';

function Ticker() {
  return (
    <div id='ticker' className='bg-gray py-1 h-auto'>
      <div className='wrapper'>
        <div className='col left'>
          <span className='label text-lg'>Breaking news</span>
        </div>
        <div className='col right'>
          <ul id='forex-ticker'>
            <li>
              <span className='currency'>VASCO:</span> Eddie,
                Eti
            </li>
            <li>
              <span className='currency'>Tomorrow</span> all the plan, 
              opening for new application 
            </li> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ticker;
