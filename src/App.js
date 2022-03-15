import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Amazon
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Routes>
        <Route exact path="/" element={<HomeScreen/>} ></Route> 
        <Route path="/product/:id" element={<ProductScreen/>}></Route>
        </Routes>
        
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
