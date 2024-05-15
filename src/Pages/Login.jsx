import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  //hook for Storing email & password
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "1",
  });

  //getting textdata from input fields
  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    //storing textdata from input fields
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //callback function to FIRE login API
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    //calling Login API
    try {
      await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/login`,
        loginData
      );
      toast.success("Login Succesfully!", {
        autoClose: 1000,
        onClose: () => {
          window.location.reload(false);
        },
      });
    } catch (error) {
      console.log("Login Err: ", error);
      alert(error.response.data.message);
    }

    //set login data in Login hook
    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      {/*Login */}
      <section className="w3l-forms-23">
        <div id="forms23-block">
          <div className="wrapper">
            <div className="d-grid forms23-grids">
              <div className="frm-tp">
                <div className="form23-text">
                  <h3>Industries</h3>
                  <p>
                    To keep connected with us please login with your personal
                    information by email address and password
                  </p>
                  <Link to="/" className="actionbg2 btn">
                    Back to home
                  </Link>
                </div>
              </div>
              <div className="form23">
                <h6>You can join with</h6>
                {/* <ul className="log-head">
                  <li>
                    <a className="href" href="#">
                      <span className="fa fa-facebook" />
                      <br />
                      Login with Facebook
                    </a>
                  </li>
                  <li>
                    <a className="href" href="#">
                      <span className="fa fa-google-plus" />
                      <br />
                      Login with Gmail
                    </a>
                  </li>
                </ul> */}
                <form onSubmit={handleLoginSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    placeholder="Email"
                    required="required"
                  />
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    placeholder="Password"
                    required="required"
                  />
                  {/* <a href="#URL">Forgot your password?</a> */}
                  <button type="submit">Login</button>
                </form>
                <h5>
                  Don't have an account? <Link to="/signUp">Sign up</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
