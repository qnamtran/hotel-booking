import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import Topbar from '../../components/topbar/Topbar';
import "./home.css";

const Home = () => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <Header/>
        <Footer/>
    </div>

  )
}

export default Home