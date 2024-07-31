import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./toproom.css"
import "../../styles/styles.css"
import { faArrowRight, faBathtub, faBed, faCouch, faPeopleGroup, faSink, faSmokingBan, faSnowflake, faTv } from '@fortawesome/free-solid-svg-icons'

const Toproom = () => {
    return (
        <div className="toproom">
            <div className="topRoomContainer">
                <h1 className='mainTitle'>Our Top Rated Rooms</h1>
                <div className="roomItem">
                    <div className="roomCoverPhoto"><img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1015487761074565473/original/b597e6c3-d7db-49c1-a317-fafca0d37478.jpg?im_w=1440" alt="" /></div>
                    <div className="roomContent">
                        <h2>2 Queen Beds Room</h2>
                        <p>Enjoy the fantastic views from this double queen suite with large seating area. Utilize the ergonomic chair and catch up with work at the desk. Surf the web with WiFi. Experience ultimate comfort in the memory foam mattress. </p>
                        <div className="roomHighlights">
                            <h3>Room Highlights</h3>
                            <div className="roomHighlightsItem">
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faPeopleGroup} /></span>
                                    <p>Sleeps 6</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faSnowflake} /></span>
                                    <p>Refrigerator</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faTv} /></span>
                                    <p>LCD TV</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faBed} /></span>
                                    <p>Queen bed</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faPeopleGroup} /></span>
                                    <p>Microwave</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faBathtub} /></span>
                                    <p>Bathtub</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faCouch} /></span>
                                    <p>Sofa bed</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faSink} /></span>
                                    <p>Countertops</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faSmokingBan} /></span>
                                    <p>Smoke alarm</p>
                                </div>
                            </div>
                        </div>
                        <button className="primary-btn">Book Yours Now</button>
                    </div>
                </div>
                <div className="roomItem">
                    <div className="roomContent">
                        <h2>2 Queen Beds Room</h2>
                        <p>Enjoy the fantastic views from this double queen suite with large seating area. Utilize the ergonomic chair and catch up with work at the desk. Surf the web with WiFi. Experience ultimate comfort in the memory foam mattress. </p>
                        <div className="roomHighlights">
                            <h3>Room Highlights</h3>
                            <div className="roomHighlightsItem">
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faPeopleGroup} /></span>
                                    <p>Sleeps 6</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faSnowflake} /></span>
                                    <p>Refrigerator</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faTv} /></span>
                                    <p>LCD TV</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faBed} /></span>
                                    <p>Queen bed</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faPeopleGroup} /></span>
                                    <p>Microwave</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faBathtub} /></span>
                                    <p>Bathtub</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faCouch} /></span>
                                    <p>Sofa bed</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faSink} /></span>
                                    <p>Countertops</p>
                                </div>
                                <div className="highlightItem">
                                    <span className="highlightIcon"><FontAwesomeIcon icon={faSmokingBan} /></span>
                                    <p>Smoke alarm</p>
                                </div>
                            </div>
                        </div>
                        <button className="primary-btn">Book Yours Now</button>
                    </div>
                    <div className="roomCoverPhoto"><img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1015487761074565473/original/e45a2b53-77eb-458c-a590-abb84781a89d.jpg?im_w=1440" alt="" /></div>
                </div>
                <Link to='/rooms' onClick={() => {
                    window.scroll(0, 0);
                }}><button className="secondary-btn rounded-btn animated-btn">View all of our rooms <span className='icon'><FontAwesomeIcon icon={faArrowRight} /></span></button></Link>
            </div>
        </div>
    )
}

export default Toproom