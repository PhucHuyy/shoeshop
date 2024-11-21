import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";

import LoginForm from "./components/layout/login";
import RegisterForm from "./components/layout/register";

function App() {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-slate-100">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account/login" element={<LoginForm />}></Route>
        <Route path="/account/register" element={<RegisterForm />}></Route>
        <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
        <Route path="/collections/shop" element={<ShopPage />} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
