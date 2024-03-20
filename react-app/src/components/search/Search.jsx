import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faPerson, faArrowRightLong, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import "./search.css"
import "../../styles/styles.css"
import { DateRange } from 'react-date-range';
import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SearchContext } from "../../context/SearchContext";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"

const Search = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(SearchContext);
    const location = useLocation();

    // Parse URL parameters to get search criteria
    const searchParams = new URLSearchParams(location.search);

    const [openDate, setOpenDate] = useState(false)

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);

    // Set default selected options
    const [options, setOptions] = useState({
        adults: parseInt(searchParams.get('adults'), 10) || 1,
        children: parseInt(searchParams.get('children'), 10) || 0,
        beds: parseInt(searchParams.get('beds'), 10) || 1,
    });

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


    // Reset filter when refresh page
    useEffect(() => {
        const storedSearchInput = JSON.parse(localStorage.getItem('searchInput'));
        if (storedSearchInput && storedSearchInput.options) {
            setDates(storedSearchInput.dates);
            setOptions(storedSearchInput.options);
        } else {
            // If no stored search input or options are undefined, clear filters
            setDates([
                {
                    startDate: new Date(),
                    endDate: new Date(),
                    key: 'selection',
                },
            ]);
            setOptions({
                adults: 1,
                children: 0,
                beds: 1,
            });
        }

        const handleBeforeUnload = () => {
            localStorage.removeItem('searchInput');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    // // Update the search parameters in the URL when options change
    // useEffect(() => {
    //     const searchParams = new URLSearchParams();
    //     searchParams.append('adults', options.adults);
    //     searchParams.append('children', options.children);
    //     searchParams.append('beds', options.beds);
    //     navigate(`?${searchParams.toString()}`);
    // }, [options, navigate]);

    // Handle increase decrease options
    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    // Close options modal when click Done
    const handleCloseOptions = () => {
        setOpenOptions(false);
    };

    const handleSearch = () => {
        localStorage.setItem(
            'searchInput',
            JSON.stringify({
                dates,
                options,
            })
        );

        dispatch({ type: "NEW_SEARCH", payload: { dates, options } });
        navigate(`/rooms?${searchParams.toString()}`);

    };

    return (
        <div className="search">
            <div className="searchContainer">
                <div className="searchOptions">
                    <div className="searchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='searchIcon' />
                        <div className="searchSubItem" ref={dateRangeWrapperRef}>
                            <span className='searchTitle'>Check-in date <span><FontAwesomeIcon icon={faArrowRightLong} /></span>Check-out Date</span>
                            <span onClick={() => setOpenDate(!openDate)} className='searchInput'>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                className='date'
                                minDate={new Date()}
                            />}
                        </div>
                    </div>
                    <span className='input-divider'></span>
                    <div className="searchItem">
                        <FontAwesomeIcon icon={faPerson} className='searchIcon' />
                        <div className="searchSubItem">
                            <span className='searchTitle'>Guests and Beds</span>
                            <span onClick={() => setOpenOptions(!openOptions)} className='searchInput'>{`${options.adults} adult(s) • ${options.children} children • ${options.beds} bed(s)`}</span>
                            {openOptions && <div id='options' className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adults</span>
                                    <div className="optionCounter">
                                        <button disabled={options.adults <= 1} className="optionCounterBtn" onClick={() => handleOption("adults", "decrease")}><FontAwesomeIcon icon={faMinus} /></button>
                                        <span className="optionCounterNumber">{options.adults}</span>
                                        <button className="optionCounterBtn" onClick={() => handleOption("adults", "increase")}><FontAwesomeIcon icon={faPlus} /></button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button disabled={options.children <= 0} className="optionCounterBtn" onClick={() => handleOption("children", "decrease")}><FontAwesomeIcon icon={faMinus} /></button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="optionCounterBtn" onClick={() => handleOption("children", "increase")}><FontAwesomeIcon icon={faPlus} /></button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Beds</span>
                                    <div className="optionCounter">
                                        <button disabled={options.beds <= 1} className="optionCounterBtn" onClick={() => handleOption("beds", "decrease")}><FontAwesomeIcon icon={faMinus} /></button>
                                        <span className="optionCounterNumber">{options.beds}</span>
                                        <button className="optionCounterBtn" onClick={() => handleOption("beds", "increase")}><FontAwesomeIcon icon={faPlus} /></button>
                                    </div>
                                </div>
                                <button onClick={handleCloseOptions} className='secondary-btn'>Done</button>
                            </div>}
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={handleSearch} className='primary-btn check-btn'>Check Availability</button>
                </div>
            </div>
        </div>
    )
}

export default Search
