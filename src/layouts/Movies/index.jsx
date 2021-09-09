import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function LayoutMovie({ children }) {
  return (
    <div id="moviedb">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutMovie;
