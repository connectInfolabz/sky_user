import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

function Ecommerce() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    axios
      .post(`${process.env.REACT_APP_MONGO_BASE_URL}/api/getProducts`)
      .then((response) => {
        if (response.data && response.data.success) {
          setProducts(response.data.products || []);
        } else {
          console.error(response.data && response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <Header />
      <section className="w3l-inner-banner-main">
        <div className="about-inner">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <h3>Ecommerce</h3>
              <li>
                <Link to="/">
                  Home <span className="fa fa-angle-right" aria-hidden="true" />
                </Link>
              </li>
              <li className="active">Ecommerce</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="w3l-features-15">
        <section id="features15-block">
          <div className="d-grid features15-col-3">
            <div className="features15-col-text d-grid">
              <div className="features15-info">
                <span className="fa fa-plane" />
              </div>
              <div className="features15-para">
                <h4>Free Shipping</h4>
                <p>ON ORDERS WORTH 5000 ₹ </p>
              </div>
            </div>
            <div className="features15-col-text d-grid">
              <div className="features15-info">
                <span className="fa fa-money" />
              </div>
              <div className="features15-para">
                <h4>Warehouse Prices</h4>
                <p>WITH LOW PRICE GUARANTEE</p>
              </div>
            </div>
            <div className="features15-col-text d-grid">
              <div className="features15-info">
                <span className="fa fa-shield" />
              </div>
              <div className="features15-para">
                <h4>Secure Shopping</h4>
                <p>CERTIFIED BY AUTHORITIES </p>
              </div>
            </div>
            <div className="features15-col-text d-grid">
              <div className="features15-info">
                <span className="fa fa-shopping-cart" />
              </div>
              <div className="features15-para">
                <h4>Largest Selection</h4>
                <p>OF TOP QUALITY PRODUCTS</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="w3l-products-1">
        <div className="products1">
          <div className="wrapper">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="products1-content">
                {currentProducts.length > 0 ? (
                  currentProducts.map((product) => (
                    <div className="column" key={product._id}>
                      <Link to={`/product/${product._id}`}>
                        <img
                          src={`${
                            process.env.REACT_APP_MONGO_BASE_URL
                          }/images/productImage/${
                            product.productImgs &&
                            product.productImgs.length > 0
                              ? product.productImgs[0]
                              : ""
                          }`}
                          className="img-responsive"
                          alt={product.productName || ""}
                        />
                      </Link>
                      <h4>
                        <Link to={`/product/${product._id}`}>
                          {product.productName || ""}
                        </Link>
                      </h4>
                      <p>₹ {(product.productPrice || 0).toFixed(2)}</p>
                    </div>
                  ))
                ) : (
                  <p className="d-flex text-center h1">No products found.</p>
                )}
              </div>
            )}
            <div className="pagination-container d-flex justify-content-center mt-5">
              <Pagination
                current={currentPage}
                total={products.length}
                pageSize={productsPerPage}
                onChange={handlePageChange}
                hideOnSinglePage={true}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Ecommerce;
