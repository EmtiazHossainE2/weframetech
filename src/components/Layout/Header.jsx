import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import MobileMenu from './MobileMenu';
import NotificationGroup from '../Common/NotificationGroup';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [open, setToggle] = useState(false);
  return (
    <>
      <header className="bg-[#15132B] px-2 laptop:px-4 py-2 text-white">
        <div className="flex">
          <button
            onClick={toggleSidebar}
            className={` ${isSidebarOpen ? 'hidden' : 'laptop:block hidden '}`}>
            <AiOutlineMenu className="text-2xl text-[#7879F1]" />
          </button>

          {/* Main Header  */}
          <div className="flex w-full items-center justify-between px-3 ">
            {/* Search here for laptop */}
            <div className="flex xl:hidden items-center space-x-3">
              <AiOutlineMenu
                className="laptop:hidden text-3xl text-[#7879F1]"
                onClick={() => setToggle(true)}
              />
              <h3
                className={` ${
                  isSidebarOpen ? 'laptop:hidden' : 'font-medium '
                }`}>
                Weframetech
              </h3>
            </div>
            <div className="laptop:flex relative hidden items-center rounded-[46px] ">
              <AiOutlineSearch className="absolute left-4 text-lg text-[#7879F1]" />
              <input
                type="search"
                placeholder="Search"
                className="focus:ring-sky-500bg-[#7879F1] w-[300px] rounded-[46px] bg-[#211A75] px-3 py-2 pl-10 text-white focus:border-[#211A75] focus:outline-none focus:ring-1 big:w-[460px]"
              />
            </div>
            <div className="hidden xl:block">
              {' '}
              <Link
                href="/other"
                className="border-b border-[#6418C3] text-sm font-bold text-[#6418C3]">
                OTHER MENUS
              </Link>
            </div>

            {/* Notification Icons Here  */}
            <NotificationGroup/>
            {/* Language  */}
            <div className="relative hidden cursor-pointer items-center space-x-3 rounded-[46px] bg-[#211A75] px-4 py-1.5 xl:flex">
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
            <div className="relative flex cursor-pointer  items-center space-x-1 md:space-x-3 ">
              <div className='hidden lg:block'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="none">
                  <rect width="57" height="57" rx="14" fill="#C4C4C4" />
                </svg>
              </div>
              <div className='lg:hidden'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 57 57"
                  fill="none">
                  <rect width="40" height="40" rx="14" fill="#C4C4C4" />
                </svg>
              </div>
              <div className="flex flex-col pb-2 lg:pb-0">
                <h4 className="font-semibold text-sm laptop:text-base">Instructor Day</h4>
                <p className='text-xs laptop:text-sm'>Super Admin</p>
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
      <MobileMenu open={open} setToggle={setToggle} />
    </>
  );
};

export default Header;
