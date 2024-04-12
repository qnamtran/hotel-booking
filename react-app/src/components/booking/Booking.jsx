import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./booking.css"
import "../../styles/styles.css"

const Booking = ({ bookingDetailData }) => {
    return (
        <div className='booking'>
            <div className="bookingContainer">
                <div className="bookingIdContainer">
                    <div className="bookingIdTag">Booking ID: <span>#{bookingDetailData._id.slice(-8).toUpperCase()}</span></div>
                    <div className="roomNumberTag">Room: <span>{bookingDetailData.roomNumber}</span></div>
                </div>
                <h2 className='roomTitle'>{bookingDetailData.roomName}</h2>
                <div className="bookingInfo">
                    <div className="textContainer">
                        <div className="textTitle">Check-in Date</div>
                        <div className="textData">{new Date(bookingDetailData.checkInDate).toLocaleDateString()}</div>
                    </div>
                    <div className="textContainer">
                        <div className="textTitle">Check-out Date</div>
                        <div className="textData">{new Date(bookingDetailData.checkOutDate).toLocaleDateString()}</div>
                    </div>
                </div>
                <div className="bookingDivider"></div>
                <div className="bookingCallToAction">
                    <div className="bookingCost">
                        <div className="bookingTotalCostTitle">Cost per night</div>
                        <div className="bookingTotalCost">CAD {bookingDetailData.costPerNight}</div>
                    </div>
                    <button className="secondary-btn animated-btn hover-effect-btn">Request Service <span className='icon'><FontAwesomeIcon icon={faArrowRight} /></span></button>
                </div>

            </div>
        </div>
    )
}

export default Booking