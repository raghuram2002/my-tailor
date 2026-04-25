import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import ContactForm from "./Contact/ContactForm";
import BlogPage from "./BlogPage/BlogPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
