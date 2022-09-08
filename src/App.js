import React, { Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/FirstPage/Home/Home";
import ProductDetails from "./components/SecondPage/ProductDetails/ProductDetails";
import LogIn from "./components/AuthPage/LogIn/LogIn";
import SignUp from "./components/AuthPage/SignUp/SignUp";
import ProductsSection from "./components/FirstPage/ProductsSection/ProductsSection";
import Navigation from "./components/SharedPage/Navigation/Navigation";
import Breakfast from "./components/FirstPage/Home/Foods/Breakfast/Breakfast";
import Lunch from "./components/FirstPage/Home/Foods/Lunch/Lunch";
import Dinner from "./components/FirstPage/Home/Foods/Dinner/Dinner";
import Loading from "./components/SharedPage/Loading/Loading";
// import Loading from "./components/SharedPage/Loading/Loading";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Navigation></Navigation>
        <Toaster />
        <Routes>
          <Route
            path="/"
            element={
              <Home>
                <Route path=":products">
                  <ProductsSection></ProductsSection>
                </Route>
              </Home>
            }
          ></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/productDetails/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="/home" element={<Home></Home>}>
            <Route path="breakfast" element={<Breakfast></Breakfast>}></Route>
            <Route path="lunch" element={<Lunch></Lunch>}></Route>
            <Route path="dinner" element={<Dinner></Dinner>}></Route>
          </Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
