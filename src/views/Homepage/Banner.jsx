import React from 'react';
import banner4 from '../../assets/img/banners/banner3.png';
import banner3 from '../../assets/img/banners/banner1.png';
import banner2 from '../../assets/img/banners/banner1.png';
import banner1 from '../../assets/img/banners/banner2.png';
import banner from '../../assets/img/banners/banner3.png';
import './banner.css';

function Banner() {
  return (
    <section className='sliding-banner owl-carousel'>
      <div className='item'>
        <div className='col left'>
          <h2 className='section-title large'>
            We aim to provide you with the everything you need to be protected, for a{' '}
            <span className='light'>better tomorrow. </span>
          </h2>
          <a
            className='primary-btn'
            data-fancybox
            href='#'
          >
            See what tomorrow holds
          </a>
        </div>
        <div
          className='col right'
          style={{
            backgroundImage: `url(${banner4})`,
          }}
        ></div>
      </div>
      <div className='item'>
        <div className='col left'>
          <h2 className='section-title large'>
            SILIKI Security company is a <span className='light'>strong combat</span>{' '}
            with professional security guard.
          </h2>
          <a href='#' className='primary-btn'>
            Learn More
          </a>
        </div>
        <div
          className='col right'
          style={{ backgroundImage: `url(${banner3})` }}
        ></div>
      </div>
      <div className='item'>
        <div className='col left'>
          <h2 className='section-title large'>
            We are the company of choice{' '}
            <span className='light'>for your business</span>
          </h2>
          <a href='#' className='primary-btn'>
            Discover Solutions
          </a>
        </div>
        <div
          className='col right'
          style={{
            backgroundImage: `url(${banner2})`,
          }}
        ></div>
      </div>
      <div className='item'>
        <div className='col left'>
          <h2 className='section-title large'>
            You have a need, we have <span className='light'>a solution</span>
          </h2>
          <a href='#' className='primary-btn'>
            Explore SILIKI SECURITY
          </a>
        </div>
        <div
          className='col right'
          style={{
            backgroundImage: `url(${banner1})`,
          }}
        ></div>
      </div>
      <div className='item'>
        <div className='col left'>
          <h2 className='section-title large'>
            We want to partner with you{' '}
            <span className='light'>at every step</span>
          </h2>
          <a href='#' className='primary-btn'>
            Learn More
          </a>
        </div>
        <div
          className='col right'
          style={{
            backgroundImage: `url(${banner})`,
          }}
        ></div>
      </div>
    </section>
  );
}

export default Banner;
