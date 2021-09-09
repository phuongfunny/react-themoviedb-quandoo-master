import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListItem } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import { Button } from "reactstrap";
import "./style.scss";

function HighLights(props) {
  const [openPoint, setOpenPoint] = useState(false);
  const [openPopular, setOpenPopular] = useState(false);

  const handleClickPopular = () => {
    setOpenPopular(!openPopular);
  };
  const handleClickPoint = () => {
    setOpenPoint(!openPoint);
  };
  const point = [
    "Yishun Station",
    "Canberra Station",
    "Khatib Station",
    "Lorong Chuan Station",
    "Upper Thomson Station",
    "Marymount Station",
    "Yio Chu Kang Station",
    "Serangoon Station",
    "Lentor Station",
    "Mayflower Station",
  ];
  const popular = [
    "Yishun",
    "Sembawang",
    "Upper Thomson",
    "Ang Mo Kio",
    "Serangoon",
    "Seletar",
    "Woodlands",
    "Khatib",
    "Serangoon Stadium",
    "Bishan",
  ];

  return (
    <section id="highlights">
      <div className="container">
        <div className="content">
          <div className="content-desk">
            <div className="point-interest col-6">
              <h4>Points of interest</h4>
              <ul>
                {point.map((item, index) => (
                  <li key={index}>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      size="sm"
                      style={{ color: "orange" }}
                      fixedWidth
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="popular-area col-6">
              <h4>Popular areas</h4>
              <ul>
                {popular.map((item, index) => (
                  <li key={index}>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      size="sm"
                      fixedWidth
                      style={{ color: "orange" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Button>See all</Button>
            </div>
          </div>
          <div className="content-mb">
            <div className="point-mb">
              <ListItem
                className="point-action"
                button
                onClick={handleClickPoint}
              >
                <h4>Points of interest</h4>
                {openPoint ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={openPoint}
                className="point-popup"
                timeout="auto"
                unmountOnExit
              >
                <div className="point-interest">
                  <ul>
                    {point.map((item, index) => (
                      <li key={index}>
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          size="sm"
                          style={{ color: "orange" }}
                          fixedWidth
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapse>
            </div>
            <div className="popular-mb">
              <ListItem
                button
                className="popular-action"
                onClick={handleClickPopular}
              >
                <h4>Popular areas</h4>
                {openPopular ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={openPopular}
                className="point-popular"
                timeout="auto"
                unmountOnExit
              >
                <div className="point-interest">
                  <ul>
                    {popular.map((item, index) => (
                      <li key={index}>
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          size="sm"
                          fixedWidth
                          style={{ color: "orange" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button>See all</Button>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighLights;
