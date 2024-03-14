import React from 'react'
import "./list.css"
import "../../styles/styles.css"
import Topbar from '../../components/topbar/Topbar'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Search from '../../components/search/Search'
import RoomDetails from '../../components/roomdetails/RoomDetails'

const List = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <div className="list">
        <div className="listContainer">
          <Search />
          <div className="listResults">
            <RoomDetails />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default List