import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItems from '../Common/MenuItems';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={` w-[18%] bg-[#15132B] px-4 text-white large:w-[15%] ${
        isSidebarOpen ? 'hidden laptop:block' : 'hidden'
      }`}>
      {/* Top  */}
      <div
        className={`flex w-[18%] items-center space-x-12 p-2 xl:p-4 ${
          isSidebarOpen ? ' ' : 'hidden'
        }`}>
        <div className={` ${isSidebarOpen ? '' : ' hidden'}`}>
          <Link href="/" className="text-sm font-semibold xl:text-lg">
            Weframetech
          </Link>
        </div>

        {/* When clicking the button, toggle the sidebar */}
        <button onClick={toggleSidebar}>
          <AiOutlineMenu className="text-2xl text-[#7879F1]" />
        </button>
      </div>
      <div>
        <h3 className="pb-5 pt-2 text-xs  large:text-lg large:font-bold">
          MAIN MENU
        </h3>
      </div>
      {/* Menu Items  */}
      <MenuItems />

      {/* Footer  */}
      <div className="pt-12">
        <Image
          src="/images/sidebarIcon/kanban2.png"
          width={220}
          height={203}
          alt="icon"
          className="w-full rounded-[32px]"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
