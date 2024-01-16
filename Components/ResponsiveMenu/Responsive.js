import { IoHome } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Responsive = () => {
  return (
    <div>
      <div className="block md:block lg:hidden">
        <div className=" py-6 flex flex-row justify-center bg-[#fff] gap-4 md:gap-6 items-center">
          <div>
            <div className="flex flex-col gap-2  items-center">
              <span className="bg-[#F95706] px-4 md:px-6 py-2 md:py-3 rounded-full ">
                <IoHome className="text-white" />
              </span>
              <p className="text-sm">Home</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 items-center">
              <span className="bg-[#F95706] px-4 md:px-6 py-2 md:py-3  rounded-full ">
                <FaShoppingBag className="text-white" />
              </span>
              <p className="text-sm">Shop</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 items-center">
              <span className="bg-[#F95706] px-4 md:px-6 py-2 md:py-3  rounded-full ">
                <FaCartShopping className="text-white" />
              </span>
              <p className="text-sm">Cart</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 items-center">
              <span className="bg-[#F95706] px-4 md:px-6 py-2 md:py-3  rounded-full ">
                <FaHeart className="text-white" />
              </span>
              <p className="text-sm">Favourites</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 items-center">
              <span className="bg-[#F95706] px-4 md:px-6 py-2 md:py-3  rounded-full ">
                <FaUser className="text-white" />
              </span>
              <p className="text-sm">Profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsive;
