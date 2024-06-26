import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src={"/logo.png"} alt="" />
          <span>KunwarEstate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>

      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://avatars.githubusercontent.com/u/123080253?v=4"
              alt=""
            />
            <span>Raj Kunwar</span>
            <Link to={"/profile"} className="profileButton">
             <span>Profile</span> 
              <div className="notification">
                  4
              </div>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <a href="" className="login">
              Sign in
            </a>
            <a href="" className="register">
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
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign in</a>
          <a href="">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
