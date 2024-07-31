import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketball, faBroom, faBroomBall, faDog, faDumbbell, faFireBurner, faJugDetergent, faKey, faParking, faSwimmingPool, faUmbrellaBeach, faUtensilSpoon, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons'
import "./amenities.css"
import "../../styles/styles.css"

const Amenities = () => {
  return (
    <div className="amenities">
        <div className="amenitiesContainer">
            <h1 className="mainTitle amenitiesTitle">Hotel Amenities</h1>
            <div className="amenitiesList">
                <div className="amenitiesItem">
                    <span><FontAwesomeIcon icon={faKey} /></span>
                    <p>Digital Key</p>
                </div>
                <div className="amenitiesItem">
                    <span><FontAwesomeIcon icon={faUtensils} /></span>
                    <p>On site restaurant</p>
                </div>
                <div className="amenitiesItem">
                    <span><FontAwesomeIcon icon={faDumbbell} /></span>
                    <p>Fitness center</p>
                </div>
                <div className="amenitiesItem">
                    <span><FontAwesomeIcon icon={faBroomBall} /></span>
                    <p>Room service</p>
                </div>
                <div className="amenitiesItem">
                    <span><FontAwesomeIcon icon={faDog} /></span>
                    <p>Pet friend-ly</p>
                </div>
                <div className="amenitiesItem">
                    <span><FontAwesomeIcon icon={faJugDetergent} /></span>
                    <p>Laundry</p>
                </div>
                <div className="amenitiesItem">
                    <span><FontAwesomeIcon icon={faSwimmingPool} /></span>
                    <p>Swimming Pool</p>
                </div>
                <div className="amenitiesItem">
                    <span><FontAwesomeIcon icon={faWifi} /></span>
                    <p>Free Wifi</p>
                </div>
                <div className="amenitiesItem">
                    <span><FontAwesomeIcon icon={faParking} /></span>
                    <p>Free Parking</p>
                </div>
                <div className="amenitiesItem">
                    <span><FontAwesomeIcon icon={faFireBurner} /></span>
                    <p>Fire pit</p>
                </div>
                <div className="amenitiesItem">
                    <span><FontAwesomeIcon icon={faUmbrellaBeach} /></span>
                    <p>Outdoor Patio</p>
                </div>
                <div className="amenitiesItem">
                    <span><FontAwesomeIcon icon={faBasketball} /></span>
                    <p>Basketball Court</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Amenities