import React from 'react'
import "./account.css"
import "../../styles/styles.css"
import Topbar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Booking from '../../components/booking/Booking'

const Account = () => {
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
              <div className="textContainer">
                <div className="textTitle">Full Name</div>
                <div className="textData">Alex Tran</div>
              </div>
              <div className="textContainer">
                <div className="textTitle">Email Address</div>
                <div className="textData">qnam.can@gmail.com</div>
              </div>
              <div className="textContainer">
                <div className="textTitle">Phone Number</div>
                <div className="textData">8077098998</div>
              </div>
              <button className="secondary-btn">Edit My Info</button>
              <button className="nobg-btn">Change My Password</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Account