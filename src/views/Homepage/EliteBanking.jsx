import React from 'react';
import eliteBankingFigure from '../../assets/img/group-531.png';
import relationship from '../../assets/img/group-1096.svg';
import wealthmanagement from '../../assets/img/group-1097.svg';
import global from '../../assets/img/group-0841.svg';
import extended from '../../assets/img/group-1099.svg';
import './elite-banking.css';

function EliteBanking() {
  return (
    <section className='content-wrapper has-animation py-0'>
      <div className='wrapper'>
        <div className='solutions py-0 elite'>
          <div className='col left py-3 w-20'>
            <div className='block'>
              <h3 className='section-title'>
                SILIKI{' '}
                <span className='light'>
                  <br /> SECURITY
                </span>
              </h3>
              <p>
               Company head office is based in Gauteng however whenever 
              I get big client countrywide I will always setup remote office next to the client 
              for better control and better management of security personnel.
              </p>
              <a href='#' className='link-btn'>
                Explore more
              </a>
            </div>
          </div>
          <div className='col right'>
            <div className='elite-benefits'>
              <div className='elite-benefits_figure'>
                <img src={eliteBankingFigure} alt='' />
              </div>
              <div className='elite-benefits_content bg-black'>
                <h3>Enjoy Our Services</h3>
                <div className='elite-benefits_items'>
                  <div className='benefit'>
                    <img src={relationship} alt='' />
                    <h4>Dedicated Relationship Manager</h4>
                  </div>
                  <div className='benefit'>
                    <img src={wealthmanagement} alt='' />
                    <h4>Information & Solutions</h4>
                  </div>
                  <div className='benefit'>
                    <img src={global} alt='' />
                    <h4>Security Resources</h4>
                  </div>
                  <div className='benefit'>
                    <img src={extended} alt='' />
                    <h4>Extended Protection Benefit</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EliteBanking;
