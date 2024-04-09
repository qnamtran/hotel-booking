import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons'
import Search from '../search/Search';

import "./header.css"
import "../../styles/styles.css"

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerHero">
                    <div className="heroTitle">
                        <div className="roomAvailableTag">Room available • <Link to='/rooms'><span>Book Now</span></Link></div>
                        <h1 className="heroMainTitle mainTitle">Kick off the new year with a new stay</h1>
                        <p className="heroSubtitle">Sunnier days are ahead, and West Bestern has a stay to warm your spirits. Indulge in a tranquil stay and rejuvenate your mind, body, and soul.</p>
                        <div className="heroBenefits">
                            <div className='heroBenefitItem'>
                                <div className='benefitIcon'><FontAwesomeIcon icon={faCartFlatbedSuitcase} /> </div>
                                <div className='benefitText'>
                                    <h2>24 hours</h2>
                                    <p>Customer Service</p>
                                </div>
                            </div>
                            <div className='heroBenefitItem'>
                                <div className='benefitIcon'><FontAwesomeIcon icon={faCreditCard} /> </div>
                                <div className='benefitText'>
                                    <h2>No charge</h2>
                                    <p>Until you check in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heroImage">
                        <img src="/images/hero-img.png" alt="" />
                    </div>
                </div>
                <Search/>
            </div>
        </div>
    )
}

export default Header
