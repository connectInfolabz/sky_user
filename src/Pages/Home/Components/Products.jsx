import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  useEffect(() => {
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

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <>
      <div className="w3l-grids-block-5">
        {/* grids block 5 */}
        <section id="grids5-block">
          <div className="wrapper">
            <h1 className="text-center ">Products</h1>
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
                        <p className="d-flex text-center h1">
                          No products found.
                        </p>
                      )}
                    </div>
                  )}
                  <div className="d-flex justify-content-center mt-2">
                    <div className="btn  text-center">
                      <Link to="/ecommerce">See More Products</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default Products;
