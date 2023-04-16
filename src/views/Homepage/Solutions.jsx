import React from 'react';

import sol1 from '../../assets/img/solutions/solution1.png';
import sol2 from '../../assets/img/solutions/solution2.png';
import sol3 from '../../assets/img/solutions/solution1.png';
import './solutions.css';

function Solutions() {
  return (
    <section className='content-wrapper has-animation'>
      <div className='wrapper'>
        <div className='solutions first-fold'>
          <div className='col left'>
            <div className='block'>
              <h2 className='section-title'>
                Solutions
                <br />
                <span className='light'>for you</span>
              </h2>
              <p>
              We Provides proactive security services and cutting-edge smart technology to deliver evolving, 
              tailored solutions that allow clients to focus on their core business
              </p>
              <a href='#' className='link-btn'>
                All Services for you
              </a>
            </div>
          </div>
          <div className='col right products-slider owl-carousel'>
            <div className='block'>
              <div className='product'>
                <img src={sol1} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>
                    Security Personal
                  </h3>
                  <p>
                    You need professional security officers on-site to handle your security and patrol needs.
                    Dont worry all your problems are solved. 
                  </p>
                  <a href='#' className='primary-btn'>
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={sol2} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>Our Approach to Security Solutions</h3>
                  <p>
                    We focus on client success and creating partnerships rooted in quality and 
                    value are at the heart of everything we do here at Siliki Security.
                    Our client-focused, risk-based approach delivers integrated security
                    solutions to help mitigate risk and increase compliance.
                    Carefully screened, highly trained security officers who are sensitive to 
                    your unique business environment provide the safety and security you require with the professionalism you desire. 
                  </p>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={sol3} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>
                    Security Resources & Information
                  </h3>
                  <p>
                    We offer everything and security resources at your disposal.
                  </p>
                  <p>
                    How Much Does Security Cost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <p>
          We take a personalized approach to fully understanding your business security needs, which starts with immersing ourselves in your culture, mission, and values. We then create a security solution that not only meets your needs but also anticipates issues. The result is a customized, proactive security solution that gives you the freedom to create, produce and innovate with your core business. And although changes can be difficult in any organization, your security program transition will be efficient, smooth and painless—and completely transparent to your customers.
          </p>
    </section>
  );
}

export default Solutions;
