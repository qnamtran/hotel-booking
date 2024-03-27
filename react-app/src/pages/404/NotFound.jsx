import React from 'react'
import { Link } from "react-router-dom";
import "./notFound.css"
import Footer from '../../components/footer/Footer'
import Topbar from '../../components/topbar/Topbar';
import Navbar from '../../components/navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return (
        <div>
            <Topbar />
            <Navbar />
            <div className="notfound">
                <div className="notFoundContainer">
                    <div className="notFoundTitle">404</div>
                    <div className="notFoundImage">
                        <img src="/images/404.png" alt="404 Not Found" />
                    </div>
                    <div className="notFoundText">Ooops! You are lost</div>
                    <div className="directionOption">
                        <Link to='/'>
                            <button className="primary-btn rounded-btn go-home">Go Home <span className="icon"><FontAwesomeIcon icon={faHouse} /></span></button>
                        </Link>
                        <Link to='/rooms'>
                            <button className="secondary-btn rounded-btn">Book Our Rooms <span className="icon"><FontAwesomeIcon icon={faCalendarPlus} /></span></button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound