import React from "react";
import { newRestaurants } from "../../../../../../constant/quandoo/index";
import ListRestaurants from "../../../../../../custom-fields/restaurants";
import "./style.scss";

function NewRestaurants() {
  return (
    <section id="popular-new-restaurants">
      <div className=" container">
        <div className="title-head">
          <h2>New restaurants in Singapore</h2>
        </div>
        <ListRestaurants data={newRestaurants} />
      </div>
    </section>
  );
}

export default NewRestaurants;
