import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AllRestaurants from "./components/AllRestaurants";
import BannerDoo from "./components/Banner";
import Buffets from "./components/Buffets";
import Dining from "./components/Dining";
import Halal from "./components/Halal";
import HighLights from "./components/Highlights";
import Information from "./components/Information";
import Instagram from "./components/Intargram";
import NewRestaurants from "./components/NewRestaurants";
import "./style.scss";

function Restaurants(props) {
  return (
    <div id="restaurants-page">
      <div className="top-link">
        <span>
          <a href="/">
            Restaurants{" "}
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginLeft: "10px" }}
            />
          </a>
        </span>
        <span>
          <a href="/">
            Singapore Region{" "}
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginLeft: "10px" }}
            />
          </a>
        </span>
        <span>
          <a href="/">
            Singapore{" "}
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginLeft: "10px" }}
            />
          </a>
        </span>
      </div>
      <BannerDoo />
      <Instagram />
      <Dining />
      <Buffets />
      <Halal />
      <NewRestaurants />
      <AllRestaurants />
      <HighLights />
      <Information />
    </div>
  );
}

export default Restaurants;
