import React from "react";

const SearchBar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://hardwareshack.in/wp-content/uploads/2020/06/onlinelogomaker-060220-1408-8164-2000-transparent-e1591949743684.png"
              width="260"
              height="30"
              alt=""
            />
          </a>

          {/* <a className="navbar-brand" href="#">Offcanvas navbar</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <div className="dropdown mx-2">
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
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
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

              {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
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
          </div>
          <div className="dropdown my-2 mx-2">
            <button
              className="btn btn-secondary dropdown-toggle"
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
          <button type="button" className="btn btn-warning pill mx-10 ">
            Login|Register
          </button>
          <button type="button" className="btn btn-warning pill">
            Cart<span className="bi bi-cart"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default SearchBar;
