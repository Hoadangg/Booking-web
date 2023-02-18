import { useContext,useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
import UserContext from "../../globalState.js";

import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import Modal from "../../components/modal/modal.jsx";
import Famous from "../../components/famous/Famous.jsx";

import "./home.css";
import App_slide from "../../components/slideshow/App_slide.js";


const Home = () => {
  const {modal} = useContext(UserContext);
  const [openDate, setOpenDate] =useState(false);

  const handleOpenDate =()=>{
    console.log("inhere")
    setOpenDate(!openDate)
    
  }

  return (
    <>
      
      <div onClick={openDate ? handleOpenDate: undefined} style={{"overflow-x":"hidden"}}>
          <div className="showVideo">
            <div className="radian-overlay"></div>
              <App_slide/>
              <Navbar />
              <Header  openDate={openDate} handleOpenDate={handleOpenDate}/>

          </div>
          <div className="homeContainer">
            <Famous/>
            <span>

              <h1 className="homeTitle">Explore Viet Nam</h1>
              <p style={{"marginTop":"10px"}}>These popular destination has a lot to offer</p>
            </span>
            <Featured/>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Homes guests love</h1>
            <FeaturedProperties/>
            <MailList/>
            <marquee className="floating-text">
              <img style={{width:"40px",height:"40px"}} src="https://cdn.123job.vn/123job/uploads/2021/04/02/2021_04_02______54181f0453a11f33299f4bae14c12353.jpg" alt="" />
       
              <span style={{"fontSize": "20px","margin-left":"30px"}}>University of Technology and Education </span>
              <span style={{"margin-left":"60px","fontSize": "20px" }}>Đồ án 2:Website đạt phòng khách sạn</span> 
              <span style={{"margin-left":"60px","fontSize": "20px" }}>GVHD:Trương Quang Phúc</span> 

       
            </marquee>
            <Footer/>
          </div>
          
        </div>
        {modal && <Modal/>}
    </>
  );
};

export default Home;
