import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      {/* left side */}
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate and get your dream place</h1>
          <p>
            Discover your dream home with ease. Explore detailed listings,
            connect with top agents, and schedule viewings. Find your perfect
            property today!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <p>Years of Experience</p>
            </div>
            <div className="box">
              <h1>200</h1>
              <p>Awards Gained</p>
            </div>
            <div className="box">
              <h1>1200</h1>
              <p>Property Ready</p>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="imgContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
