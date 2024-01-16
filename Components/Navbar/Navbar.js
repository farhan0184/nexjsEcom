
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
const Navbar = () => {
  return (
    <>
    <div className="bg-[#f95706]">
      <div className="hidden mf:hidden lg:block  text-white py-6 featuredWidth mx-auto">
        <div className="">
          <div className="flex justify-between items-center">
            <ul className="text-sm flex gap-4">
              <li>Become a seller</li>
              <li>Donates</li>
              <li>Help & Support</li>
            </ul>
            <div>
              <span className="text-sm">visit app for more update</span>
            </div>
          </div>

        
          <div className="flex justify-between py-4 mt-2">
            <div className="text-3xl font-bold">Logo here</div>
            

        
            <div className="col-span-2">
              <div className="relative flex items-center">
                <span className="absolute left-[440px] bg-[#f95706] rounded-full px-4 py-3 cursor-pointer">
                  <FaSearch />
                </span>
                <input
                  type="text"
                  placeholder="Enter The Product You Are Looking For"
                  className="input input-bordered input-warning w-[500px] rounded-full pl-12"
                />
              </div>
            </div>
            

            <div className="flex justify-end">
              <div className=" flex  items-center gap-4">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <Image
                        width={100}
                        height={100}
                        alt="Tailwind CSS Navbar component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="text-[#333]">Settings</a>
                    </li>
                    <li>
                      <a className="text-[#333]">Logout</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <MdOutlineShoppingCart className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
