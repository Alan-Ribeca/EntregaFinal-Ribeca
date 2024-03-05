import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { Footer } from "./components/footer/Footer";
import { Cart } from "./components/cart/Cart";
import { Checkout } from "./components/checkout/Checkout";
import { ItemDetailsContainer } from "./components/itemDetailsContainer/ItemDetailsContainer";
import { NotFound } from "./components/notFound/NotFound";
import { CarritoProvider } from "./context/CartContext";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar />
          <main className="main">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:cid" element={<ItemListContainer />} />
              <Route path="/product/:pid" element={<ItemDetailsContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
};
