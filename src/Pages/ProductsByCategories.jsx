import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

function ProductsByCategories() {
  const location = useLocation();
  const categoryId = location.pathname.split("/")[2];
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_MONGO_BASE_URL}/api/getProductByCategory`,
          {
            categoryId,
          }
        );

        const data = response.data;
        console.log(data);
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const handlePageChange = (page) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(page);
  };

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

            {/* Pagination */}

            <div className="pagination-container d-flex justify-content-center mt-5">
              <Pagination
                className="pagination"
                onChange={handlePageChange}
                current={currentPage}
                total={products.length}
                pageSize={productsPerPage}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductsByCategories;
