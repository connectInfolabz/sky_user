import React from "react";
import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import { Link } from "react-router-dom";
import Banners from "./Components/Banners";
import Specifications from "./Components/Specifications";
import Features from "./Components/Features";
import Cover from "./Components/Cover";
import Products from "./Components/Products";

function Home() {
  return (
    <div>
      <Header />
      {/* Heroheader14 block */}
      <Banners />
      {/* Heroheader14 block */}
      {/* specifications */}
      <Specifications />
      {/* features */}
      <Features />
      {/* //features */}
      {/* covers */}
      <Cover />
      {/* //covers */}
      {/* content-with-photo4 block */}
      <section className="w3l-content-with-photo-4">
        <div id="content-with-photo4-block">
          <div className="wrapper">
            <div className="cwp4-two">
              <div className="cwp4-text">
                <h4>
                  Maintenance and repairs of motors, prime movers and other
                  parts.
                </h4>
                <p>
                  these pumps are also called rotary pumps, and these are very
                  competitive because of the fact that they remove air from the
                  lines and therefore get rid of air leakage. These are also
                  efficient while dealing with high-viscosity fluids. The main
                  disadvantage of these pumps is that they need extremely little
                  clearance among the revolving pump & the external edge of the
                  unit. Consequently, the revolution must happen at extremely
                  slow speeds. When the water pump is functioned at high speeds,
                  then the fluid can ultimately decrease the efficiency of the
                  pump.
                </p>
                <ul className="cont-4">
                  <li>
                    <span
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    />{" "}
                    The pump material should be weather-resistant for exposed
                    uses
                  </li>
                  <li>
                    <span
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    />{" "}
                    The power of the pump mainly includes horsepower & the flow
                    rate
                  </li>
                  <li>
                    <span
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    />{" "}
                    The motor and fuel of the pump should be electric motor
                  </li>
                  <li>
                    <span
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    />{" "}
                    The total head expulsion, otherwise utmost pump power
                  </li>
                </ul>
              </div>
              <div className="cwp4-image">
                <img
                  style={{ width: "100%" }}
                  src="assets/images/image.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-features-6">
        {/* /features */}
        <div className="features">
          <div className="wrapper">
            <div className="fea-gd-vv">
              <div className="float-lt feature-gd">
                <div className="icon">
                  {" "}
                  <span className="fa fa-clipboard" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h3>Full Service</h3>
                  <p>
                    {" "}
                    Water pumps are used for dewatering reasons decreasing the
                    downtime from huge rain events. The common applications of
                    these pumps include buildings, wells, boost application,
                    circulation of hot water, sump pits, protection of fire
                    systems, etc
                  </p>
                </div>
              </div>
              <div className="float-mid feature-gd">
                <div className="icon">
                  {" "}
                  <span className="fa fa-wrench" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h3>Maintenance</h3>
                  <p>
                    {" "}
                    These pumps are vast addition to our life because they make
                    possible a huge variety of industrial, agricultural and
                    household tasks. But, the variety of water pumps in the
                    marketplace is so adaptable and plentiful that selecting the
                    correct pump appropriate for your requirements is
                    challenging.
                  </p>
                </div>
              </div>
              <div className="float-rt feature-gd">
                <div className="icon">
                  {" "}
                  <span className="fa fa-truck" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h3>Delivery</h3>
                  <p>
                    {" "}
                    If we reside in a city or town, we almost don’t think how
                    the water is supplied to our residents every day. Small
                    villages also frequently supply a set-up of pipes to
                    transfer water for every home within the region. All we
                    require to recognize is how to open the valve at the sink.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //features */}
      </section>
      {/*customers-7*/}
      {/* <section className="w3l-customers-7">
        <div className="customers_sur">
          <div className="wrapper">
            <h3>Testimonials</h3>
            <div className="customers-top_sur">
              <div className="customers-left_sur">
                <div className="customers_grid">
                  <p className="sub-test">
                    Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                  <div className="customers-bottom_sur">
                    <div className="custo-img-res">
                      <img
                        src="assets/images/c1.jpg"
                        alt=""
                        className="img-responsive"
                      />
                    </div>
                    <div className="custo_grid">
                      <h5>Shane Watson</h5>
                      <span>Co-founder</span>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
              <div className="customers-middle_sur">
                <div className="customers_grid">
                  <p className="sub-test">
                    Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                  <div className="customers-bottom_sur">
                    <div className="custo-img-res">
                      <img
                        src="assets/images/c2.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </div>
                    <div className="custo_grid">
                      <h5>Henry Nicholas</h5>
                      <span>Client</span>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
              <div className="customers-right_sur">
                <div className="customers_grid">
                  <p className="sub-test">
                    Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                  <div className="customers-bottom_sur">
                    <div className="custo-img-res">
                      <img
                        src="assets/images/c3.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </div>
                    <div className="custo_grid">
                      <h5>Steve Waugh</h5>
                      <span>Worker</span>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
      </section> */}
      {/*//customers-7*/}
      <Products />
      {/* // grids block 5 */}
      {/* forms */}
      {/* <section className="w3l-forms-9">
        <div className="main-w3">
          <div className="wrapper">
            <div className="grids-forms">
              <div className="main-midd">
                <h4 className="title-head">
                  Keep up to date — Get e-mail updates
                </h4>
                <p>Stay tuned for the latest company news.</p>
              </div>
              <div className="main-midd-2">
                <form action="#" method="post" className="rightside-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <button className="btn" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* //forms */}
      <section className="w3l-feature-3">
        <div className="grid top-bottom">
          <div className="wrapper">
            <div className="middle-section grid-column text-center">
              <div className="three-grids-columns">
                <span className="fa fa-map-marker" />
                <h4>Our offices</h4>
                <p>
                  User interface design includes selecting and&nbsp;arranging
                  interface elements{" "}
                </p>
                <Link to="/contact" className="actionbg">
                  Nearest Office{" "}
                </Link>
              </div>
              <div className="three-grids-columns">
                <span className="fa fa-envelope-o" />
                <h4>Drop us a line</h4>
                <p>
                  Page layout is where these components come together, while
                  wireframing
                </p>
                <Link to="/contact" className="actionbg">
                  Fill Our Form{" "}
                </Link>
              </div>
              <div className="three-grids-columns">
                <span className="fa fa-life-ring" />
                <h4>Open a Ticket</h4>
                <p>
                  For complex projects, wireframes using computer software is
                  popular
                </p>
                <Link to="/login" className="actionbg">
                  Login{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
