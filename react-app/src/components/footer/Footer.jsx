import React from 'react'
import "./footer.css"
import "../../styles/styles.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerContainer">
            <p>© 2024 West Bestern. All rights reserved.</p>
            <div className="urlContainer">
                <a href="#">Terms of Use</a>
                <span className='url-divider'></span>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Footer