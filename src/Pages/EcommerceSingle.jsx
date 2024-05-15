import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function EcommerceSingle() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState(null);
  const [enquiryData, setEnquiryData] = useState({
    productId: "",
    username: "",
    email: "",
    enquiry: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_MONGO_BASE_URL}/api/getOneProduct`,
          {
            productId,
          }
        );
        const data = await response.data;
        console.log(data);
        setProduct(data.product);
      } catch (error) {
        // alert(error.response.data.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();

    setEnquiryData({ productId: productId });
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEnquiryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validEmail = enquiryData.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (!validEmail) {
      toast.error("Please enter a valid email address", {
        autoClose: 1500,
      });
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/api/addEnquiry`,
        enquiryData
      );

      toast.success(response.data.message, {
        autoClose: 1500,
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1500,
      });
    } finally {
      setEnquiryData((prevData) => ({
        ...prevData,
        username: "",
        email: "",
        enquiry: "",
      }));
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      {product && (
        <section className="w3l-inner-banner-main">
          <div className="about-inner">
            <div className="wrapper">
              <ul className="breadcrumbs-custom-path">
                <h3>Ecommerce Single</h3>
                <li>
                  <Link to="/">
                    Home{" "}
                    <span className="fa fa-angle-right" aria-hidden="true" />
                  </Link>
                </li>
                <li className="active">Ecommerce Single</li>
              </ul>
            </div>
          </div>
        </section>
      )}
      {product && (
        <section className="w3l-features-photo-7">
          <div className="features-photo-7_sur">
            <div className="wrapper">
              <div className="features-photo-7_top">
                <div className="features-photo-7_top-right">
                  <div className="galleryContainer">
                    <div className="gallery">
                      {product.productImgs.map((img, index) => (
                        <React.Fragment key={index}>
                          <input
                            type="radio"
                            name="controls"
                            id={`c${index + 1}`}
                            defaultChecked={index === 0}
                          />
                          <img
                            className="galleryImage"
                            id={`i${index + 1}`}
                            src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/productImage/${img}`}
                            alt=""
                          />
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="thumbnails">
                      {product.productImgs.map((img, index) => (
                        <label
                          key={index}
                          className="thumbnailImage"
                          htmlFor={`c${index + 1}`}
                        >
                          <img
                            style={{
                              width: "75px",
                              height: "75px",
                              objectFit: "cover",
                            }}
                            src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/productImage/${img}`}
                            className="img-responsive"
                            alt=""
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="features-photo-7_top-left">
                  <h3>{product.productName}</h3>
                  <h5>₹ {product.productPrice.toFixed(2)}</h5>
                  <h4>Enquiry:-</h4>
                  {/* form goes here */}
                  <div className="form-group">
                    <form onSubmit={handleSubmit}>
                      <div className="row col-12 ">
                        <div className="col-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="username"
                            value={enquiryData.username}
                            placeholder="Name"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-6 mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="name"
                            name="email"
                            value={enquiryData.email}
                            placeholder="Email"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            name="enquiry"
                            onChange={handleChange}
                            value={enquiryData.enquiry}
                            placeholder="Your Enquiry"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary my-2 w-25"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="desc_single1">
                <h5>Product Information</h5>
                <p>{product.productDesc}</p>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}

export default EcommerceSingle;
