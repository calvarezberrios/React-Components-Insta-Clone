// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";
import Instagram from "../../assets/Instagram_logo.png"

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram" />
        <img className = "logo-image" src = {Instagram} alt = "Instagram" />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="&#x1F50D; Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
