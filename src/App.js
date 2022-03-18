import React, { useContext } from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Helmet } from "react-helmet-async";
import {Store} from "./Store";

function App() {
  const {state} = useContext(Store);
const {cart} = state;

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <Helmet>
          <title>Amazon</title>
        </Helmet>
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Amazon</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {" "}
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <h1>Featured Products</h1>
            <Routes>
              <Route exact path="/" element={<HomeScreen />}></Route>
              <Route path="/product/:slug" element={<ProductScreen />}></Route>
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
