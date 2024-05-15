import React from "react";
import { Link } from "react-router-dom";
function Features() {
  return (
    <section className="w3l-feature-9">
      <div className="main-w3">
        <div className="wrapper">
          <div className="main-cont-wthree-fea">
            <div className="grids-feature">
              <span className="fa fa-plug" />
              <h4>
                <Link href="#feature" className="title-head">
                  Automotive Manufacturing
                </Link>
              </h4>
              <p>
                The working principle of a water pump mainly depends upon the
                positive displacement principle as well as kinetic energy to
                push the water.
              </p>
            </div>
            <div className="grids-feature">
              <span className="fa fa-cogs" />
              <h4>
                <Link href="#feature" className="title-head">
                  Mechanical Engineering
                </Link>
              </h4>
              <p>
                These pumps use AC power otherwise DC power for energizing the
                motor of the water pump whereas others can be energized other
                kinds of drivers like gasoline engines otherwise diesel.
              </p>
            </div>
            <div className="grids-feature">
              <span className="fa fa-legal" />
              <h4>
                <Link href="#feature" className="title-head">
                  Industrial Construction
                </Link>
              </h4>
              <p>
                The water pump is a portable device and can be applied in
                several household applications. These pumps are used for pumping
                the huge amount of water from one place to another.
              </p>
            </div>
            <div className="grids-feature">
              <span className="fa fa-tint" />
              <h4>
                <Link href="#feature" className="title-head">
                  Oil &amp; Gas Energy
                </Link>
              </h4>
              <p>
                The collection of water pumps are very large, therefore, while
                selecting a strong and consistent one, one should think about
                the requirement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
