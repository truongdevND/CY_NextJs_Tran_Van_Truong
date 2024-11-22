import React, { useState } from 'react';
import Link from 'next/link';

function Header() {
  const [menuResponsive, setMenuResponsive] = useState(false);
  const [profile, setProfile] = useState(false);

  const storedUser = { username: 'JohnDoe' }; 
  const cartList = [];

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div>
      <div className="sticky z-40 top-0 w-full">
        <header className="flex shadow-lg py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
          <div className="w-full flex flex-wrap items-center lg:gap-y-4 gap-y-6 gap-x-4">
            <a className="text-[30px] font-bold" href="/products">SHOPPING</a>

            <ul className="hidden gap-6 md:flex ml-8">
              <li className="max-lg:border-b max-lg:py-3 relative lg:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300">
                <div className="text-[#333] block text-sm uppercase font-semibold">
                  <Link href="/products">home</Link>
                </div>
              </li>
              <li className="max-lg:border-b max-lg:py-3 relative lg:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300">
                <div className="text-[#333] block text-sm uppercase font-semibold">
                  <Link href="/products">product</Link>
                </div>
              </li>
              <li className="max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300">
                <div className="text-[#333] block text-sm uppercase font-semibold">
                  <Link href="/order-history">order history</Link>
                </div>
              </li>
            </ul>

            <div className="flex items-center ml-auto">
              <ul className="flex space-x-4">
                <li className="relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
                  <div className="flex flex-col justify-center items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 512 512">
                      <path d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z" />
                    </svg>
                    <span onClick={() => setProfile(!profile)} className="text-xs font-semibold mt-1">Profile</span>
                  </div>
                  {profile && (
                    <div className="bg-white z-20 shadow-lg py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] max-sm:-right-32 absolute right-0 top-14">
                      <h6 className="font-semibold text-sm">Welcome</h6>
                      <p className="text-sm text-gray-500 mt-1">{storedUser.username}</p>
                      <hr className="border-b-0 my-4" />
                      <button type="button" onClick={handleLogout} className="bg-transparent border border-gray-300 hover:border-pink-500 px-4 py-2 mt-4 text-sm text-pink-500 font-semibold">
                        LOGOUT
                      </button>
                    </div>
                  )}
                </li>

                <li className="relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
                  <p className="text-xl font-bold text-black absolute w-7 h-7 text-center top-[-5px] right-[-10px]">{cartList.length}</p>
                  <div className="flex flex-col justify-center items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 489 489">
                      <path d="m440.1 422.7-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z" />
                    </svg>
                    <span className="text-xs font-semibold mt-1">
                      <Link href="/cart">Bag</Link>
                    </span>
                  </div>
                </li>
              </ul>

              <div className="block ml-3 md:hidden">
                <button onClick={() => setMenuResponsive(!menuResponsive)} className="text-white cursor-pointer leading-none px-3 p outline-none focus:outline-none" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none">
                    <path d="M3 18h18M3 12h18M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
