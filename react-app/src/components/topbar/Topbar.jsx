import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocation, faLocationDot, faMapPin, faMarker, faMobilePhone, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

import "./topbar.css"
import "../../styles/styles.css"

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topContainer">
            <div className="hotelInfo">
                <div className="hotelInfoItem">
                    <span><FontAwesomeIcon icon={faLocationDot}/></span>
                    <p>3241 Elder Lane, Thunder Bay, P7E5P5, ON</p>
                </div>
                <div className="hotelInfoItem">
                    <span><FontAwesomeIcon icon={faPhoneSquare}/></span>
                    <p>+1 807-709-8998</p>
                </div>
                <div className="hotelInfoItem">
                    <span><FontAwesomeIcon icon={faEnvelope}/></span>
                    <p>hello@westbestern.com</p>
                </div>
            </div>
            
            
            <Popup trigger=
                {<a className='contact-btn'>Contact Us</a>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div>
                                <span className='close-btn' onClick=
                                    {() => close()}>
                                        <FontAwesomeIcon icon={faCircleXmark}/>
                                </span>
                            </div>
                            <div className='content'>
                                <div className="hotelInfoPopup">
                                    <h2>Contact Us</h2>
                                    <div className="hotelInfoItem hotelInfoPopupItem">
                                        <span><FontAwesomeIcon icon={faLocationDot}/></span>
                                        <p>3241 Elder Lane, Thunder Bay, P7E5P5, ON</p>
                                    </div>
                                    <div className="hotelInfoItem hotelInfoPopupItem">
                                        <span><FontAwesomeIcon icon={faPhoneSquare}/></span>
                                        <p>+1 807-709-8998</p>
                                    </div>
                                    <div className="hotelInfoItem hotelInfoPopupItem">
                                        <span><FontAwesomeIcon icon={faEnvelope}/></span>
                                        <p>hello@westbestern.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Popup>
            <div className="socialMedia">
                <a href='#' className="socialMediaItem"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href='#' className="socialMediaItem"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href='#' className="socialMediaItem"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href='#' className="socialMediaItem"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
        </div>
    </div>
  )
}

export default Topbar