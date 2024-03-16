import React from 'react'
import { useContext } from "react";
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
  const { data, loading, error, reFetch } = useFetch(
    `/rooms`
  );

  const { options } = useContext(SearchContext);

  // Filter rooms based on search criteria
  const filteredData = data.filter(room => {
    const { adults, children, beds } = options;
    const totalGuests = adults + children;
    return room.maxPeople >= totalGuests && room.numberOfBed >= beds;
  });

  // Calculate available room count for each room
  const calculateAvailableRoomCount = (room) => {
    const totalRooms = room.roomNumbers.length;
    const unavailableRooms = room.roomNumbers.filter(room => room.unavailableDates.length > 0);
    const availableRoomCount = totalRooms - unavailableRooms.length;
    return availableRoomCount;
  };

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
                {filteredData.map((item) => (
                  <RoomDetails
                    item={item}
                    key={item._id}
                    availableRoomCount={calculateAvailableRoomCount(item)}
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