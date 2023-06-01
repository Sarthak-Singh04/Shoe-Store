import React, { useEffect, useState } from "react";
import Wrapping from "./Wrapping";
import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const HeaderComponent = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatmenu, setShowCatmenu] = useState(false);
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
            setShow("-translate-y-[80px]");
        } else {
            setShow("shadow-sm");
        }
    } else {
        setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
};

useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
        window.removeEventListener("scroll", controlNavbar);
    };
}, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-10 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapping className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatMenu={showCatmenu} setShowCatMenu={setShowCatmenu} />
        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatmenu}
            setShowCatMenu={setShowCatmenu}
            setmobilemenu={setMobileMenu}
          />
        )}
        <div className="flex items-center gap-2">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text=[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <BsCart className="text-[15px] md:text=[20px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              5
            </div>
          </div>
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapping>
    </header>
  );
};

export default HeaderComponent;
