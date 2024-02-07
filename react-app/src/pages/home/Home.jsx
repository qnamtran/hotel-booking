import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import Topbar from '../../components/topbar/Topbar';
import Amenities from '../../components/amenities/Amenities';
import "./home.css";

const Home = () => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <Header/>
        <Amenities/>
        <Footer/>
    </div>

  )
}

export default Home