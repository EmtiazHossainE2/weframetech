import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="bg-[#15132B] p-4 text-white">
      <div className="flex">
        <button
          onClick={toggleSidebar}
          className={` ${isSidebarOpen ? 'hidden' : ' '}`}>
          <AiOutlineMenu className="text-2xl text-[#7879F1]" />
        </button>

        {/* Main Header  */}
        <div className="flex w-full items-center justify-between px-3">
          {/* Search here  */}
          <div className="relative flex items-center rounded-[46px] ">
            <AiOutlineSearch className="absolute left-4 text-lg text-[#7879F1]" />
            <input
              type="search"
              placeholder="Search"
              className="focus:ring-sky-500bg-[#7879F1] big:w-[400px] w-[300px] rounded-[46px] bg-[#211A75] px-3 py-2 pl-10 text-white focus:border-[#211A75] focus:outline-none focus:ring-1"
            />
          </div>
          <div>
            {' '}
            <Link
              href="/other"
              className="border-b border-[#6418C3] text-sm font-bold text-[#6418C3]">
              OTHER MENUS
            </Link>
          </div>

          {/* Notification Icons Here  */}
          <div className="flex items-center justify-between space-x-6">
            <div className="relative">
              <Image
                src="/images/header/bell 1.svg"
                width={28}
                height={28}
                alt="icon"
              />
              <span className="absolute -right-1 -top-3 rounded-full bg-[#5ECFFF] px-[2px] py-[.1px] text-sm text-black">
                12
              </span>
            </div>
            <div className="relative">
              <Image
                src="/images/header/Video Lesson 2 2.svg"
                width={28}
                height={28}
                alt="icon"
              />
              <span className="absolute -right-1 -top-3 rounded-full bg-[#5ECFFF] px-1.5 py-[.1px] text-sm text-black">
                5
              </span>
            </div>
            <div className="relative">
              <Image
                src="/images/header/checkbox (1) 1.svg"
                width={28}
                height={28}
                alt="icon"
              />
              <span className="absolute -right-1 -top-3 rounded-full bg-[#5ECFFF] px-[5px] py-[.1px] text-sm text-black">
                2
              </span>
            </div>
            <div className="relative">
              <Image
                src="/images/header/office 1.svg"
                width={28}
                height={28}
                alt="icon"
              />
              <span className="absolute -right-1 -top-3 rounded-full bg-[#E328AF] px-2 py-[.1px] text-sm text-black">
                !
              </span>
            </div>
          </div>
          {/* Language  */}
          <div className="relative flex cursor-pointer items-center space-x-3 rounded-[46px] bg-[#211A75] px-4 py-1.5">
            <Image
              src="/images/header/united-states 1.svg"
              width={28}
              height={28}
              alt="icon"
            />
            <h4 className="font-semibold uppercase">English</h4>
            <Image
              src="/images/header/arrow.svg"
              width={15}
              height={8}
              alt="icon"
            />
          </div>
          {/* Profile   */}
          <div className="relative flex cursor-pointer items-center space-x-3 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="57"
                height="57"
                viewBox="0 0 57 57"
                fill="none">
                <rect width="57" height="57" rx="14" fill="#C4C4C4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold ">Instructor Day</h4>
              <p>Super Admin</p>
            </div>
            <Image
              src="/images/header/arrow.svg"
              width={15}
              height={8}
              alt="icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
