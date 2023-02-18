import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import App_showRoom from "../../components/showRoom/App_showRoom.js";
import UserContext from "../../globalState.js";
import Modal from "../../components/modal/modal.jsx";
// import App_showRoom from "../../components/showRoom/App_showRoom.js";

const Hotel = () => {

  const {modal} = useContext(UserContext);
  const { dates, options } = useContext(SearchContext);

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`http://localhost:8800/api/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(dates);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 1 ? data.photos.length-1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === data.photos.length-1 ? 1 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <div style={{"overflow-x":"hidden"}}>
      <Navbar type="list"/>
      
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}  
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            {/* <button className="bookNow">Reserve or Book Now!</button> */}
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi 
            </span>
            <div className="hotelImages">
              {data.photos?.slice(1,data.photos.length)?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i+1)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            {/* <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div> */}
              <App_showRoom hotelId={id}/>
          </div>
          <MailList />
          <div style={{"margin":"15px 0"}}></div>
          <marquee className="floating-text">
            <img style={{width:"40px",height:"40px"}} src="https://cdn.123job.vn/123job/uploads/2021/04/02/2021_04_02______54181f0453a11f33299f4bae14c12353.jpg" alt="" />
       
            <span style={{"fontSize": "20px","margin-left":"30px"}}>University of Technology and Education </span>
            <span style={{"margin-left":"60px","fontSize": "20px" }}>Đồ án 2:Website đạt phòng khách sạn</span> 
            <span style={{"margin-left":"60px","fontSize": "20px" }}>GVHD:Trương Quang Phúc</span> 

       
          </marquee>
          <Footer />
        </div>
      )}

      {/* {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>} */}
      {modal && <Modal/>}
    </div>
  );
};

export default Hotel;
