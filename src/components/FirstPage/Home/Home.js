import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../SharedPage/Footer/Footer";
import "./Home.css";
import FoodSection from "./FoodSection/FoodSection";
import Loading from "../../SharedPage/Loading/Loading";
const WhyChose = React.lazy(() => import("../WhyChose/WhyChose"));
const Breakfast = React.lazy(() => import("./Foods/Breakfast/Breakfast"));
const Header = React.lazy(() => import("./Header/Header"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header></Header>
        <FoodSection></FoodSection>
        <WhyChose></WhyChose>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
