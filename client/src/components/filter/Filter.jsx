import "./filter.scss";
const Filter = () => {
  return (
    // filter
    <div className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      {/* top */}
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City location"
          />
        </div>
      </div>
      {/* bottom */}
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type </label>
          <select id="type" name="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property </label>
          <select id="property" name="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max price </label>
          <input
            type="number"
            id="maxprice"
            name="city"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min price </label>
          <input
            type="number"
            id="minprice"
            name="minprice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom </label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          />
        </div>
        <button>
          <img src="./search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
