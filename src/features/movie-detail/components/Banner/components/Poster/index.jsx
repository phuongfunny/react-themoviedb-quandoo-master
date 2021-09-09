import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import movieAPI from "../../../../../../service/movieAPI";
import "./style.scss";

function Poster(props) {
  const listData = useSelector((state) => state);
  const data = listData.movies.detail;
  const [provider, setProvider] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const reponse = await movieAPI.getProvider(id);
        setProvider(reponse.results.US.flatrate[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProvider();
  }, [id]);

  return (
    <div className="poster">
      <div className="poster_image">
        <div
          className="image"
          style={provider.length === 0 ? { height: "100%" } : {}}
        >
          <img
            src={`https://www.themoviedb.org/t/p//w300_and_h450_bestv2${data.poster_path}`}
            alt={`banner-movie_${data.id}`}
          ></img>
        </div>
        <div className="expand">
          <span style={{ marginRight: "8px" }}>
            <FontAwesomeIcon
              icon={faArrowsAlt}
              size="sm"
              fixedWidth
              id={`popover-${data.id}`}
            />
          </span>
          Expand
        </div>
      </div>
      {provider.length !== 0 && (
        <div className="poster_offer">
          <div className="provider">
            <img
              src={`https://www.themoviedb.org/t/p//original${provider.logo_path}`}
              alt={`banner-movie_${provider.provider_name}`}
              width={38}
              height={38}
            ></img>
          </div>
          <div className="text">
            <h4 style={{ margin: "0" }}>Now Streaming</h4>
            <h3 style={{ margin: "0" }}>
              <a href="/">Watch Now</a>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Poster;
