import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="hidden md:hidden lg:block">
        <div className="flex justify-center  gap-10 bg-[#fff] py-10">
          <div className="flex flex-col gap-4">
            <Image width={100} height={200} src="/image/logo.svg" alt="logo" />
            <p className="text-[#F95706] w-[250px] ">
              Lorem ipsum dolor sit, amet  consectetur adipisicing elit. 
              Rem eaque suscipit  nemo quaerat molestiae ut rerum 
              blanditiis sed! Aut, et.
            </p>


          </div>

          <div>
            <h2 className="text-xl font-bold mb-6">UseFul Links</h2>

            <ul className="flex flex-col gap-3 text-[#F95706]">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Buy a New</a>
              </li>
              <li>
                <a href="">Returns & Refunds</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
            <div className="flex gap-4">
              <Image width={50} height={50} src="/image/bkas.svg" alt="" />
              <Image width={50} height={50} src="/image/nogod.svg" alt="" />
              <Image width={50} height={50} src="/image/visa.svg" alt="" />
            </div>

            <div className="flex gap-4 py-6">
              <Image width={50} height={50} src="/image/master.svg" alt="" />
              <Image width={50} height={50} src="/image/rocket.svg" alt="" />
              <Image width={50} height={50} src="/image/express.svg" alt="" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Get Us</h2>
            <div className="flex gap-3 border-[#F95706] border-[1px] h-14 px-5 rounded-2xl items-center mb-3">
              <Image width={50} height={20} src="image/google.svg" alt="google play" />
              <div className="text-sm">
                <p>Get it on</p>
                <p className="font-bold">Google Play</p>
              </div>
            </div>

            <div className="flex gap-3 border-[#F95706] border-[1px] h-14 px-5 rounded-2xl items-center">
              <Image width={50} height={20} src="/image/apple.svg" alt="google play" />
              <div className="text-sm">
                <p>Get it on</p>
                <p className="font-bold">Google Play</p>
              </div>
            </div>
          </div>

          <div>
          <h2 className="text-xl font-bold">Find Us</h2>
            <div className="text-[#F95706]">
              <p>Address: Khulna, Bangladesh</p>
              <p>Phone: +88019000000</p>
              <p>Email: yourmail@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
