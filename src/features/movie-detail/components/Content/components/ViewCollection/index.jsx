import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

function ViewCollection(props) {
  const listData = useSelector((state) => state.movies);
  const data = listData.detail;
  return (
    <section className="panel-collection">
      {data.belongs_to_collection && (
        <div
          className="background"
          style={{
            background: `
              linear-gradient(
                to right,
                rgb(11 36 40 / 78%) 0%, rgb(25 79 81 / 69%)
              ),
              url('https://www.themoviedb.org/t/p/w1440_and_h320_multi_faces${data.belongs_to_collection.backdrop_path}')
            `,
          }}
        >
          <div className="title">
            <h3>Part of the {data.belongs_to_collection.name}</h3>
            <h5>Includes {data.title}</h5>
          </div>
          <button>VIEW THE COLLECTION</button>
        </div>
      )}
    </section>
  );
}

export default ViewCollection;
