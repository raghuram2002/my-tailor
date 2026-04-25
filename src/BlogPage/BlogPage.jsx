import { Link } from "react-router-dom";
import TopNav from "../Home/topNav/TopNav";
import Footer from "../Home/footer/Footer";
import blogs from "../BlogPage/BlogData.json";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNav />

      {/* Hero Section */}
      <section className="relative w-full h-[35vh] sm:h-[45vh] mt-20 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6461158/pexels-photo-6461158.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Fashion Blog"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#C5A46D] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-2">
            Style & Trends
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Our Fashion Blog
          </h1>
          <p className="mt-3 text-gray-200 text-sm sm:text-base max-w-lg">
            Discover the latest in fashion, tailoring tips, and style inspiration
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6">
        <nav className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-[#3D1255] transition">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#3D1255] font-semibold">Blog</span>
        </nav>
      </div>

      {/* Blog Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
        {/* Featured Post (first blog) */}
        <div className="mb-12">
          <Link
            to={`/blog/${blogs[0].id}`}
            className="group block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto overflow-hidden">
                <img
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#C5A46D] font-semibold uppercase tracking-wide mb-3">
                  <FaCalendarAlt className="text-[10px]" /> Featured Post
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#3D1255] transition-colors leading-snug">
                  {blogs[0].title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed line-clamp-3">
                  {blogs[0].content}
                </p>
                <div className="mt-5 flex items-center text-pink-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  <span>Read Full Article</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Rest of the blogs */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(1).map((blog) => (
            <Link
              to={`/blog/${blog.id}`}
              key={blog.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h2 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-[#3D1255] transition-colors leading-snug line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-500 text-sm mt-2 flex-grow line-clamp-3">
                  {blog.description}
                </p>
                <div className="mt-4 flex items-center text-pink-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  <span>Read More</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-[#3D1255] to-[#2E1F47] py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Stay in Style</h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Get the latest fashion tips and tailoring trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-xl text-gray-800 text-sm border-1 border-pink-600 focus:outline-none focus:ring-2 focus:ring-[#C5A46D]"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-[#C5A46D] text-white font-semibold rounded-xl hover:shadow-lg transition-all text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
