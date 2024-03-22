import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { AuthContext } from "../../context/AuthContext";

import "./navbar.css"
import "../../styles/styles.css"

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Navbar = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()

  // State to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State to track email input value
  const [email, setEmail] = useState('');

  // State to track full name input value
  const [name, setName] = useState('');

  // State to track password input value
  const [password, setPassword] = useState('');

  // State to track email validation error 
  const [emailError, setEmailError] = useState('');

  // State to track full name validation error 
  const [nameError, setNameError] = useState('');

  // State to track password validation error 
  const [passwordError, setPasswordError] = useState('');

  // State to track whether the login modal is open
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // State to track whether the register modal is open
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  // Function to handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(''); // Clear previous error message when input changes
  };

  // Function to handle full name input change
  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(''); // Clear previous error message when input changes
  };

  // Function to handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(''); // Clear previous error message when input changes
  };


  // Function to handle close button click
  const handleClose = () => {
    setName('');
    setEmail('');
    setPassword('');
    setEmailError('');
    setNameError('');
    setPasswordError('');
  };

  // Function to open login modal
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  // Function to close login modal
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // Function to open create account modal
  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  // Function to close create account modal
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  // Function to handle login form submission
  const handleLoginSubmit = async () => {
    try {
      // Email validation
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        setEmailError('Please enter a valid email address.');
        return;
      }
      if (!password) {
        setPasswordError('Please enter your password.');
        return;
      }
      const res = await axios.post('/auth/login', { email, password });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      // Handle login error
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  // Function to handle register form submission
  const handleRegisterSubmit = async () => {
    try {
      // Full name validation
      if (!name) {
        setNameError('Please enter your full name');
        return;
      }
      // Email validation
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        setEmailError('Please enter a valid email address.');
        return;
      }
      // Create Password validation
      if (!password || password.length < 8) {
        setPasswordError('Password must have minimum 8 characters');
        return;
      }

      const res = await axios.post('/auth/register', { name, email, password });

      if (res.status === 200) {
        // Close the registration modal
        closeRegisterModal();
        // Redirecting the user to the login page
        openLoginModal();
      }
    } catch (err) {

    }

  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/'><span className="logo">West Bestern</span></Link>
        {user ? (
          <div className="user-account">
            <Link to="/account"><button className="secondary-btn rounded-btn">{user.name} <span className="icon"><FontAwesomeIcon icon={faUser} /></span></button></Link>
          </div>
        ) : (
          <div className="navItems">
            <Popup trigger=
              {<button className="rounded-btn secondary-btn ">Login</button>}
              modal nested
              open={isLoginModalOpen}
              onClose={() => {
                handleClose();
                closeLoginModal();
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
                        <h1>Login</h1>
                        <div className="inputContainer">
                          <div className="inputItem">
                            <label className='label-md'>Email Address</label>
                            <input
                              type="email"
                              placeholder="Enter Email Address"
                              id="email"
                              className="input-md"
                              value={email}
                              onChange={handleEmailChange}
                            />
                            {emailError && <p className="error-message">{emailError}</p>}
                          </div>
                          <div className="inputItem">
                            <label className='label-md'>Password</label>
                            <input
                              type={showPassword ? "text" : "password"} // Use conditional rendering based on showPassword state
                              placeholder="Enter Password"
                              id="password"
                              className="input-md"
                              value={password}
                              onChange={handlePasswordChange}
                            />
                            {passwordError && <p className="error-message">{passwordError}</p>}
                          </div>
                          <div className="passwordOptions">
                            <div className="checkboxItem">
                              <input type="checkbox" id='showPassword' className='checkBox' checked={showPassword} onChange={togglePasswordVisibility} />
                              <label htmlFor='showPassword'>Show Password</label>
                            </div>
                            <a href="" className='nobg-btn forgot-pw-btn'>Forgot Password?</a>
                          </div>
                        </div>
                        <button disabled={loading} className='primary-btn' onClick={handleLoginSubmit}>Login</button>
                        {error && <span>{error.message}</span>}
                        <div className="register">
                          <p>Don't have an account?</p>
                          <a className='nobg-btn accent-btn' onClick={() => {
                            close();
                            openRegisterModal();
                          }}>Register</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </Popup>

            <Popup trigger=
              {<button className="rounded-btn primary-btn ">Create an account</button>}
              modal nested
              open={isRegisterModalOpen}
              onClose={() => {
                handleClose();
                closeRegisterModal();
              }}>
              {
                close => (
                  <div className='modal'>
                    <div>
                      <span className='close-btn' onClick=
                        {() => close()}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                      </span>
                    </div>
                    <div className='content'>
                      <div className="formPopup">
                        <h1>Create an account</h1>
                        <div className="inputContainer">
                          <div className="inputItem">
                            <label className='label-md'>Full Name</label>
                            <input
                              type="text"
                              placeholder="Enter Your Full Name"
                              id="name"
                              className="input-md"
                              value={name}
                              onChange={handleNameChange}
                            />
                            {nameError && <p className="error-message">{nameError}</p>}
                          </div>
                          <div className="inputItem">
                            <label className='label-md'>Email Address</label>
                            <input
                              type="email"
                              placeholder="Enter Your Email Address"
                              id="email"
                              className="input-md"
                              value={email}
                              onChange={handleEmailChange}
                            />
                            {emailError && <p className="error-message">{emailError}</p>}
                          </div>
                          <div className="inputItem">
                            <label className='label-md'>Create a Secure Password</label>
                            <input
                              type={showPassword ? "text" : "password"} // Use conditional rendering based on showPassword state
                              placeholder="Minimum 8 characters"
                              id="password"
                              className="input-md"
                              value={password}
                              onChange={handlePasswordChange}
                            />
                            {passwordError && <p className="error-message">{passwordError}</p>}
                          </div>
                          <div className="passwordOptions">
                            <div className="checkboxItem">
                              <input type="checkbox" id='showPassword' className='checkBox' checked={showPassword} onChange={togglePasswordVisibility} />
                              <label htmlFor='showPassword'>Show Password</label>
                            </div>
                          </div>
                          <div className="consent">
                            <p>By signing up, you agree with West Bestern <a href="#" className='nobg-btn accent-btn'>Terms of Use</a> and <a href="#" className='nobg-btn accent-btn'>Privacy Policy</a></p>
                          </div>
                        </div>
                        <button className='primary-btn' onClick={handleRegisterSubmit}>Register</button>
                        <div className="register">
                          <p>Already have an account?</p>
                          <a className='nobg-btn accent-btn' onClick={() => {
                            close();
                            openLoginModal();
                          }}>Login</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </Popup>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
