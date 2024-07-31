import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarDays, faPerson, faArrowRightLong, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import "./search.css"
import "../../styles/styles.css"
import { DateRange } from 'react-date-range';
import { useState, useRef, useEffect } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"

const Search = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);

    // Set default selected options
    const [options, setOptions] = useState({
        adults: 1,
        children:0,
        beds:1,
    })

    const dateRangeWrapperRef = useRef(null);

    // Close date range picker when click outside
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

    // Close options modal when click Done
    const handleCloseOptions = () => {
        setOpenOptions(false);
    };

    return (
        <div className="search">
            <div className="searchContainer">
                    <div className="searchOptions">
                        <div className="searchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className='searchIcon'/>
                            <div className="searchSubItem" ref={dateRangeWrapperRef}>
                                <span className='searchTitle'>Check-in date <span><FontAwesomeIcon icon={faArrowRightLong}/></span>Check-out Date</span>
                                <span onClick={()=>setOpenDate(!openDate)} className='searchInput'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
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
                        <div className="searchItem">
                            <FontAwesomeIcon icon={faPerson} className='searchIcon'/>
                            <div className="searchSubItem">
                                <span className='searchTitle'>Guests and Beds</span>
                                <span onClick={()=>setOpenOptions(!openOptions)} className='searchInput'>{`${options.adults} adult(s) • ${options.children} children • ${options.beds} bed(s)`}</span>
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
    )
}

export default Search
