import React from "react";
import Faq from "./Faq";

const PricingTable = () => {
  return (
    <section className="bg-[#f5eeee] min-h-screen flex items-center justify-center py-10 px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section */}

        <Faq />
        {/* Right Section */}

        <div className="flex flex-col space-y-6">
          {/* Monthly Plan */}
          <div className="bg-[#121212] text-white p-7 rounded-lg w-full  relative flex gap-4">
            <span className="absolute -top-2 right-8 bg-[#FF9776] text-white text-xs font-semibold px-2 py-1 rounded">
              BEST VALUE
            </span>

            <div className="flex items-center gap-2 ">
              <div className="bg-[#FF9776] text-black rounded-md p-1">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center ">
                <button className="border border-white text-gray-400 px-4 py-2 rounded-full text-xs">
                  YEARLY
                </button>
                <div className="text-right text-3xl font-bold">
                  $129.<span className="text-lg align-bottom">99</span>
                </div>
              </div>
              <div className="my-4">
                <h2 className="text-xl font-bold">14 DAYS FREE</h2>
                <p className="text-gray-400  mt-1 w-2/3">
                  Subscription fee is{" "}
                  <span className="text-white font-semibold">$129.99 USD</span>{" "}
                  and automatically renews each year.
                </p>
              </div>
            </div>
          </div>
          {/* Monthly Plan */}
          <div className="bg-white text-black p-7 rounded-lg border border-gray-300 flex gap-4">
            <div className="flex items-center gap-2 ">
              <div className="bg-white  text-gray-400 rounded-md p-1 border border-gray-300">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center ">
                <button className="border border-black text-gray-800 px-4 py-2 rounded-full text-xs">
                  MONTHLY
                </button>
                <div className="text-right text-3xl font-bold">
                  $12.<span className="text-lg align-bottom">99</span>
                </div>
              </div>
              <div className="my-4">
                <h2 className="text-xl font-bold">14 DAYS FREE</h2>
                <p className="text-gray-900  mt-1 w-2/3">
                  Subscription fee is
                  <span className="text-black font-semibold">
                    $129.99 USD
                  </span>{" "}
                  and automatically renews each year.
                </p>
              </div>
            </div>
          </div>

          {/* see more button */}
          <button className="w-[130px] h-[130px] border border-gray-400 rounded-full flex flex-col items-center justify-center text-sm  hover:bg-black hover:text-white transition duration-300 mt-10 font-semibold text-gray-600">
            Try it <br />Free Now 
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
