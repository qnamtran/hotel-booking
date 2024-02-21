import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./roomDetails.css"
import "../../styles/styles.css"
import { faArrowRight, faBathtub, faBed, faCouch, faPeopleGroup, faSink, faSmokingBan, faSnowflake, faTv } from '@fortawesome/free-solid-svg-icons'

const RoomDetails = () => {
    return (
        <div className="roomDetails">
            <div className="roomDivider"></div>
            <div className="roomDetailsContainer">
                <div className="roomImage"><img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1015487761074565473/original/b597e6c3-d7db-49c1-a317-fafca0d37478.jpg?im_w=1440" alt="" /></div>
                <div className="roomDetailsContent">
                    <div className="roomAvailableCount"><span>2</span> available room(s)</div>
                    <div className="roomInformation">
                        <h2 className='roomTitle'>2 Queen Beds Room</h2>
                        <p className='roomDescription'>Enjoy the fantastic views from this double queen suite with large seating area. Utilize the ergonomic chair and catch up with work at the desk. Surf the web with WiFi. Experience ultimate comfort in the memory foam mattress. </p>
                    </div>
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
                    <div className="roomCallToAction">
                        <div className="roomCost">
                            <div className="roomCostPerNight">CAD 129/night</div>
                            <div className="roomCostDisclaimer">Tax and fee are excluded</div>
                        </div>
                        <button className="primary-btn">Select this room</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetails