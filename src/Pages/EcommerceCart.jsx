import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

function EcommerceCart() {
  return (
    <>
      <Header />
      <section className="w3l-inner-banner-main">
        <div className="about-inner">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <h3>Ecommerce Cart</h3>
              <li>
                <Link to="/">
                  Home
                  <span className="fa fa-angle-right" aria-hidden="true" />
                </Link>
              </li>
              <li className="active">Ecommerce Cart</li>
            </ul>
          </div>
        </div>
      </section>
      {/* //covers */}
      <section className="w3l-ecom-cart">
        <div className="covers-main">
          <div className="wrapper">
            <h1>Shopping Cart</h1>
            <div className="shopping-cart">
              <div className="column-labels">
                <label className="product-image">Items</label>
                <label className="product-details">Product</label>
                <label className="product-price">Price</label>
                <label className="product-quantity">Quantity</label>
                <label className="product-line-price">Total</label>
              </div>
              <div className="product">
                <div className="product-image">
                  <Link to="ecommerce-single.html">
                    <img
                      src="assets/images/p2.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </Link>
                </div>
                <div className="product-details">
                  <div className="product-title">
                    <Link to="ecommerce-single.html">Driller</Link>
                  </div>
                  <p className="product-description">Lorem Ipsum</p>
                </div>
                <div className="product-price">16.99</div>
                <div className="product-quantity">
                  <input type="number" defaultValue={2} min={1} />
                </div>
                <div className="product-line-price">25.98</div>
              </div>
              <div className="product">
                <div className="product-image">
                  <Link to="ecommerce-single.html">
                    <img
                      src="assets/images/p4.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </Link>
                </div>
                <div className="product-details">
                  <div className="product-title">
                    <Link to="ecommerce-single.html">Machine</Link>
                  </div>
                  <p className="product-description">Lorem Ipsum</p>
                </div>
                <div className="product-price">25.99</div>
                <div className="product-quantity">
                  <input type="number" defaultValue={1} min={1} />
                </div>
                <div className="product-line-price">45.99</div>
              </div>
              <div className="product">
                <div className="product-image">
                  <Link to="ecommerce-single.html">
                    <img
                      src="assets/images/p1.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </Link>
                </div>
                <div className="product-details">
                  <div className="product-title">
                    <Link to="ecommerce-single.html">Screw Driver</Link>
                  </div>
                  <p className="product-description">Lorem Ipsum</p>
                </div>
                <div className="product-price">69.99</div>
                <div className="product-quantity">
                  <input type="number" defaultValue={1} min={1} />
                </div>
                <div className="product-line-price">69.99</div>
              </div>
              <div className="totals">
                <div className="totals-item">
                  <label>Subtotal</label>
                  <div className="totals-value" id="cart-subtotal">
                    141.96
                  </div>
                </div>
                <div className="totals-item">
                  <label>Tax (5%)</label>
                  <div className="totals-value" id="cart-tax">
                    3.60
                  </div>
                </div>
                <div className="totals-item">
                  <label>Shipping</label>
                  <div className="totals-value" id="cart-shipping">
                    15.00
                  </div>
                </div>
                <div className="totals-item totals-item-total">
                  <label>Grand Total</label>
                  <div className="totals-value" id="cart-total">
                    160.56
                  </div>
                </div>
              </div>
              <Link to="login.html" className="checkout">
                Checkout
              </Link>
            </div>
          </div>
        </div>
        {/* close script */}
        {/* //close script */}
      </section>
      <Footer />
    </>
  );
}

export default EcommerceCart;
