import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Banners() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_MONGO_BASE_URL}/api/getBanner`)
      .then((response) => {
        setBanners(response.data.banner);
      })
      .catch((error) => {
        console.error("Error fetching banners:", error);
      });
  }, []);
  return (
    <section className="w3l-hero-headers-14">
      <div className="hh14-block">
        <section id="hh14-content">
          <div className="wrapper">
            <div>
              {/* main-slider */}
              <div className="main-slider">
                <div className="csslider infinity" id="slider1">
                  {banners.map((banner, index) => (
                    <input
                      key={index}
                      type="radio"
                      name="slides"
                      defaultChecked={index === 0 ? "checked" : ""}
                      id={`slides_${index + 1}`}
                    />
                  ))}
                  <ul>
                    {banners.map((banner, index) => (
                      <li key={index}>
                        <div className="slider-info">
                          <div className="d-grid hh14-text">
                            <div className="hh14-info">
                              <h3 className="text-white">
                                {banner.bannerTitle}
                              </h3>
                              <p className="text-white ">
                                {" "}
                                {banner.bannerDesc}
                              </p>
                              <Link to={"/"} className="actionbg btn">
                                Start Exploring
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="navigation">
                    <div>
                      {banners.map((banner, index) => (
                        <label key={index} htmlFor={`slides_${index + 1}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* /main-slider */}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Banners;
