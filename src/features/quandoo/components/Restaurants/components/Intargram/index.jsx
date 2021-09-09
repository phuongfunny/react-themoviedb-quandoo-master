import React from "react";
import { popularInstagram } from "../../../../../../constant/quandoo/index";
import ListRestaurants from "../../../../../../custom-fields/restaurants";
import IconInstagram from "../../../../../../assets/images/icon_instagram.png";
import "./style.scss";

function Instagram() {
  return (
    <section id="popular-instagram">
      <div className=" container">
        <div className="title-head">
          <img src={IconInstagram} width="30px" height="30px" alt="logo" />
          <h2>Popular on Instagram</h2>
        </div>
        <ListRestaurants data={popularInstagram} />
      </div>
    </section>
  );
}

export default Instagram;
