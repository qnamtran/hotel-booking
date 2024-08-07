import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import "./account.css"
import "../../styles/styles.css"
import Topbar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Booking from '../../components/booking/Booking'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const Account = () => {
  const [bookings, setBookings] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUserId(userData._id); // Set the userId from user data stored in localStorage
    }
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`/bookings/user/${userId}`);
        // Sort bookings from newest to oldest based on createdAt date
        const sortedBookings = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBookings(sortedBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    if (userId) {
      fetchBookings();
    }
  }, [userId]);

  const userData = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  // State variables for password change form
  const [showPassword, setShowPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  // Function to handle password change
  const handlePasswordChange = async () => {

    try {
      setError('');
      // New Password validation
      if (!newPassword || newPassword.length < 8) {
        setPasswordError('Password must have minimum 8 characters');
        return;
      }
      const res = await axios.post('/auth/change-password', {
        userId: userData._id,
        currentPassword,
        newPassword
      });

      if (res.status === 200) {
        // Reload the page
        setSuccessMessage('Password is successfully updated');
      }
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handleClose = () => {
    setCurrentPassword('');
    setNewPassword('');
    setPasswordError('')
    setError('');
    setSuccessMessage('');
  }

  // State to track whether the login modal is open
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);

  // Function to close login modal
  const closeChangePasswordModal = () => {
    setIsChangePasswordModalOpen(false);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');
    // Redirect to homepage
    navigate('/');
    // Reload the page
    window.location.reload();
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className='account'>
        <div className="accountContainer">
          <div className="myBooking">
            <div className="myBookingHeader">My Booking</div>
            <div className="myBookingList">
              {bookings.map((bookingDetailData) => (
                <Booking key={bookingDetailData._id} bookingDetailData={bookingDetailData} />
              ))}
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
              <Popup trigger={<a className="nobg-btn">Change My Password</a>}
                modal nested
                open={isChangePasswordModalOpen}
                onClose={() => {
                  handleClose();
                  closeChangePasswordModal();
                }}>
                {
                  close => (
                    <div className='modal'>
                      <div>
                        <span className='close-btn' onClick=
                          {() => { handleClose(); close(); }}>
                          <FontAwesomeIcon icon={faCircleXmark} />
                        </span>
                      </div>
                      <div className='content'>
                        <div className="formPopup">
                          <h1>Change Password</h1>
                          <div className="inputContainer">
                            <div className="inputItem">
                              <label className='label-md'>Current Password</label>
                              <input
                                type={showPassword ? "text" : "password"} // Use conditional rendering based on showPassword state
                                placeholder="Current Password"
                                value={currentPassword}
                                onChange={e => setCurrentPassword(e.target.value)}
                                className="input-md"
                              />
                              {error && <p className="error-message">{error.message}</p>}
                            </div>
                            <div className="inputItem">
                              <label className='label-md'>New Password</label>
                              <input
                                type={showPassword ? "text" : "password"} // Use conditional rendering based on showPassword state
                                placeholder="New Password"
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                                className="input-md"
                              />
                              {passwordError && <p className="error-message">{passwordError}</p>}
                            </div>
                            <div className="passwordOptions">
                              <div className="checkboxItem">
                                <input type="checkbox" id='showPassword' className='checkBox' checked={showPassword} onChange={togglePasswordVisibility} />
                                <label htmlFor='showPassword'>Show Password</label>
                              </div>
                            </div>
                          </div>
                          <button className='primary-btn' onClick={handlePasswordChange}>Update Password</button>
                          {successMessage && <p className='success-message'>{successMessage}</p>}
                        </div>
                      </div>
                    </div>
                  )
                }
              </Popup>
            </div>
            <button className="logout-btn animated-btn" onClick={handleLogout}>Logout <span className='icon'><FontAwesomeIcon icon={faArrowRightFromBracket} /></span></button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Account