import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import ContactForm from "./Contact/ContactForm";
import BlogPage from "./BlogPage/BlogPage";
import ReadMoreBlog from "./BlogPage/ReadMoreBlog";
import Women from "./Women/Women";
import CategoryPage from "./Women/CategoryPage";
import ProductDetail from "./Women/ProductDetail";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:blogId" element={<ReadMoreBlog />} />
        <Route path="/women" element={<Women />} />
        <Route path="/women/:category" element={<CategoryPage />} />
        <Route path="/women/:category/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Backward-compat redirects for old category routes */}
        <Route path="/sarees" element={<Navigate to="/women/sarees" replace />} />
        <Route path="/blouse" element={<Navigate to="/women/blouse" replace />} />
        <Route path="/kurti" element={<Navigate to="/women/kurtis" replace />} />
        <Route path="/salwar" element={<Navigate to="/women/salwar" replace />} />
        <Route path="/lehenga" element={<Navigate to="/women/lehenga" replace />} />
        <Route path="/tops" element={<Navigate to="/women/tops" replace />} />
        <Route path="/skirt" element={<Navigate to="/women/skirt" replace />} />
      </Routes>
    </div>
  );
}

export default App;
