import React from 'react';
import branch from '../../assets/img/branch.svg';
import rates from '../../assets/img/rates.svg';
import contact from '../../assets/img/contact.svg';
import faq from '../../assets/img/faq.svg';
import './banking-tools.css';

function Tools() {
  return (
    <section
      className='content-wrapper has-animation pt-0'
      data-vp-add-class='visible'
    >
      <div className='wrapper'>
        <h2 className='section-title'>More Info about our Contacts</h2>
        <ul className='banking-tools'>
          <li>
            <a href='branches.html'>
              <img src={branch} width='44' height='44' alt='' />
              <span>228 Tlamatlama Section Tembisa Kempton Park 1632</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={rates} width='33' height='44' alt='' />
              <span>Company Registration</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={contact} width='33' height='44' alt='' />
              <span>Contact: +2773 894 2949 <br />Contact:  +2773 943 5768  </span>
            </a>
          </li>
          <li>
            <a href='faqs.html'>
              <img src={faq} width='44' height='44' alt='' />
              <span>
              giftmashasha85@gmail.com
                <br />
                Asked Questions
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Tools;
