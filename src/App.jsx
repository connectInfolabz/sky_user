import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Ecommerce from "./Pages/Ecommerce";
import EcommerceSingle from "./Pages/EcommerceSingle";
import EcommerceCart from "./Pages/EcommerceCart";
import checkSession from "./auth/authService";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsByCategories from "./Pages/ProductsByCategories";
import Home from "./Pages/Home/Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true); // New loading state

  axios.defaults.withCredentials = true;

  //for checking session
  useEffect(() => {
    const authenticateUser = async () => {
      // Call checkSession to determine if user is authenticated
      // setLoading(false); // Set loading to false after checking session
      try {
        const isAuthenticated = await checkSession();
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Set loading to false after authentication check
      }
    };
    if (!isAuthenticated) {
      authenticateUser(); // Check session only if user is not authenticated
    } else {
      setLoading(false); // Set loading to false immediately if user is authenticated
    }
  }, [isAuthenticated]);
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/signUp"
            element={!isAuthenticated ? <SignUp /> : <Navigate to="/" />}
          ></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/ecommerce" element={<Ecommerce />}></Route>
          <Route path="/product/:_id" element={<EcommerceSingle />}></Route>
          <Route
            path="/category/:_id"
            element={<ProductsByCategories />}
          ></Route>
          <Route path="/ecommerce-cart" element={<EcommerceCart />}></Route>
          <Route
            path="*"
            element={<p className="h3 text-center">404 Page Not Found</p>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
