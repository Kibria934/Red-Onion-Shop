import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import CustomLInk from "../../../CustomLink/CustomLInk";
import Breakfast from "../Foods/Breakfast/Breakfast";
import "./FoodSection.css";

const FoodSection = () => {
  const form = useLocation();
  return (
    <div className="food-section">
      <div className="d-flex f-tag justify-content-center">
        <CustomLInk className="f-text" as={Link} to="/home/breakfast">
          Breakfast
        </CustomLInk>
        <CustomLInk className="f-text" as={Link} to="/home/lunch">
          Lunch
        </CustomLInk>
        <CustomLInk className="f-text" as={Link} to="/home/dinner">
          Dinner
        </CustomLInk>
      </div>
      <div className="food-menu">
        {form.pathname == "/" || form.pathname == "/home" ? (
          <Breakfast></Breakfast>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      <div className="container flex justify-center mt-10 mb-4  ">
        <Link
          className="checkout-btn py-2 border px-10 rounded-lg bg-gray-400 text-white text-decoration-none text-center"
          to={"/home"}
        >
          Checkout Your Food
        </Link>
      </div>
    </div>
  );
};

export default FoodSection;
