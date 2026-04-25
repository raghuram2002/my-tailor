import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import TopNav from "../Home/topNav/TopNav";
import Footer from "../Home/footer/Footer";
import blogs from "../BlogPage/BlogData.json";
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaShareAlt } from "react-icons/fa";

const ReadMoreBlog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === Number(blogId));

  if (!blog) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <TopNav />
        <div className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
            <Link to="/blog" className="text-pink-600 hover:underline font-semibold">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Find prev/next blogs for navigation
  const currentIndex = blogs.findIndex((b) => b.id === blog.id);
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  // Related blogs (exclude current)
  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNav />

      {/* Hero Image */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[55vh] mt-20 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs text-[#C5A46D] font-semibold uppercase tracking-wide mb-3 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
            <FaCalendarAlt className="text-[10px]" /> Fashion & Style
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center text-sm text-gray-500 flex-wrap">
          <Link to="/" className="hover:text-[#3D1255] transition">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/blog" className="hover:text-[#3D1255] transition">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-[#3D1255] font-semibold line-clamp-1">{blog.title}</span>
        </nav>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Summary */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 mb-8 border-l-4 border-[#3D1255]">
          <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed">
            {blog.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {blog.content}
          </p>
        </div>

        {/* Share & Tags */}
        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {["Fashion", "Tailoring", "Style", "Trends"].map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-[#3D1255] hover:text-white transition cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#3D1255] transition font-medium">
            <FaShareAlt /> Share this article
          </button>
        </div>

        {/* Prev / Next Navigation */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevBlog ? (
            <Link
              to={`/blog/${prevBlog.id}`}
              className="group flex items-center gap-3 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <FaArrowLeft className="text-[#C5A46D] text-sm flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div className="min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Previous</p>
                <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-[#3D1255] transition">
                  {prevBlog.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextBlog && (
            <Link
              to={`/blog/${nextBlog.id}`}
              className="group flex items-center justify-end gap-3 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition text-right"
            >
              <div className="min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Next</p>
                <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-[#3D1255] transition">
                  {nextBlog.title}
                </p>
              </div>
              <FaArrowRight className="text-[#C5A46D] text-sm flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        <h2 className="text-2xl font-bold text-[#3D1255] mb-8 text-center">
          More Articles You'll Love
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedBlogs.map((b) => (
            <Link
              to={`/blog/${b.id}`}
              key={b.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-gray-800 group-hover:text-[#3D1255] transition-colors line-clamp-2">
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2 flex-grow">{b.description}</p>
                <div className="mt-3 flex items-center text-pink-600 font-semibold text-sm gap-2">
                  <span>Read More</span>
                  <FaArrowRight className="text-xs" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReadMoreBlog;
