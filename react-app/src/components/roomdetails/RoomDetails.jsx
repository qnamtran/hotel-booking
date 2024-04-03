import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./roomDetails.css"
import "../../styles/styles.css"
import { faArrowRight, faBathtub, faBed, faCouch, faPeopleGroup, faSink, faSmokingBan, faSnowflake, faTv } from '@fortawesome/free-solid-svg-icons'

const RoomDetails = ({ roomDetailData, availableRoomCount }) => {

    return (
        <div className="roomDetails">
            <div className="roomDetailsContainer">
                <div className="roomImage"><img src={roomDetailData.photo} alt="" /></div>
                <div className="roomDetailsContent">
                    <div className="roomAvailableCount"><span>{availableRoomCount}</span> available room(s)</div>
                    <div className="roomInformation">
                        <h2 className='roomTitle'>{roomDetailData.name}</h2>
                        <p className='roomDescription'>{roomDetailData.description} </p>
                    </div>
                    <div className="roomHighlights">
                        <h3>Room Highlights</h3>
                        <div className="roomHighlightsItem">
                            <div className="highlightItem">
                                <span className="highlightIcon"><FontAwesomeIcon icon={faPeopleGroup} /></span>
                                <p>Sleeps <span>{roomDetailData.maxPeople}</span></p>
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
                                <p><span>{roomDetailData.numberOfBed}</span> bed(s)</p>
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
                            <div className="roomCostPerNight">CAD {roomDetailData.costPerNight}/night</div>
                            <div className="roomCostDisclaimer">Tax and fee are excluded</div>
                        </div>
                        <button className="secondary-btn animated-btn hover-effect-btn">Select this room <span className='icon'><FontAwesomeIcon icon={faArrowRight} /></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetails