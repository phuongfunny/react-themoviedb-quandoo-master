import React from "react";
import "./style.scss";

function HomePage(props) {
  return (
    <React.Fragment>
      <div id="home-page">
        <section className="banner">
          <div className="content">
            <div className="title">
              <h2>Welcome.</h2>
              <h3>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h3>
            </div>
            <div className="search">
              <form>
                <input
                  type="text"
                  className="txt-search"
                  name="txt-search"
                  placeholder="Search for a movie, tv shows, person....."
                />
                <input type="submit" className="btn-search" value="Search" />
              </form>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
