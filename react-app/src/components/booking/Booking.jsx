import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./booking.css"
import "../../styles/styles.css"

const Booking = () => {
    return (
        <div className='booking'>
            <div className="bookingContainer">
                <div className="bookingIdContainer">
                    <div className="bookingIdTag">Booking ID: <span>#12090493445</span></div>
                    <div className="roomNumberTag">Room: <span>301</span></div>
                </div>
                <h2 className='roomTitle'>2 Queen Beds Room</h2>
                <div className="bookingInfo">
                    <div className="textContainer">
                        <div className="textTitle">Check-in Date</div>
                        <div className="textData">2024/02/18</div>
                    </div>
                    <div className="textContainer">
                        <div className="textTitle">Check-out Date</div>
                        <div className="textData">2024/02/20</div>
                    </div>
                    <div className="textContainer">
                        <div className="textTitle">Guests and Beds</div>
                        <div className="textData">2 adult(s) • 2 children • 2 bed(s)</div>
                    </div>
                </div>
                <div className="bookingDivider"></div>
                <div className="bookingCallToAction">
                    <div className="bookingCost">
                        <div className="bookingTotalCostTitle">Total Cost</div>
                        <div className="bookingTotalCost">CAD 387.00</div>
                    </div>
                    <button className="secondary-btn animated-btn hover-effect-btn">Request Service <span className='icon'><FontAwesomeIcon icon={faArrowRight} /></span></button>
                </div>

            </div>
        </div>
    )
}

export default Booking