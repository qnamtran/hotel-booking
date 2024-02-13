import React from 'react'
import "./list.css"
import "../../styles/styles.css"
import Topbar from '../../components/topbar/Topbar'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const List = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Footer/>
      <div className="list">
        <div className="listContainer">
          <div className="listSearch">

          </div>
          <div className="listResults">

          </div>
        </div>
      </div>
    </div>
  );
};

export default List