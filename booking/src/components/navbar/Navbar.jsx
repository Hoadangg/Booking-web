import "./navbar.css"
import { useContext,createContext } from "react"
import UserContext from "../../globalState.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";

const Navbar = ({type,register,login}) => {
  const {modal,setModal} = useContext(UserContext)
  const {user} = useContext(AuthContext)
  const toggleModal = () => {
    setModal(!modal);
  };

  const {dispatch} = useContext(AuthContext)

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    // try {
    //   const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
    //   dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
    //   navigate("/")
    // } catch (err) {
    //   dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    // }
  };
  return (
    <div className={type==="list" ? "navbar nav-listMode":"navbar"}>
      <div className="navContainer">
        <Link to="/" className="logo-wrapper">
            <span className="logo">DOANII</span>
        </Link>
        
        
        <div>
        {user ? user.username  :(<div className="navItems">
          <button onClick={toggleModal} className={register ==="register" ? "navButton nav-registerMode":"navButton"}><b>Register</b> </button>
          <Link to ="/login">
            <button className={login ==="login" ? "navButton nav-loginMode":"navButton"}> <b>Login</b></button>
          </Link>
          
        </div>)}
        {
          user && (<button onClick={handleClick} className="navButton"><b>Log out</b></button>)

        }
        
          </div> 
      </div>
    </div>
  )
}

export default Navbar