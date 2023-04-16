import React from 'react';
import sol4 from '../../assets/img/solutions/solution4.png';
import sol5 from '../../assets/img/solutions/solution4.png';
import sol6 from '../../assets/img/solutions/solution4.png';

import './business-solutions.css';

function BusinessSolutions() {
  return (
    <section className='content-wrapper dark has-animation'>
      <div className='wrapper'>
        <div className='solutions'>
          <div className='col left'>
            <div className='block'>
              <h2 className='section-title'>
                About{' '}
                <span className='light'>
                  Our
                  <br />
                  Siliki Security
                </span>
              </h2>
              <p>
              Siliki Security Company Pty Limited is an entity registered in 2017,
              Company is operating from 228 Tlamatlama Section Tembisa.
              </p>
              <a href='#' className='link-btn'>
                About Us
              </a>
            </div>
          </div>
          <div className='col right products-slider owl-carousel'>
            <div className='block'>
              <div className='product'>
                <img src={sol4} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>
                    Company overview
                  </h3>
                  <p>Company id currently registered as a diamond dealing company with South
                     African Diamond Regulator and is for this reason that am 
                    intending to run Security Company as well as train the security personnel.
                    </p>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={sol5} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>Industry AnalysisI</h3>
                  <p>
                  Looking into security industry I have identified a gap of household security, shops and malls, 
                  railway lines and so forth where upon my research I saw it fit to venture into the business
                  </p>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={sol6} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>
                  Costumer Analysis{' '}
                  </h3>
                  <p>Most of the targeted customers will be malls, 
                    shopping centres and private houses due to very high Crime rate in the country
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessSolutions;
