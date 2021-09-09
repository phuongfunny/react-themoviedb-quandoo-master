import {
  faAngleDown,
  faBars,
  faCrosshairs,
  faEdit,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Logo from "../../../assets/images/logo_quandoo.svg";
import "./style.scss";

function QuanDooHeader(props) {
  const [openPosition, setOpenPosition] = useState(false);
  const [menuUser, setMenuUser] = useState(false);
  const [data, setData] = useState({
    search: "",
    location: "",
  });
  const handleOnchange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };
  const toggle = () => setMenuUser(!menuUser);
  return (
    <header id="quandoo-header">
      <div className="first-title">FAST, FREE TABLE BOOKING</div>
      <div className="nav-menu">
        <div className="nav-content">
          <div className="header-logo">
            <a href="/">
              <img src={Logo} alt="logo" width="180px" height="50px"></img>
            </a>
          </div>
          <div className="form-search">
            <form className="form">
              <div className="text-find">
                <input
                  type="text"
                  placeholder="Find restaurants or cuisines"
                  value={data.search}
                  onChange={(e) => handleOnchange(e)}
                />
              </div>
              <div
                className="destination"
                onMouseLeave={() => setOpenPosition(false)}
              >
                <input
                  type="text"
                  placeholder="Singapore"
                  value={data.location}
                  onClick={() => setOpenPosition(true)}
                  onChange={(e) => handleOnchange(e)}
                />
                {openPosition ? (
                  <div
                    className="popup_position"
                    onMouseLeave={() => setOpenPosition(false)}
                  >
                    <FontAwesomeIcon icon={faCrosshairs} size="lg" fixedWidth />
                    <span>Near me</span>
                  </div>
                ) : (
                  <button className="btn-destination">
                    <FontAwesomeIcon
                      icon={faCrosshairs}
                      color="orange"
                      size="lg"
                      fixedWidth
                    />
                  </button>
                )}
              </div>
              <div className="submit">
                <button>Find</button>
              </div>
            </form>
          </div>
        </div>
        <div className="nav-mobile">
          <div className="search-mb">
            <a href="/search">
              <FontAwesomeIcon icon={faSearch} size="lg" fixedWidth />
              <span style={{ marginLeft: "10px" }}>Search</span>
            </a>
          </div>
          <div className="user-mb">
            {menuUser ? (
              <FontAwesomeIcon
                icon={faTimes}
                size="lg"
                fixedWidth
                onClick={toggle}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                fixedWidth
                onClick={toggle}
              />
            )}
            {menuUser && (
              <div className="user-mb__item">
                <div>
                  <a href="/">Sign up</a>
                </div>
                <div>
                  <a href="/">Login</a>
                </div>
                <div>
                  <a href="/">
                    EN
                    <FontAwesomeIcon
                      icon={faEdit}
                      size="sm"
                      fixedWidth
                      style={{ marginLeft: "10px" }}
                    />{" "}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="header-user">
          <div className="signup">
            <a href="/">Sign up</a>
          </div>
          <div className="signin">
            <a href="/">Login</a>
          </div>
          <div className="header-lang">
            <b>EN</b>
            <FontAwesomeIcon icon={faAngleDown} size="lg" fixedWidth />
          </div>
        </div>
      </div>
    </header>
  );
}

export default QuanDooHeader;
