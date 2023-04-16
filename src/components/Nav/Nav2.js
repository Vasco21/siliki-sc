import React from 'react';
import LogoImage from '../../assets/img/logo.png';
import OpenAccount from '../../assets/img/group-13680.svg';
import GetLoan from '../../assets/img/group-13583.svg';
import Investments from '../../assets/img/group-13492.svg';
import './nav2.css';

function Nav2() {
  return (
    // <!-- header -->
    <header>
      {/* <!-- top-section --> */}
      <div className='top-section'>
        <div className='wrapper'>
          <a href='index.html' className='logo'>
            <img src={LogoImage} width='170' alt='SBM Bank' />
          </a>
          {/* <!-- secondary-nav --> */}
          <ul className='secondary-nav'>
            <li>
              <a href='about-us.html'>About Us</a>
            </li>
            <li>
              <a href='investor-relations.html'>Our Services</a>
            </li>
            <li>
              <a href='careers.html'>Careers</a>
            </li>
            <li>
              <a href='support.html'>Contacts</a>
            </li>
            <li>
              <a href='newsroom.html'>Updates</a>
            </li>
          </ul>
          {/* <!-- secondary-nav end --> */}
          <a href='#' className='btn-menu icon-menu'></a>
        </div>
      </div>
      {/* <!-- top-section end -->
       <!-- bottom-section --> */}
      <div className='bottom-section'>
        <div className='wrapper'>
          {/* <!-- main_nav --> */}
          <ul id='main_nav'>
            <li>
              <a href='for-you.html'>For You</a>
              <ul className='main_nav-dropdown hidden'>
                <div className='main_nav-wrap-category'>
                  <div className='main_nav-category'>
                    <div className='main_nav-category-title'>
                      <a href='javascript:void(0)'>
                        <img src={OpenAccount} alt='' />
                        <h4>Join Siliki Security</h4>
                      </a>
                    </div>
                    <div className='main_nav-category-links'>
                      <ul>
                        <li>
                          <a href='javascript:void(0)'>Get our Membership</a>
                        </li>
                        <li>
                        <a href='javascript:void(0)'>Get our Membership</a>
                        </li>
                        <li>
                        <a href='javascript:void(0)'>Get our Membership</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='main_nav-category'>
                    <div className='main_nav-category-title'>
                      <a href='javascript:void(0)'>
                        <img src={GetLoan} alt='' />
                        <h4>Stay Protected</h4>
                      </a>
                    </div>
                    <div className='main_nav-category-links'>
                      <ul>
                        <li>
                        <a href='javascript:void(0)'>Get our Membership</a>
                        </li>
                        <li>
                        <a href='javascript:void(0)'>Get our Membership</a>
                        </li>
                        <li>
                        <a href='javascript:void(0)'>Get our Membership</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='main_nav-category'>
                    <div className='main_nav-category-title'>
                      <a href='javascript:void(0)'>
                        <img src={Investments} alt='' />
                        <h4>Investments</h4>
                      </a>
                    </div>
                    <div className='main_nav-category-links'>
                      <ul>
                        <li>
                        <a href='javascript:void(0)'>Get our Membership</a>
                        </li>
                        <li>
                        <a href='javascript:void(0)'>Get our Membership</a>
                        </li>
                        <li>
                        <a href='javascript:void(0)'>Get our Membership</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <a href='#'>For Business</a>
            </li>
            <li>
              <a href='#'>For Corporates and Institutions</a>
            </li>
            <li>
              <a href='for-diaspora.html'>For Training</a>
            </li>
            <li>
              <a href='ways-of-banking.html'>Ways to Join</a>
            </li>
          </ul>
          <form className='header-search'>
            <input type='search' placeholder='Search' />
            <button type='submit' className='icon-search'></button>
          </form>
     
        </div>
      </div>
   
    </header>
  );
}

export default Nav2;
