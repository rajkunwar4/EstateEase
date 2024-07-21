import { useState } from "react";
import "./searchBar.scss";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const types = ["buy", "rent"];
  const navigate = useNavigate();

  const [query, setQuery] = useState({
    type: "rent",
    city: "",
    minPrice: 0,
    maxPrice: 10000000000,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
    console.log(query.type);
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let redirect = "/list?";
    Object.entries(query).map(
      (item) => (redirect += item[0] + "=" + item[1] + "&")
    );
    navigate(redirect);
    return;
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={type == query.type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="location"
          placeholder="City Location"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000000}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000000}
          placeholder="Max Price"
          onChange={handleChange}
        />
        <button name="submit" id="submit" type="submit">
          <img src="./search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
