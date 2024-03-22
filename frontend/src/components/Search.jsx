import axios from "axios";
import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8100/api/products/search?query=${query}`
      );
      setSearchResults(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="input-group mb-3 my-5 w-50">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Looking for something?"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-success"
            type="button"
            id="button-addon2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4 p-5 main-bags">
        {searchResults.length == 0 && <h3>No Result Found!!</h3>}
        {searchResults.map((item, index) => (
          <div className="col" key={index}>
            <div className="card product-card">
              <img src={item.image} className="bag-img" alt="..." />
              <div className="card-body">
                <h4 className="card-title item-title">{item.title}</h4>
                <p className="card-text">{item.description}</p>
                <h5 className="card-text">Price : ₹ {item.price}</h5>
                <button className="btn btn-dark cart-btn">ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
