import React, { useEffect, useState } from "react";

// react icons
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import logo from "../../assets/logo-black.webp";
import { div } from "motion/react-client";

const Navbar = () => {
  const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchBoxOpen, setSearchBox] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 w-full bg-white z-100 border-gray-300 transition-all duration-300   ${
        scrolled ? "border-b  shadow-sm" : ""
      }`}
    >
      <nav className="flex items-center justify-between w-full relative h-auto px-2 md:px-6 py-4 ">
        {/* logo */}
        <img src={logo} alt="logo" className="w-[90px]" />

        {/* nav links */}
        <ul className="items-center gap-[24px] text-[1rem] text-[#424242] md:flex hidden">
          <li className="transition-all duration-500 cursor-pointer hover:text-[#000] capitalize font-medium">
            home
          </li>

          {/* about us mega menu */}
          <li className="transition-all duration-500 cursor-pointer hover:text-[#000] capitalize flex items-center gap-[3px] group relative font-medium">
            about
            <article className="p-6 bg-black text-white boxShadow w-[500px] absolute top-full left-0 group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 z-[-1] transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="grid grid-cols-2">
                <ul className="flex flex-col gap-[7px] text-white">
                  <li className="flex items-center gap-[7px] hover:text-[#000] transition-all duration-300">
                    <BsArrowRight className="text-white text-[0.9rem]" />{" "}
                    Company Details
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-[#000] transition-all duration-300">
                    <BsArrowRight className="text-white text-[0.9rem]" />{" "}
                    Company Location
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-[#000] transition-all duration-300">
                    <BsArrowRight className="text-white text-[0.9rem]" /> Team
                    Members
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-[#000] transition-all duration-300">
                    <BsArrowRight className="text-white text-[0.9rem]" /> Office
                    Tour
                  </li>
                </ul>
                <div className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
                  <div className="flex items-center gap-[10px] text-[1rem] text-[#fff]">
                    <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                    Full Customize
                  </div>
                  <div className="flex items-center gap-[10px] text-[1rem] text-[#fff]">
                    <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                    Modern Design
                  </div>
                  <div className="flex items-center gap-[10px] text-[1rem] text-[#fff]">
                    <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                    Well Stacktured
                  </div>
                </div>
              </div>
            </article>
          </li>

          {/* pages mega menu */}
          <li className="transition-all duration-500 cursor-pointer hover:text-[#000] capitalize group relative flex items-center gap-[3px] font-medium">
            pages
            <article className="p-6 bg-black w-[1000px] absolute top-full left-1/2 transform -translate-x-1/2 group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 z-[-1] transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="grid grid-cols-5">
                <ul className="flex flex-col gap-[7px] text-[#fff]">
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300 text-lg">
                    Home
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Company Location
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Team Members
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Office Tour
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Office Tour2
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Office Tour3
                  </li>
                </ul>
                <ul className="flex flex-col gap-[7px] text-[#fff]">
                  <li className="flex items-center gap-[7px] text-lg transition-all duration-300 ">
                    About
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Company Location
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Team Members
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Office Tour
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Office Tour2
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Office Tour3
                  </li>
                </ul>
                <ul className="flex flex-col gap-[7px] text-[#fff]">
                  <li className="flex items-center gap-[7px] text-lg transition-all duration-300">
                    Company Details
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Company Location
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Team Members
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Office Tour
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Office Tour2
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Office Tour3
                  </li>
                </ul>
                <ul className="flex flex-col gap-[7px] text-[#fff]">
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Company Details
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Company Location
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Team Members
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Office Tour
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Office Tour2
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-lg transition-all duration-300">
                    Office Tour3
                  </li>
                </ul>

                <div className="flex flex-col gap-[10px] ">
                  <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                    Full Customize
                  </div>

                  <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                    Modern Design
                  </div>

                  <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                    Well Stacktured
                  </div>
                </div>
              </div>
            </article>
          </li>
          {/* service mega menu */}
          <li className="transition-all duration-500 cursor-pointer hover:text-[#000] capitalize group relative flex items-center gap-[3px] font-medium">
            services
            <article className="p-6 bg-black w-[320px] absolute top-full left-0 group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 z-[-1] transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="grid">
                <ul className="flex flex-col gap-[7px] text-[#fff]">
                  <li className="flex items-center gap-[7px] text transition-all duration-300 hover:text-[#000]">
                    Company Details
                  </li>
                  <li className="flex items-center gap-[7px] transition-all duration-300 hover:text-[#000]">
                    Company Location
                  </li>
                  <li className="flex items-center gap-[7px]  transition-all duration-300 hover:text-[#000]">
                    Team Members
                  </li>
                  <li className="flex items-center gap-[7px]  transition-all duration-300 hover:text-[#000]">
                    Office Tour
                  </li>
                </ul>
              </div>
            </article>
          </li>
          {/* team */}
          <li className="transition-all duration-500 cursor-pointer hover:text-[#000] capitalize font-medium">
            team
          </li>
          {/* blog */}
          <li className="transition-all duration-500 cursor-pointer hover:text-[#000] capitalize font-medium">
            blog
          </li>
          {/* contact */}
          <li className="transition-all duration-500 cursor-pointer hover:text-[#000] capitalize font-medium">
            contact
          </li>
        </ul>

        {/* search  */}
        <div className="flex items-center gap-[10px]">
          <div className="relative md:flex hidden"></div>

          {searchBoxOpen ? (
            <span onClick={() => setSearchBox(!searchBoxOpen)}>X</span>
          ) : (
            <IoIosSearch
              onClick={() => setSearchBox(!searchBoxOpen)}
              className="text-[1.6rem] text-[#424242] cursor-pointer hover:text-[#000] transition-all duration-500 "
            />
          )}

          {/* search filed */}
          <div
            className={`absolute -ml-40 sm:-ml-45 mt-30 z-50 md:mt-32 bg-gray-200 p-4 transition-all duration-300 ease-in-out
    ${
      searchBoxOpen
        ? "opacity-100 scale-100 visible"
        : "opacity-0 scale-95 invisible"
    }
  `}
          >
            <input
              type="text"
              placeholder="Search "
              className="border rounded px-2 py-1.5 border-none bg-white focus:outline-none"
            />
          </div>
          <TbBrandGithubFilled className="text-[1.6rem] text-[#424242] cursor-pointer hover:text-[#000] transition-all duration-500 focus:outline-none" />

          <CiMenuFries
            className="text-[1.6rem] text-[#424242]c cursor-pointer md:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        </div>

        {/* mobile sidebar */}
        <aside
          className={` ${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 z-20"
              : "translate-x-[200px] opacity-0 z-[-1]"
          } md:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
        >
          <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
            <li className="hover:text-[#000] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
              Home
            </li>

            <li
              onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
              className="hover:text-[#000] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
            >
              About Us
              <IoIosArrowDown
                className={`${
                  mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"
                } text-gray-600 group-hover:text-[#000] transition-all duration-300`}
              />
            </li>

            {/* about us mega menu */}
            <div
              className={`${
                mobileAboutUsOpen ? "block" : "hidden"
              } group font-[500] ml-6`}
            >
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#000] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Company Details
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#000] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                  Company Location
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#000] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                  Team Members
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#000] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Office Tour
                </li>
              </ul>

              <div className="flex flex-col gap-[10px] mt-4">
                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                  Full Customize
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                  Modern Design
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                  Well Stacktured
                </div>
              </div>
            </div>

            <li
              onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
              className="hover:text-[#000] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
            >
              Service
              <IoIosArrowDown
                className={`${
                  mobileServiceOpen ? "rotate-0" : "rotate-[180deg]"
                } text-gray-600 group-hover:text-[#000] transition-all duration-300`}
              />
            </li>

            {/* service mega menu */}
            <div
              className={`${
                mobileServiceOpen ? "hidden" : "block"
              } font-[500] ml-6`}
            >
              {/* <ul className="flex flex-col gap-[7px] text-[#424242]">
              <li className="flex items-center gap-[7px] hover:text-[#000] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                Company Details
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#000] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                Company Location
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#000] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                Team Members
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#000] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" /> Office
                Tour
              </li>
            </ul> */}

              <div className="flex flex-col gap-[10px] mt-4">
                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                  Full Customize
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                  Modern Design
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                  Well Stacktured
                </div>
              </div>
            </div>
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
