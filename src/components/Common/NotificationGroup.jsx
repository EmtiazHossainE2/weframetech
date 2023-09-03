import Image from 'next/image';
import React from 'react'

const NotificationGroup = () => {
  return (
    <div className="hidden items-center justify-between space-x-6 xl:flex">
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
  );
}

export default NotificationGroup