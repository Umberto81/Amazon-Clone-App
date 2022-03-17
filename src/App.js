import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Amazon</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
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
