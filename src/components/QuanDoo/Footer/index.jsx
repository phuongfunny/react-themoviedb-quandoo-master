import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";

function QuanDooFooter(props) {
  const about = [
    "Loyalty Points",
    "Quisine Blog",
    "Contact",
    "List your restaurant",
    "Careers",
    "Press",
    "Sitemap",
  ];
  const countries = [
    "Australia",
    "Austria",
    "Switzerland",
    "Germany",
    "Italy",
    "United Kingdom",
    "Luxembourg",
    "Turkey",
    "Netherlands",
    "Singapore",
    "Hong Kong",
  ];
  return (
    <footer>
      <div className="content-footer">
        <div className="content-information">
          <div className="infor-list ft-legal">
            <div className="ft-legal__title">
              <h3>LEGAL</h3>
            </div>
            <div className="ft-legal__item">
              <ul>
                <li>Imprint</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="infor-list ft-about">
            <div className="ft-about__title">
              <h3>ABOUT</h3>
            </div>
            <div className="ft-about__item">
              <ul>
                {about.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="infor-list ft-countries">
            <div className="ft-countries__title">
              <h3>COUNTRIES AND REGIONS</h3>
            </div>
            <div className="ft-countries__item">
              <ul>
                {countries.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="infor-list ft-social">
            <div className="ft-social__title">
              <h3>SOCIAL</h3>
            </div>
            <div className="ft-social__item">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <h1>Quandoo</h1>
          <span>©2021 Quandoo GmbH. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default QuanDooFooter;
