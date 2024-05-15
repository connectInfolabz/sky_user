import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  //initialize navigate
  const navigate = useNavigate();

  //storing registration data from input fields
  const [registrationData, setRegistrationData] = useState({
    username: "",
    email: "",
    role: "1",
    phoneNo: "",
    password: "",
  });

  //getting textdata from input fields
  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;

    //storing textdata from input fields
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //adding user details to MongoDB
  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();

    //console.log("Data: ",registrationData);
    //sending API for storing user data to MongoDB
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/api/signup`,
        registrationData
      );
      console.log("res: ", response);
      console.log(response);
      alert("Registered Succesfully!", response);

      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
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
                <h6>Create Account</h6>
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
                <form onSubmit={handleRegistrationSubmit}>
                  <input
                    type="text"
                    name="username"
                    value={registrationData.username}
                    onChange={handleRegistrationChange}
                    placeholder="Name"
                    required="required"
                  />
                  <input
                    type="email"
                    name="email"
                    value={registrationData.email}
                    onChange={handleRegistrationChange}
                    placeholder="Email"
                    required="required"
                  />
                  <input
                    type="tel"
                    name="phoneNo"
                    placeholder="Phone No"
                    maxLength="10"
                    onChange={handleRegistrationChange}
                    value={registrationData.phoneNo}
                    required="required"
                  />
                  <input
                    type="password"
                    name="password"
                    value={registrationData.password}
                    onChange={handleRegistrationChange}
                    placeholder="Password"
                    required="required"
                  />
                  <button type="submit">Sign Up</button>
                </form>
                <h5>
                  Already a member? <Link to="/login">Log in</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
