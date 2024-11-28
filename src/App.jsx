import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import ShoeTF from "./pages/ShoeTF";
import ShoeIC from "./pages/ShoeIC";
import Accessory from "./pages/Accessory";
import HotSales from "./pages/HotSales";
import Profile from "./pages/Profile";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import LoginForm from "./components/layout/login";
import RegisterForm from "./components/layout/register";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-slate-100">
      <div className="min-h-[100vh]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account/login" element={<LoginForm />}></Route>
          <Route path="/account/register" element={<RegisterForm />}></Route>
          <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
          <Route path="/collections/shop" element={<ShopPage />} />
          <Route path="/collections/giay-co-nhan-tao" element={<ShoeTF />} />
          <Route path="/collections/giay-futsal" element={<ShoeIC />} />
          <Route path="/collections/phu-kien" element={<Accessory />} />
          <Route path="/collections/hot-sales" element={<HotSales />} />
          <Route path="/product/:productId" element={<DetailProduct />} />
          <Route path="/account/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
