"use client"
import React, { useEffect, useState } from "react";

const MobileSearch = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setScrolled(scrollPosition > 20);
      };
  
      // Attach the scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className={`block md:hidden lg:hidden ${scrolled ? "bg-[#07b5d5]" : ""}  relative top-6 z-10 py-4`} >
            <div className=" mt-2">
        <div className=" relative flex items-center">
          <input
            type="text"
            placeholder="Enter The Product You Are Looking For"
            className="input input-bordered input-warning w-full rounded-full pl-12"
          />
        </div>
      </div>

    </div>
  )
}

export default MobileSearch
