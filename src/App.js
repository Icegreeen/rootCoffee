import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"

import { Shop }from "./pages/shop/Shop.jsx";
import { Cart }from "./pages/cart/Cart.jsx";
import { ShopContextProvider } from './context/shop-context';

import { Container } from "./style"
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/"  element={<Shop />}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </Container>
  );
}

export default App;
