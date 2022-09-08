import React, { Fragment } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { CgShoppingCart } from "react-icons/cg";
import "./Navigation.css";
import logo from "../../../images/logo2.png";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLInk from "../../CustomLink/CustomLInk";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { AiOutlineShopping } from "react-icons/ai";

const Navigation = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  const counter = useSelector((state) => state.cart.product.length);

  return (
    <Navbar
      collapseOnSelect
      className="Nav-section sticky-top shadow"
      expand="lg"
    >
      <Container fluid className="mx-4">
        <Navbar.Brand as={Link} to="/">
          <img className="logo-icon" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="flex h-8 items-center  w-20 justify-center">
            {counter != 0 && (
              <Fragment>
                <AiOutlineShopping className="text-2xl" />
                <span className="text-2xl text-red-600">{counter}</span>
              </Fragment>
            )}
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} as={CustomLInk} to="/login">
              <button className="login-btn"> Login </button>
            </Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/signup">
              <button className="signup-btn">
                {user ? (
                  <button className="signout-btn" onClick={handleSignOut}>
                    Signout
                  </button>
                ) : (
                  "Signup"
                )}
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
