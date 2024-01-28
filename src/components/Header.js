import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/food.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned <br/>
            Mediterranean restaurant, <br/>
             focused on traditional <br/>
              recipes served with a modern <br/>
                twist.</p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;