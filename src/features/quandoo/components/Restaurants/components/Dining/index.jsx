import React from "react";
import { dinning } from "../../../../../../constant/quandoo/index";
import ListRestaurants from "../../../../../../custom-fields/restaurants";
import "./style.scss";

function Dining() {
  return (
    <section id="popular-dining">
      <div className=" container">
        <div className="title-head">
          <h2>Experience fine dining</h2>
        </div>
        <ListRestaurants data={dinning} />
      </div>
    </section>
  );
}

export default Dining;
