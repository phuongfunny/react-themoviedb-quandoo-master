import React from "react";
import { useSelector } from "react-redux";
import Poster from "./components/Poster";
import ProfileMovie from "./components/ProfileMovie";
import "./style.scss";

function Banner(props) {
  const listData = useSelector((state) => state.movies);
  const data = listData.detail;
  if (listData.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="banner-poster">
      {data.length !== 0 && (
        <div
          className="banner"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(17.25%, 12.16%, 16.86%, 1) 150px,
                rgba(17.25%, 12.16%, 16.86%, 0.84) 100%
              ),
              url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}')
            `,
          }}
        >
          <div className="custom_bg">
            <div className="banner-content">
              <Poster />
              <ProfileMovie id={props.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
