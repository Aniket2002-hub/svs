'use client';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';

const blogs = [
  {
    slug: 'vizag-real-estate-boom',
    title: 'Vizag’s Real Estate Boom: Why Now is the Best Time to Invest!',
    image: '/Assets/Blog1.jpg',
    date: 'July 16, 2025',
    author: 'Research Associate: Priyanshu Ravat',
    shortDesc: 'Explore why Vizag is booming in real estate and why you should invest now.',
  },
];

export default function BlogsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f3f8f9]">
      <div
        className="relative w-full h-[270px] sm:h-[320px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Assets/blog.png')" }}
      >
        {/* <h2 className="text-4xl font-bold z-10">Blogs</h2> */}
        <div className="absolute top-0 left-10 w-24 h-24 rounded-full bg-gradient-to-tr from-[#e1f4f3] to-[#c1e8e3] opacity-60 blur-xl" />
      </div>

      <div className="px-6 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <button
                onClick={() => router.push(`/blog/${blog.slug}`)}
                className="absolute top-3 right-3 bg-[#61796f] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
              >
                <FaArrowRight size={14} />
              </button>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {blog.title.length > 65 ? blog.title.slice(0, 65) + '...' : blog.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{blog.shortDesc}</p>
              <button
                onClick={() => router.push(`/blog/${blog.slug}`)}
                className="text-sm font-medium text-[#61796f] mt-3 hover:underline"
              >
                Read More
              </button>
              <p className="mt-4 text-xs text-gray-500">{blog.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
