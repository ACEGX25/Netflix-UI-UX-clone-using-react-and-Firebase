import React from 'react'
import './Footer.css'
// import facebook_icon from '../../assets/facebook_icon.png'
// import instagram_icon from '../../assets/instagram_icon.png'
// import twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      {/* <div className="footericon">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
      </div> */}
      <div className="help">
      Questions? Call 000-800-919-1694
      </div>
      <ul>
        <li>Audio Desciption</li>
        <li>Help Center</li>
        <li>gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefrences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright">© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
