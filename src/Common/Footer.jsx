import React, { useEffect, useState } from "react";
import axios from "axios";
function Footer() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/api/getContactDetails`
      );
      setData(response.data.contactDetail[0]);
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <>
      <section className="w3l-footer-29-main ">
        <div className="footer-29 ">
          <div className="wrapper">
            <div className="d-grid grid-col-4 footer-top-29">
              <div className="footer-list-29">
                <h6 className="footer-title-29">Sky Water Pump</h6>
                <ul>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footer-list-29">
                <ul>
                  <h6 className="footer-title-29">Solutions</h6>
                  <li>
                    <a href="/ecommerce">Our Products</a>
                  </li>
                </ul>
              </div>
              {/* <div className="footer-list-29">
                <ul>
                  <h6 className="footer-title-29">Industries</h6>
                  <li>
                    <a href="services.html">Electronic Materials</a>
                  </li>
                  <li>
                    <a href="services.html">Gift &amp; Apparel</a>
                  </li>
                  <li>
                    <a href="services.html">Auto Parts</a>
                  </li>
                  <li>
                    <a href="services.html">Power Systems</a>
                  </li>
                  <li>
                    <a href="services.html">Building Management</a>
                  </li>
                </ul>
              </div> */}
              <div className="footer-list-29">
                <h6 className="footer-title-29">Contact Info</h6>
                <div className="cont-details-main">
                  <div className="cont-top1">
                    <div className="cont-left2">
                      <span className="fa fa-mobile" />
                    </div>
                    <div className="cont-right1">
                      <h6>
                        <a href="tel:+142 5897555">Phone</a>
                      </h6>
                      <p>{data.phone}</p>
                    </div>
                  </div>
                  <div className="cont-top1">
                    <div className="cont-left1">
                      <span className="fa fa-clock-o" />
                    </div>
                    <div className="cont-right1">
                      <h6>Email</h6>
                      <p>{data.email}</p>
                    </div>
                  </div>
                  <div className="cont-top1">
                    <div className="cont-left1">
                      <span className="fa fa-map-marker" />
                    </div>
                    <div className="cont-right1">
                      <h6>Address</h6>
                      <p>{data.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="footer_copy">
          <div className="wrapper">
            {/* <div className="d-grid grid-col-2 midd-footer-29">
              <div className="main-social-footer-29">
                <a href="/#">
                  <span className="fa fa-facebook" />
                </a>
                <a href="/#">
                  <span className="fa fa-twitter" />
                </a>
                <a href="/#">
                  <span className="fa fa-instagram" />
                </a>
                <a href="/#">
                  <span className="fa fa-dribbble" />
                </a>
                <a href="/#">
                  <span className="fa fa-linkedin" />
                </a>
              </div>
              <ul className="list-btm-29">
                <li>
                  <a href="#link">Privacy policy</a>
                </li>
                <li>
                  <a href="#link">Term of service</a>
                </li>
              </ul>
            </div> */}
            <div className="d-grid grid-col-2 bottom-copies">
              <p className="copy-footer-29">
                © 2024 Sky Water Pump Production. All rights reserved.
              </p>
              <p className="sub-paragraph right-side-con">
                Design By <a href="/#">Sky Waterpumos Team</a>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* move top */}
        <button onclick="topFunction()" id="movetop" title="Go to top">
          <span className="fa fa-angle-up" />
        </button>
        {/* /move top */}
      </section>
    </>
  );
}

export default Footer;
