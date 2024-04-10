import React from 'react'
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "./list.css"
import "../../styles/styles.css"
import Topbar from '../../components/topbar/Topbar'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Search from '../../components/search/Search'
import RoomDetails from '../../components/roomdetails/RoomDetails'
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";

const List = () => {
  // Get URL location and navigate function
  const location = useLocation();
  const navigate = useNavigate();
  const { options } = useContext(SearchContext);
  const [filteredData, setFilteredData] = useState([]);

  // Parse URL parameters to get search criteria
  const searchParams = new URLSearchParams(location.search);
  const adults = parseInt(searchParams.get('adults')) || (options && options.adults) || 1;
  const children = parseInt(searchParams.get('children')) || (options && options.children) || 0;
  const beds = parseInt(searchParams.get('beds')) || (options && options.beds) || 1;

  const { data, loading, error } = useFetch(
    `/rooms?adults=${adults}&children=${children}&beds=${beds}`
  );

  useEffect(() => {
    // Update URL with new search parameters
    const params = new URLSearchParams();
    params.append('adults', options.adults);
    params.append('children', options.children);
    params.append('beds', options.beds);
    navigate({ search: params.toString() });
  }, [options, navigate]);

  useEffect(() => {
    // Filter rooms based on search criteria
    const filteredRooms = data.filter(room => {
      // const { adults, children, beds } = options;
      const totalGuests = adults + children;
      return room.maxPeople >= totalGuests && room.numberOfBed >= beds;
    });
    setFilteredData(filteredRooms);
  }, [data, adults, children, beds]);

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="list">
        <div className="listContainer">
          <Search />
          <div className="listResults">
            {loading ? (
              "loading"
            ) : (
              <>
                {filteredData.map((roomDetailData) => (
                  <RoomDetails
                    roomDetailData={roomDetailData}
                    key={roomDetailData._id}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List