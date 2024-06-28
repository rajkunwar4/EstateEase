import { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <Link to="" className="logo">
          <img src={"/logo.png"} alt="" />
          <span>KunwarEstate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/list">Agents</Link>
      </div>

      <div className="right">
        {currentUser ? (
          <div className="user">
            <img
              src={
                currentUser.avatar ||
                "https://avatars.githubusercontent.com/u/123080253?v=4"
              }
              alt=""
            />
            <span>{currentUser.username}</span>
            <Link to={"/profile"} className="profileButton">
              <span>Profile</span>
              <div className="notification">4</div>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <a href="/login" className="">
              Sign in
            </a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}

        <div className="menuIcon">
          <img
            src="./menu.png"
            alt=""
            onClick={(e) => {
              setOpen((prev) => !prev);
            }}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contacts</Link>
          <Link>Agents</Link>
          <Link to={"/login"}>Sign in</Link>
          <Link to={"/register"}>Sign up</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
