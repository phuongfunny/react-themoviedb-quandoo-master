import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { allRestaurants } from "../../../../../../constant/quandoo/index";
import _ from "lodash";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import { Button } from "reactstrap";

function AllRestaurants(props) {
  return (
    <section id="all-restaurants">
      <div className="container">
        <div className="title-head">
          <h2>All restaurants in Singapore</h2>
        </div>
        <div className="list-restaurants__item all-items">
          {allRestaurants.data &&
            allRestaurants.data.map(
              (item, index) =>
                index <= 8 && (
                  <div className="content " key={index}>
                    <Link to={`/quandoo/${item.id}`}>
                      {" "}
                      <div className="content-box">
                        <div className="content-box__thumbnail">
                          <img src={item.image} alt={item.name} width="100%" />
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
                            <div className="title_type">{item.type}</div>
                            <div className="title_location">
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
                          </div>
                          <div className="content-box__infor--location d-flex justify-content-between">
                            <div className="rate">{item.rate}/6</div>
                            <div className="comment d-flex align-items-center">
                              <span className="d-flex ">
                                <ModeCommentIcon
                                  style={{ fontSize: "0.9rem" }}
                                />
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
                )
            )}
        </div>
        <Button className="btn-more">See All</Button>
      </div>
    </section>
  );
}

export default AllRestaurants;
