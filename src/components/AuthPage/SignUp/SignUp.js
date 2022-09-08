import React, { useRef, useState } from "react";
import "./SignUp.css";
import logo from "../../../images/logo2.png";
import { Form, Toast } from "react-bootstrap";
import banner from "../../../images/bannerbackground.png";
import { Link } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast, { Toaster } from "react-hot-toast";
import { AuthErrorCodes } from "firebase/auth";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passError: "",
    othersError: "",
  });

  // ================== All Function =====================
  const handleEmail = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };

  const handlePass = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };
  console.log(userInfo.password.trim());

  const handleConfirmPass = (e) => {
    setUserInfo({ ...userInfo, confirmPass: e.target.value });
    console.log(userInfo.confirmPass);
    if (userInfo.password === userInfo.confirmPass) {
      console.log("match");
      setErrors({ ...error, passError: "" });
    } else {
      return setErrors({ ...errors, passError: "Password did not match" });
    }
  };

  const handleSingUp = (e) => {
    e.preventDefault();
    if (userInfo.password === userInfo.confirmPass && userInfo.email) {
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
      toast.success("Account created");
      console.log(userInfo);
    }
  };

  // =====================================================
  return (
    <div className="s-container d-flex flex-column justify-center">
      <div className="header-icon container">
        <img style={{ width: "400px" }} src={logo} alt="" />
      </div>
      <div className="form-container ">
        <form
          onSubmit={handleSingUp}
          className="d-flex mt-4 flex-column w-25 mx-auto fs-5"
        >
          <input
            className="p-3 m-2 border-0 rounded-3"
            type="text"
            placeholder="Name"
            name="name"
            onBlur={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
          <input
            className="p-3 m-2 border-0 rounded-3"
            type="email"
            placeholder="Email"
            name="email"
            onBlur={handleEmail}
          />
          {errors && <p className="text-danger">{errors.emailError}</p>}
          <input
            className="p-3 m-2 border-0 rounded-3"
            type="password"
            placeholder="Password"
            name="password"
            onBlur={handlePass}
          />{" "}
          {errors && <p className="text-danger">{errors.passError}</p>}
          <input
            className="p-3 m-2 border-0 rounded-3"
            type="Password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onBlur={handleConfirmPass}
          />
          {/* {errors && <p className="text-danger">{errors.confirmPassError}</p>} */}
          <input
            className="p-3 button m-2 border-0 rounded-3"
            type="submit"
            name="btn"
            id="submit-btn"
            value="Signup"
          />
        </form>
        <p
          className="container text-center"
          style={{ color: "rgb(239, 94, 43)", fontWeight: "600" }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              marginLeft: "10px",
              color: "rgb(239, 44, 63)",
            }}
          >
            Login here
          </Link>
        </p>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SignUp;
