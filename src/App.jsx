import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";

function App() {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-slate-100">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections/shop" element={<ShopPage />} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
