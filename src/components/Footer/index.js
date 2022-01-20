import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './footer.css'

const Footer = () => {
  return (
    <Router>
  <div className="footer-wrapper">
      <div className="footer-logo-dropdown">
        <div className="logo">
        <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="logo"
          />
        </div>
        <div className="dropdowns">
          <p><i class="fa fa-compass"></i> India <i class="fa fa-angle-down"></i></p>
          <p><i class="fa fa-globe"></i> English <i class="fa fa-angle-down"></i></p>
        </div>
      </div>

      <div className="footer-menu">
        <div className="company space">
          <h4>COMPANY</h4>
          <p><Link to="/">Who We Are</Link></p>
          <p><Link to="/">Blog</Link></p>
          <p><Link to="/">Careers</Link></p>
          <p><Link to="/">Report Fraud</Link></p>
          <p><Link to="/">Contact</Link></p>
          <p><Link to="/">Investor Relations</Link></p>
        </div>

        <div className="foodies space">
        <h4>FOR FOODIES</h4>
        <p><Link to="/">Code of Conduct</Link></p>
        <p><Link to="/">Community</Link></p>
        <p><Link to="/">Blogger Help</Link></p>
        <p><Link to="/">Mobile Apps</Link></p>
        </div>

        <div className="restaurants-enterprise space">
          <div className="restaurants">
          <h4>FOR RESTAURANTS</h4>
          <p><Link to="/">Add Restaurant</Link></p>
          </div>
          <div className="enterprises space">
          <h4>FOR ENTERPRISES</h4>
          <p><Link to="/">Zomato for Work</Link></p>
          </div>
        </div>

        <div className="for-you space">
        <h4>FOR YOU</h4>
        <p><Link to="/">Privacy</Link></p>
        <p><Link to="/">Terms</Link></p>
        <p><Link to="/">Security</Link></p>
        <p><Link to="/">Sitemap</Link></p>
        </div>

        <div className="social-links space">
        <h4>SOCIAL LINKS</h4>
        <div className="social-icons">
        <i class="fa fa-facebook-f"></i>
        <i class="fa fa-twitter"></i>
        <i class="fa fa-instagram"></i>
        </div>
        <div className="download-source">
        <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" />
        <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" />
        </div>
        </div>
      </div>
      <hr size="1" color="lightgrey"/>
      <p className="copyright-text">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008
        -2022 © Zomato™ Ltd. All rights reserved.</p>
  </div>;
  </Router>
  )
};

export default Footer;
