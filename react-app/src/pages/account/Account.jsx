import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import "./account.css"
import "../../styles/styles.css"
import Topbar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Booking from '../../components/booking/Booking'

const Account = () => {
  const userData = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className='account'>
        <div className="accountContainer">
          <div className="myBooking">
            <div className="myBookingHeader">My Booking</div>
            <div className="myBookingList">
              <Booking />
              <Booking />
            </div>
          </div>
          <div className="myInfo">
            <div className="myInfoHeader">My Info</div>
            <div className="myInfoContainer">
              {userData && (
                <>
                  <div className="textContainer">
                    <div className="textTitle">Full Name</div>
                    <div className="textData">{userData.name}</div>
                  </div>
                  <div className="textContainer">
                    <div className="textTitle">Email Address</div>
                    <div className="textData">{userData.email}</div>
                  </div>
                </>
              )}
              <button className="secondary-btn">Edit My Info</button>
              <a className="nobg-btn">Change My Password</a>
            </div>
            <button className="logout-btn animated-btn">Logout <span className='icon'><FontAwesomeIcon icon={faArrowRightFromBracket} /></span></button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Account