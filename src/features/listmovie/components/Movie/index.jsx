import { faAngleRight, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import { Link } from "react-router-dom";
import { PopoverBody, UncontrolledPopover } from "reactstrap";
import "./style.scss";
function Movie(props) {
  return (
    <div
      key={props.index}
      id={`page_${props.index + 1}`}
      className="page-movie"
    >
      {props.listItem.map((movie, index) => (
        <div key={index} className={`item-movie movie_${movie.id}`}>
          <div className="banner-movie">
            <div className="wrapper">
              <Link to={`/movie/${movie.id}`}>
                <img
                  loading="lazy"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`}
                  alt={`banner-movie_${movie.id}`}
                ></img>
              </Link>
              <div className="more-movie">
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  size="sm"
                  fixedWidth
                  id={`popover-${movie.id}`}
                />
                <UncontrolledPopover
                  trigger="focus"
                  placement="bottom"
                  target={`popover-${movie.id}`}
                  className="popover-more"
                >
                  <PopoverBody className="popover-more_content">
                    <p>Want to rate or add this item to a list? </p>
                    <a href="/">
                      Login{" "}
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        size="lg"
                        fixedWidth
                      />
                    </a>
                    <p>Not a member?</p>
                    <a href="/">
                      Sign up and join the community{" "}
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        size="lg"
                        fixedWidth
                      />
                    </a>
                  </PopoverBody>
                </UncontrolledPopover>
              </div>
            </div>
          </div>
          <div className="title-movie">
            <div className="vote-progress">
              <CircularProgress
                variant="determinate"
                value={movie.vote_average * 10}
                className={movie.vote_average * 10 < 70 ? "low" : ""}
              />
              <p className="tt-vote">{movie.vote_average * 10}%</p>
            </div>
            <h2>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </h2>
            <p>{movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Movie;
