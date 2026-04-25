import TopNav from '../Home/TopNav/TopNav'
import Footer from '../Home/footer/Footer'
import blogs from '../BlogPage/BlogData.json'

const BlogPage = () => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNav />

      {/* Blog Section */}
      <main className="flex-grow container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-10">
          Our Fashion Blog
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
                <div
                key={blog.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
                >
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                    <h2 className="text-xl font-semibold text-gray-800">
                    {blog.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-2 flex-grow">
                    {blog.description}
                    </p>
                    <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition self-start">
                    Read More
                    </button>
                </div>
                </div>
            ))}
            </div>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPage
