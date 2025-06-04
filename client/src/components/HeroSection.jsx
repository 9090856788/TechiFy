import React from "react";
import "./styles/heroSection.css";
import { IoIosStar } from "react-icons/io";

const HeroSection = () => {
  return (
    <>
      <div className="hero_section">
        <div>
          <div className="hero_section_text">
            <p>New: AI feature integrated</p>
            <IoIosStar />
          </div>
        </div>
        <div className="hero_section_heading">
          <b>
            <p>
              Your own <span>blogging</span>
            </p>
          </b>
          <b>
            <p>platform.</p>
          </b>
        </div>
        <div className="hero_section_description">
          <p>
            This is your space to think out loud, to share what matters, and to
            write without filters. Whether
          </p>
          <p>it's one word or a thousand, your story starts right here.</p>
        </div>
        <div className="search_container">
          <input type="text" placeholder="Search for blogs" />
          <button type="submit">Search</button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
