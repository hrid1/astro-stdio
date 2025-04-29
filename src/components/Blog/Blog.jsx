import blog1 from "../../assets/blog/blog1.jpg";
import blog2 from "../../assets/blog/blog2.jpg";

const Blog = () => {
  return (
    <section className="my-6 md:my-16">
      {/* top */}
      <div>
        <div className="max-w-xl mx-auto my-6">
          <h5 className="text uppercase tracking-widest mb-4 font-semibold text-gray-400">
            Recent Blogs
          </h5>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight uppercase ">
            Read Updateed <br />
            Journal
          </h2>
          <div className=" relative flex justify-between">
            <div></div>
            <div>
              <p className="text-gray-800 mb-8 text-sm sm:text-base leading-relaxed w-80 ">
                Read our blog and try to see everything from every perspective.
                Our passion lies in making everything accessible and aesthetic
                for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom blogs  */}
      <div className="my-12 py-12 grid grid-cols-1 md:grid-cols-2 px-4 mx-auto max-w-5xl gap-6">
        <div className="flex max-w-xl bg-white   overflow-hidden relative">
          {/* Image Section */}
          <div className="w-1/2">
            <img
              src={blog1}
              alt="Design team"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-1/2 p-4 flex flex-col justify-between h-60 bg-white absolute bottom-0 right-20">
            <div>
              <p className="text-xs text-gray-500 mb-1">
                UI Design · 02 May 2019
              </p>
              <h2 className="text-base font-semibold text-black leading-snug">
                How to manage a talented and successful design team
              </h2>
            </div>
            <div className="mt-4 text-sm text-gray-700  flex items-center gap-1  border-t border-gray-400 pt-4">
              <span>Read More</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 7l-10 10M17 17V7H7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex max-w-xl bg-white  overflow-hidden relative">
          {/* Image Section */}
          <div className="w-1/2">
            <img
              src={blog2}
              alt="Design team"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-1/2 p-4 flex flex-col justify-between h-60 bg-white absolute bottom-0 right-20">
            <div>
              <p className="text-xs text-gray-500 mb-1">
                UI Design · 02 May 2019
              </p>
              <h2 className="text-base font-semibold text-black leading-snug">
                How to manage a talented and successful design team
              </h2>
            </div>
            <div className="mt-4 text-sm text-gray-700  flex items-center gap-1  border-t border-gray-400 pt-4">
              <span>Read More</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 7l-10 10M17 17V7H7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
