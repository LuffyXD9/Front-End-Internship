import React, { useState } from "react";
import "./SearchBar.css"; // Make sure to create or update this CSS file

const SearchBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary ">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img
                src="https://hardwareshack.in/wp-content/uploads/2020/06/onlinelogomaker-060220-1408-8164-2000-transparent-e1591949743684.png"
                width="260"
                height="30"
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleSidebar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle my-2"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                all
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </div>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>
          </div>

          <div className="desktop-content">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button type="button" className="btn btn-warning pill mx-2">
              Login|Register
            </button>
          </div>

          <div className="cart-buttons">
            <button type="button" className="btn btn-warning pill">
              Cart<span className="bi bi-cart"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SearchBar;
