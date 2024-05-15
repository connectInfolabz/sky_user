import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import checkSession from "../auth/authService";
import axios from "axios";

function Header() {
  //eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_MONGO_BASE_URL}/api/viewCategories`
        );
        setCategories(response.data.categories ?? []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();

    const checkLoginStatus = async () => {
      const loggedIn = await checkSession();
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  //eslint-disable-next-line
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_MONGO_BASE_URL}/api/logout`);
      window.location.reload(false);
    } catch (error) {
      alert(error?.response?.data?.message ?? "An error occurred");
    }
  };

  return (
    <>
      <section className="w3l-header-4">
        <header id="headers4-block">
          <div className="wrapper">
            <div className="d-grid nav-mobile-block header-align">
              <div className="logo">
                <Link className="brand-logo" to="/">
                  <span className="fa fa-industry" /> Sky Water Pump
                </Link>
              </div>
              <input type="checkbox" id="nav" />
              <label className="nav" htmlFor="nav" />
              <nav>
                <label htmlFor="drop" className="toggle">
                  Menu
                </label>
                <input type="checkbox" id="drop" />
                <ul className="menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link>
                      Category{" "}
                      <span className="angle-dropdown" aria-hidden="true" />
                    </Link>
                    <input type="checkbox" id="drop-4" />
                    <ul>
                      {categories.map((category) => (
                        <li key={category._id}>
                          <Link
                            to={`/category/${category._id}`}
                            className="drop-text"
                          >
                            {category.categoryName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link to="/ecommerce">
                      Products <span className="drop-text" aria-hidden="true" />
                    </Link>
                    <input type="checkbox" id="drop-5" />
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              {/* {isLoggedIn ? (
                <div className="button">
                  <Link onClick={(e) => handleLogout(e)}>Log Out</Link>
                </div>
              ) : (
                <Link className="button" title="login now" to="/login">
                  Login
                </Link>
              )} */}
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Header;
