import "./footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-school">
            <h5 className="footer-school-name">University of Technology and Education</h5>
            
            <img className="footer-img" src="https://cdn.123job.vn/123job/uploads/2021/04/02/2021_04_02______54181f0453a11f33299f4bae14c12353.jpg" alt="" />
            <h3> <strong>Đề tài:Thiết kế web đặt phòng</strong></h3>
          </div>
          <div className="devider"></div>
          <div className="footer-sv">
            <div className="gvhd">GVHD: Ths Trương Quang Phúc</div>
            
           <div className="sv-info">
           <div className="sv1_info">
              <div>Nguyễn Thế Dũng</div>
              <ul>
                <li><small>MSV: 19119161</small> </li>
                <li><small>Phone: 0378071717</small></li>
                <li><small>Email: 19119161@student.hcmute.edu.vn</small></li>
              </ul>
          

            </div>
            <div className="sv2_info">
              <div>Đặng Thị Huỳnh Hoa</div>
              <ul>
                <li><small>MSV: 19119178</small> </li>
                <li><small>Phone: 0352241881</small></li>
                <li><small>Email: 19119178@student.hcmute.edu.vn</small></li>
              </ul>
            

            </div>
           </div>
          </div>

        </div>
      
      
      </div>
    </>
  );
};

export default Footer;
