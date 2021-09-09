import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import _ from "lodash";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style.scss";
import ModeCommentIcon from "@material-ui/icons/ModeComment";

function ListRestaurants(props) {
  const results = props.data;

  const settings = {
    className: "slider-restaurants",
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="list-restaurants">
      <p className="list-restaurants__title">{results.title}</p>

      <div className="list-restaurants__item ">
        <Slider {...settings}>
          {results.data &&
            results.data.map((item, index) => (
              <div className="content " key={index}>
                <Link to={`/quandoo/${item.id}`}>
                  {" "}
                  <div className="content-box">
                    <div className="content-box__thumbnail">
                      <img src={item.image} alt={item.name} width="100%" />
                      {item.view > 0 && (
                        <div className="content-box__thumbnail--view">
                          <FontAwesomeIcon icon={faUser} size="xs" fixedWidth />
                          {item.view >= 1000 ? (
                            <span>{item.view / 1000}k</span>
                          ) : (
                            <span>{item.view}</span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="content-box__infor">
                      <div className="content-box__infor--name">
                        {item.new && <span className="new">New</span>}
                        {item.title.length > 21 ? (
                          <h4>{item.title.slice(0, 21)}...</h4>
                        ) : (
                          <h4>{item.title}</h4>
                        )}
                      </div>
                      <div className="content-box__infor--type d-flex justify-content-between">
                        <div className="title">{item.type}</div>
                        <div className="rate">{item.rate}/6</div>
                      </div>
                      <div className="content-box__infor--location d-flex justify-content-between">
                        <div className="title">
                          <div>
                            <span>{item.location}</span>
                            <span className="price">
                              {_.times(item.price, (i) => (
                                <span className="price_bold" key={i}>
                                  $
                                </span>
                              ))}
                              {_.times(4 - item.price, (x) => (
                                <span key={x}>$</span>
                              ))}
                            </span>
                          </div>
                        </div>
                        <div className="comment d-flex align-items-center">
                          <span className="d-flex ">
                            <ModeCommentIcon style={{ fontSize: "0.9rem" }} />
                          </span>
                          <span style={{ marginLeft: "5px" }}>
                            {item.comment}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default ListRestaurants;
