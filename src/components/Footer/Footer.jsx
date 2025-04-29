import { section } from "motion/react-client";
import logo from "../../assets/logo-white.webp";

const Footer = () => {
  return (
    <section>
      <footer className="bg-[#121212] text-white  px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start ">
          {/* Left Section - Logo & Text */}
          <div className="space-y-4 py-16">
            <h2 className="text-white text-2xl font-bold">
              <img src={logo} alt="" />
            </h2>
            <p className="text-sm text-gray-400">
              When do they work well, and when do they <br />
              on us and finally, when do we actually need <br />
              how can we avoid them.
            </p>
          </div>

          {/* Middle Section - Social Links */}
          <div className="">
            {["FACEBOOK", "TWITTER", "LINKEDIN", "INSTAGRAM"].map(
              (platform, idx) => (
                <div
                  key={idx}
                  className="px-10 py-8 border border-gray-500 border-b-0  w-40 uppercase cursor-pointer"
                >
                  {platform}
                </div>
              )
            )}

            <div></div>
          </div>

          {/* Right Section - LET’S TALK */}
          <div className="flex justify-center md:justify-end items-center h-full">
            <h1 className="text-4xl md:text-6xl font-extrabold text-lime-400">
              LET’S TALK
            </h1>
          </div>
        </div>
      </footer>

      {/* footer cpy right */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between px-8 md:px-20 bg-[#121212] p-10 border-t border-gray-400 gap-4">
        <div className="text-white">
          © 2022 - 2025 | Alrights reserved <br className="hidden sm:block " />
          by Wealcoder
        </div>
        {/* links */}
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 text-white">
          <p className="font-medium uppercase">About Us</p>
          <p className="font-medium uppercase">Contact</p>
          <p className="font-medium uppercase">Carrer</p>
          <p className="font-medium uppercase">Faqs</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
