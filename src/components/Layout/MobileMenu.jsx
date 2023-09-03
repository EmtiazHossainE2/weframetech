import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AiOutlineDoubleLeft, AiOutlineSearch } from 'react-icons/ai';
import MenuItems from '../Common/MenuItems';

const MobileMenu = ({ open, setToggle }) => {
  const router = useRouter();

  useEffect(() => {
    setToggle(false);
  }, [router, setToggle]);

  
  return (
    <div
      onClick={(e) => {
        const target = e.target;
        if (target.classList.contains('overlay')) {
          setToggle(!open);
        }
      }}
      className={`overlay fixed  left-0 top-0 z-20 h-screen w-full transition-all duration-500  ${
        open ? 'bg-black/75' : 'pointer-events-none bg-transparent'
      }`}>
      <div
        className={`absolute h-screen w-[75%] max-w-[375px]  overflow-y-auto bg-[#15132B] pb-20 text-white transition-[left] ${
          open ? 'left-0' : '-left-full'
        }`}>
        <div className="item-center flex flex-col justify-start px-2">
          <div className=" flex justify-between bg-[#15132B] p-2 shadow-sm">
            <h3 className="text-xl font-bold">Weframetech</h3>
            <button onClick={() => setToggle(false)}>
              <AiOutlineDoubleLeft size={28} />
            </button>
          </div>

          {/***************************** Nav Items  *****************************/}
          <div>
            <div className={`relative flex flex-col gap-5 pt-5`}>
              <div className="px-3">
                <div className="relative flex  items-center rounded-[46px] ">
                  <AiOutlineSearch className="absolute left-4 text-lg text-[#7879F1]" />
                  <input
                    type="search"
                    placeholder="Search"
                    className="focus:ring-sky-500bg-[#7879F1] w-[300px] rounded-[46px] bg-[#211A75] px-3 py-2 pl-10 text-white focus:border-[#211A75] focus:outline-none focus:ring-1 big:w-[400px]"
                  />
                </div>
                {/* Notification Icons Here  */}
                <div className="pb-5 pt-8">
                  <div className=" flex items-center justify-between space-x-3">
                    <div className="relative cursor-pointer">
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
                    <div className="relative cursor-pointer">
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
                    <div className="relative cursor-pointer">
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
                    <div className="relative cursor-pointer">
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
                </div>
                <hr className="pb-4" />
                <MenuItems />
                <div className="pt-12">
                  <Image
                    src="/images/sidebarIcon/kanban2.png"
                    width={120}
                    height={103}
                    alt="icon"
                    className="w-full rounded-[32px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
