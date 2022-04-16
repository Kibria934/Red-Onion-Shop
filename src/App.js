import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/FirstPage/Home/Home";
import ProductDetails from "./components/SecondPage/ProductDetails/ProductDetails";
import LogIn from "./components/AuthPage/LogIn/LogIn";
import SignUp from "./components/AuthPage/SignUp/SignUp";
import ProductsSection from "./components/FirstPage/ProductsSection/ProductsSection";
function App() {
  return (
    <div className="App">
      <h1>Bismillahir rahmanir rahim</h1>
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
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
