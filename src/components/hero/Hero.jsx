import React from "react";
import "./hero.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Find the perfect place</h1>
        <p className="search-text">
          Search the largest selection of luxury high-rise apartments,
          multi-family homes, and luxury homes.{" "}
        </p>

        <form className="search-form">
          <div>
            <input type="text" placeholder="Enter keyword.." />
          </div>
          <div className="radio">
            <input type="radio" defaultChecked name="radio" />
            <label>Buy</label>
            <input type="radio" name="radio" />
            <label>Rent</label>

            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
