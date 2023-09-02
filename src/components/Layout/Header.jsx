import Link from 'next/link';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

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
        <div className="flex w-full justify-between px-12">
          <div>
            <input type="search" value="" />
          </div>
          <div> icons dome icons</div>
          <div>profile</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
