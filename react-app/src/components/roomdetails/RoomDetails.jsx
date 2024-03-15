import React from 'react'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./roomDetails.css"
import "../../styles/styles.css"
import { faArrowRight, faBathtub, faBed, faCouch, faPeopleGroup, faSink, faSmokingBan, faSnowflake, faTv } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch'

const RoomDetails = () => {
    const { data: roomsData, loading: roomsLoading, error: roomsError } = useFetch("rooms/");

    const [roomCounts, setRoomCounts] = useState({});
    
    useEffect(() => {
        const fetchRoomCounts = async () => {
            if (!roomsLoading && !roomsError && roomsData) {
                const counts = {};
                for (const room of roomsData) {
                    try {
                        const countResponse = await fetch(`rooms/${room._id}/countByRoomNumber`);
                        const countData = await countResponse.json();
                        counts[room._id] = countData.count || 0;
                    } catch (error) {
                        console.error(`Error fetching count for room ${room._id}:`, error);
                        counts[room._id] = 0;
                    }
                }
                setRoomCounts(counts);
            }
        };
        fetchRoomCounts();
    }, [roomsData, roomsLoading, roomsError]);

    return (
        <div className="roomDetails">
            {roomsLoading ? (
                "Loading rooms..."
            ) : roomsError ? (
                "Error fetching rooms."
            ) : (
                <>
                    {roomsData.map((item) => (
                        <div key={item._id} className="roomDetailsContainer">
                            <div className="roomImage"><img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1015487761074565473/original/b597e6c3-d7db-49c1-a317-fafca0d37478.jpg?im_w=1440" alt="" /></div>
                            <div className="roomDetailsContent">
                                <div className="roomAvailableCount"><span>{roomCounts[item._id]}</span> available room(s)</div>
                                <div className="roomInformation">
                                    <h2 className='roomTitle'>{item.name}</h2>
                                    <p className='roomDescription'>{item.description} </p>
                                </div>
                                <div className="roomHighlights">
                                    <h3>Room Highlights</h3>
                                    <div className="roomHighlightsItem">
                                        <div className="highlightItem">
                                            <span className="highlightIcon"><FontAwesomeIcon icon={faPeopleGroup} /></span>
                                            <p>Sleeps <span>{item.maxPeople}</span></p>
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
                                            <p><span>{item.numberOfBed}</span> bed(s)</p>
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
                                        <div className="roomCostPerNight">CAD {item.costPerNight}/night</div>
                                        <div className="roomCostDisclaimer">Tax and fee are excluded</div>
                                    </div>
                                    <button className="secondary-btn animated-btn hover-effect-btn">Select this room <span className='icon'><FontAwesomeIcon icon={faArrowRight} /></span></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default RoomDetails