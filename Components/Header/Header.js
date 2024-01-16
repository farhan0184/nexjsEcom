import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaTshirt } from "react-icons/fa";
import Slider from "../Slider/Slider";
import Responsive from "../ResponsiveMenu/Responsive";
import MobileSearch from "../MobileSearch/MobileSearch";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="fixed w-full z-10">
        <MobileSearch />
      </div>

      <div className="flex mt-[-40px] w-full featuredWidth mx-auto gap-4 pb-10 md:pb-10 lg:py-10 ">
        <div className="hidden md:hidden lg:block bg-[#fff] w-[30%] rounded z-10">
          <ul className="">
            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100 my-2 relative">
              <span className="ml-4 px-3 py-3 rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706]">
                Womans & Girls Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[207px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 groups"
                >
                  Item 1
                  <div className="hidden groupsBlock absolute left-[200px] top-1 w-[300px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                    <p>cloth 1</p>

                    <div className="flex gap-6 py-4">
                      <Image
                        width={100}
                        height={100}
                        className="rounded-full w-[50px] h-[50px]"
                        src="/image/cloth.webp"
                        alt=""
                      />
                      <Image
                        width={100}
                        height={100}
                        className="rounded-full w-[50px] h-[50px]"
                        src="/image/cloth.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 groups"
                >
                  Item 2

                  <div className="hidden groupsBlock absolute left-[200px] top-1 w-[300px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                    <p>cloth 2</p>

                    <div className="flex gap-6 py-4">
                      <Image
                        width={100}
                        height={100}
                        className="rounded-full w-[50px] h-[50px]"
                        src="/image/cloth.webp"
                        alt=""
                      />

                    </div>
                  </div>

                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </a>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Womans & Girls Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </a>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Womans & Girls Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </a>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Womans & Girls Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </a>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Womans & Girls Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </a>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Womans & Girls Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </a>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Womans & Girls Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </a>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Womans & Girls Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </a>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Womans & Girls Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </a>
              </div>
            </li>
          </ul>

          {/* <div className="flex items-center justify-center ">
          <div className="group relative">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition">
              Hover me
            </button>
            <div className="hidden group-hover:block absolute right-32 mt-2 bg-white border border-gray-200 p-2 rounded-md shadow-md ml-32">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 ml-32"
              >
                Item 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Item 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Item 3
              </a>
            </div>
          </div>
        </div> */}
        </div>
        <div className="rounded w-full md:w-full lg:w-[70%]">
          <Slider />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-10">
        <Responsive />
      </div>
    </>
  );
};

export default Header;
