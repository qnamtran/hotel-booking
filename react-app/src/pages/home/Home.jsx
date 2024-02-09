import React from 'react'
import "./home.css";
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import Topbar from '../../components/topbar/Topbar';
import Amenities from '../../components/amenities/Amenities';
import Toproom from '../../components/toprooms/Toproom';
import Gallery from '../../components/gallery/Gallery';

const Home = () => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <Header/>
        <Amenities/>
        <Toproom />
        <Gallery />
        <Footer/>
    </div>

  )
}

export default Home