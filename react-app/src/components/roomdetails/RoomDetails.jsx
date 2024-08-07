import React from 'react';
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./roomDetails.css";
import "../../styles/styles.css";
import { faArrowRight, faBathtub, faBed, faCouch, faPeopleGroup, faSink, faSmokingBan, faSnowflake, faTv } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const RoomDetails = ({ roomDetailData }) => {
    const navigate = useNavigate();
    const [selectedRoomNumber, setSelectedRoomNumber] = useState(null);
    const { dates } = useContext(SearchContext);
    const { user } = useContext(AuthContext);

    const [error, setError] = useState('');

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());
        const dates = [];

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return dates;
    };

    const alldates = getDatesInRange(dates?.[0]?.startDate, dates?.[0]?.endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            alldates.includes(new Date(date).getTime())
        );

        return !isFound;
    };

    const calculateAvailableRoomCount = (room) => {
        const isAvailable = (roomNumber) => {
            const isFound = roomNumber.unavailableDates.some((date) =>
                alldates.includes(new Date(date).getTime())
            );
            return !isFound;
        };

        const availableRooms = room.roomNumbers.filter((roomNumber) => isAvailable(roomNumber));
        return availableRooms.length;
    };

    const handleClose = () => {
        setSelectedRoomNumber(null);
        setError('');
    };

    const handleSelect = (roomNumberId) => {
        setSelectedRoomNumber(roomNumberId);
    };

    const handleCreateBooking = async () => {
        try {
            // Find the selected room number object
            const selectedRoomNumberObject = roomDetailData.roomNumbers.find(room => room._id === selectedRoomNumber);

            const bookingData = {
                roomId: roomDetailData._id,
                roomName: roomDetailData.name,
                roomNumber: selectedRoomNumberObject.number,
                userId: user._id,
                userName: user.name,
                checkInDate: new Date(dates?.[0]?.startDate),
                checkOutDate: new Date(dates?.[0]?.endDate),
                costPerNight: roomDetailData.costPerNight
            };

            const bookingRes = await axios.post('/bookings', bookingData);
            console.log(bookingRes.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleReserve = async () => {
        try {
            if (!selectedRoomNumber) {
                setError('Please select a room number.');
                return;
            }
            // Reserve the selected room
            const reserveRes = await axios.put(`/rooms/availability/${selectedRoomNumber}`, {
                dates: alldates,
            });
            console.log(reserveRes.data);

            handleCreateBooking()

            navigate("/account");
            // Reload the page to display new booking
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="roomDetails">
            <div className="roomDetailsContainer">
                <div className="roomImage"><img src={roomDetailData.photo} alt="" /></div>
                <div className="roomDetailsContent">
                    <div className="roomAvailableCount"><span>{calculateAvailableRoomCount(roomDetailData)}</span> available room(s)</div>
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
                        {isAuthenticated ? (
                        <Popup trigger={<button className="secondary-btn animated-btn hover-effect-btn">Reserve this room <span className='icon'><FontAwesomeIcon icon={faArrowRight} /></span></button>
                        }
                            modal nested
                            onClose={() => {
                                handleClose();
                            }}>
                            {
                                close => (
                                    <div className='modal'>
                                        <div>
                                            <span className='close-btn' onClick=
                                                {() => { close(); }}>
                                                <FontAwesomeIcon icon={faCircleXmark} />
                                            </span>
                                        </div>
                                        <div className='content'>
                                            <div className="formPopup">
                                                <h1>Reserve this room</h1>
                                                <div className="inputContainer">
                                                    <h2 className='roomTitle'>{roomDetailData.name}</h2>
                                                    <div className="bookingInfo">
                                                        <div className="textContainer">
                                                            <div className="textTitle">Check-in Date</div>
                                                            <div className="textData">{new Date(dates?.[0]?.startDate).toLocaleDateString()}</div>
                                                        </div>
                                                        <div className="textContainer">
                                                            <div className="textTitle">Check-out Date</div>
                                                            <div className="textData">{new Date(dates?.[0]?.endDate).toLocaleDateString()}</div>
                                                        </div>
                                                        <div className="textContainer">
                                                            <div className="textTitle">Max Guests</div>
                                                            <div className="textData">{roomDetailData.maxPeople}</div>
                                                        </div>
                                                    </div>
                                                    <h3>Select available room number</h3>
                                                    <div className="selectRoom">
                                                        {roomDetailData.roomNumbers.map((roomNumber) => (
                                                            <div className="radioItem" key={roomNumber._id}>
                                                                <input
                                                                    className='radioButton'
                                                                    type="radio"
                                                                    id={roomNumber._id}
                                                                    name="roomNumber"
                                                                    value={roomNumber._id}
                                                                    onChange={() => handleSelect(roomNumber._id)}
                                                                    checked={selectedRoomNumber === roomNumber._id}
                                                                    disabled={!isAvailable(roomNumber)}
                                                                />
                                                                <label>{roomNumber.number}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {error && <p className="error-message">{error}</p>}
                                                </div>
                                                <button className='primary-btn' onClick={handleReserve}>Confirm Reservation</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </Popup>
                        ) : (
                            <div className="login-message"><p>Please login to reserve this room</p></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetails;
