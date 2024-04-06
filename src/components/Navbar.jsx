import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Job Portal
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse ps-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown px-3">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink to="/profile">
                        <span className="dropdown-item cursor" to="#">
                          Profile
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/my-jobs">
                        <span className="dropdown-item cursor" to="#">
                          My Jobs
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/settings">
                        <span className="dropdown-item cursor" to="#">
                          Settings
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-3">
                  <NavLink className="nav-link" to="/c-login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink className="nav-link" to="/employer">
                    Employer/Job Post
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
