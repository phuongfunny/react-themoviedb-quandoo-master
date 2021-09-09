import React from "react";
import QuanDooFooter from "../../components/QuanDoo/Footer";
import QuanDooHeader from "../../components/QuanDoo/Header";

function QuanDoo({ children }) {
  return (
    <div id="quandoo">
      <QuanDooHeader />
      {children}
      <QuanDooFooter />
    </div>
  );
}

export default QuanDoo;
