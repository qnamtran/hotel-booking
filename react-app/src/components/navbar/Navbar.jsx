import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

import "./navbar.css"
import "../../styles/styles.css"

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">West Bestern</span>
            <div className="navItems">
            
            <Popup trigger=
                {<button className="rounded-btn secondary-btn ">Login</button>} 
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
                                <div className="loginPopup">
                                  <h1>Login</h1>
                                  <div className="inputContainer">
                                    <div className="inputItem">
                                      <label className='label-md'>Email Address</label>
                                      <input type="email" placeholder='Enter Email Address' id='email' className='input-md' />
                                    </div>
                                    <div className="inputItem">
                                      <label className='label-md'>Password</label>
                                      <input type="password" placeholder='Enter Password' id='email' className='input-md' />
                                    </div>
                                  </div>
                                  <button className='primary-btn'n>Login</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Popup>
            <button className="rounded-btn primary-btn">Create an account</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar
