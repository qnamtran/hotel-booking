import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faCartFlatbedSuitcase, faCalendarDays, faPerson, faArrowRightLong, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import "./header.css"
import "../../styles/styles.css"
import { DateRange } from 'react-date-range';
import { useState, useRef, useEffect } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"

const Header = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults: 1,
        children:0,
        beds:1,
    })

    const dateRangeWrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dateRangeWrapperRef.current && !dateRangeWrapperRef.current.contains(event.target)) {
                setOpenDate(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dateRangeWrapperRef]);

    const handleOption = (name, operation) =>{
        setOptions(prev=>{return{
            ...prev, [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
        }})
    }

    const handleCloseOptions = () => {
        setOpenOptions(false);
    };

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerHero">
                    <div className="heroTitle">
                        <div className="roomAvailableTag">Room available • <span><a href="#">Book Now</a></span></div>
                        <h1 className="heroMainTitle mainTitle">Kick off the new year with a new stay</h1>
                        <p className="heroSubtitle">Sunnier days are ahead, and West Bestern has a stay to warm your spirits. Indulge in a tranquil stay and rejuvenate your mind, body, and soul.</p>
                        <div className="heroBenefits">
                            <div className='heroBenefitItem'>
                                <div className='benefitIcon'><FontAwesomeIcon icon={faCartFlatbedSuitcase} /> </div>
                                <div className='benefitText'>
                                    <h2>24 hours</h2>
                                    <p>Customer Service</p>
                                </div>
                            </div>
                            <div className='heroBenefitItem'>
                                <div className='benefitIcon'><FontAwesomeIcon icon={faCreditCard} /> </div>
                                <div className='benefitText'>
                                    <h2>No charge</h2>
                                    <p>Until you check in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heroImage">
                        <img src="/images/hero-img.png" alt="" />
                    </div>
                </div>
                <div className="headerSearch">
                    <div className="headerSearchOptions">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className='headerSearchIcon'/>
                            <div className="headerSearchSubItem" ref={dateRangeWrapperRef}>
                                <span className='headerSearchTitle'>Check-in date <span><FontAwesomeIcon icon={faArrowRightLong}/></span>Check-out Date</span>
                                <span onClick={()=>setOpenDate(!openDate)} className='headerSearchInput'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                />}
                            </div>
                        </div>
                        <span className='input-divider'></span>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className='headerSearchIcon'/>
                            <div className="headerSearchSubItem">
                                <span className='headerSearchTitle'>Guests and Beds</span>
                                <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchInput'>{`${options.adults} adult(s) • ${options.children} children • ${options.beds} bed(s)`}</span>
                                {openOptions && <div id='options' className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adults</span>
                                        <div className="optionCounter">
                                            <button disabled={options.adults <=1} className="optionCounterBtn" onClick={()=>handleOption("adults", "decrease")}><FontAwesomeIcon icon={faMinus}/></button>
                                            <span className="optionCounterNumber">{options.adults}</span>
                                            <button className="optionCounterBtn" onClick={()=>handleOption("adults", "increase")}><FontAwesomeIcon icon={faPlus}/></button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button disabled={options.children <=0} className="optionCounterBtn" onClick={()=>handleOption("children", "decrease")}><FontAwesomeIcon icon={faMinus}/></button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterBtn" onClick={()=>handleOption("children", "increase")}><FontAwesomeIcon icon={faPlus}/></button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Beds</span>
                                        <div className="optionCounter">
                                            <button disabled={options.beds <=1} className="optionCounterBtn" onClick={()=>handleOption("beds", "decrease")}><FontAwesomeIcon icon={faMinus}/></button>
                                            <span className="optionCounterNumber">{options.beds}</span>
                                            <button className="optionCounterBtn" onClick={()=>handleOption("beds", "increase")}><FontAwesomeIcon icon={faPlus}/></button>
                                        </div>
                                    </div>
                                    <button onClick={handleCloseOptions} className='secondary-btn'>Done</button>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='primary-btn check-btn'>Check Availability</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
