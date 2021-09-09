import React from "react";
import { buffets } from "../../../../../../constant/quandoo/index";
import ListRestaurants from "../../../../../../custom-fields/restaurants";
import "./style.scss";

function Buffets() {
  return (
    <section id="popular-buffets">
      <div className=" container">
        <div className="title-head">
          <h2>The best buffets</h2>
        </div>
        <ListRestaurants data={buffets} />
      </div>
    </section>
  );
}

export default Buffets;
