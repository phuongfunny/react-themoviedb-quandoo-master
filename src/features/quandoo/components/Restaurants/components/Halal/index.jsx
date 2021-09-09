import React from "react";
import { halal } from "../../../../../../constant/quandoo/index";
import ListRestaurants from "../../../../../../custom-fields/restaurants";
import "./style.scss";

function Halal() {
  return (
    <section id="popular-halal">
      <div className=" container">
        <div className="title-head">
          <h2>Halal certified restaurants</h2>
        </div>
        <ListRestaurants data={halal} />
      </div>
    </section>
  );
}

export default Halal;
