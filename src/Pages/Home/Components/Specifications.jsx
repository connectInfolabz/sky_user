import React, { useEffect, useState } from "react";
import axios from "axios";
function Specifications() {
  const [data, setData] = useState(null); // Initialize data as null
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_MONGO_BASE_URL}/admin/getCounts`)
      .then((res) => {
        setData(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData({}); // Set data to an empty object if there's an error
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  console.log(data);
  return (
    <section className="w3l-specifications-9">
      <div className="main-w3">
        <div className="wrapper">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="d-flex main-cont-wthree-fea justify-content-center">
              <div className="grids-speci">
                <div className="speci-inner">
                  <div className="sp-lft">
                    <span className="fa fa-handshake-o" />
                  </div>
                  <div className="sp-rgt">
                    <h3 className="title-spe"> {data.totalProductCount}</h3>
                    <h4>
                      <bold>Our Products</bold> in the market
                    </h4>
                  </div>
                </div>
              </div>
              <div className="grids-speci midd-eff-las">
                <div className="speci-inner">
                  <div className="sp-lft">
                    <span className="fa fa-globe" />
                  </div>
                  <div className="sp-rgt">
                    <h3 className="title-spe"> {data.totalEnquiryCount}</h3>
                    <h4>
                      <bold>Feedbacks </bold>
                      from around the world
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* //specifications */}
    </section>
  );
}

export default Specifications;
