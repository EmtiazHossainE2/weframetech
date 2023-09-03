import React from 'react'

import Image from 'next/image';

const SummaryCard = () => {
  return (
    <div className="flex flex-col space-x-2 rounded-[14px] bg-[#15132b] py-12 pl-3 text-white shadow-[0_4px_4px_0px_rgba(0,0,0,0.04)] lg:flex-row ">
      <div className="hidden cursor-pointer lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none">
          <path
            d="M4.08496 19C4.08496 25.9411 9.07398 32.1336 15.8676 33.5856C19.2622 34.311 22.8718 33.8223 25.9433 32.2039C28.8993 30.6463 31.2884 28.0927 32.6423 25.0375C34.051 21.8595 34.2965 18.2112 33.3358 14.871C32.4094 11.6486 30.376 8.79133 27.6465 6.84611C21.94 2.77897 13.9247 3.32275 8.81102 8.10771C5.81434 10.9117 4.08496 14.8953 4.08496 19ZM11.8544 18.1944L16.0196 14.0296C17.0593 12.99 18.6716 14.6023 17.6316 15.642L15.5393 17.7339L25.2133 17.7339C25.9034 17.7339 26.4795 18.3103 26.4795 19.0004C26.4795 19.6905 25.9034 20.267 25.2133 20.267L15.491 20.267L17.5423 22.368C18.5679 23.4175 16.9407 25.0151 15.9109 23.9606L11.8449 19.7965C11.4087 19.3504 11.4129 18.636 11.8544 18.1944Z"
            fill="#A5A5A5"
          />
        </svg>
      </div>
      <div className="flex flex-col space-y-5 lg:basis-11/12 ">
        <div className="flex  flex-col justify-between rounded-[14px] lg:flex-row lg:items-center">
          <div className="flex justify-between items-center space-x-2 pr-5">
            <div>
              <h3 className="text-lg lg:text-2xl font-bold">School November Tasks</h3>
              <p className="text-sm text-[#A5A5A5]">
                Created by Instructor Day on November 31, 2022
              </p>
            </div>
            <div className="cursor-pointer lg:hidden">
              <Image
                src="/images/svg/vertIcon.svg"
                width={24}
                height={24}
                alt="icon"
              />
            </div>
          </div>
          <div className="hidden flex-col items-center justify-between space-x-3 lg:flex lg:flex-row">
            <div className="text-right">
              <p>Centered Martial Arts</p>
              <p className="text-sm text-[#A5A5A5]">Sunnyvale, Ca</p>
            </div>
            <div className="rounded-lg bg-white p-2">
              <Image
                src="/images/svg/logo 1.svg"
                width={40}
                height={40}
                alt="icon"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/images/svg/vertIcon.svg"
                width={24}
                height={24}
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-3 xl:flex-row xl:items-center">
          <div className="flex flex-col md:space-x-3 space-y-3 md:space-y-0 md:flex-row lg:items-center">
            {/* avatar group  */}
            <div className="flex items-center space-x-3 ">
              <div className="relative flex items-center">
                <Image
                  src="/images/svg/placeholder.svg"
                  width={40}
                  height={40}
                  alt="icon"
                  className=""
                />
                <Image
                  src="/images/svg/placeholder.svg"
                  width={40}
                  height={40}
                  alt="icon"
                  className="-ml-3"
                />
                <Image
                  src="/images/svg/placeholder.svg"
                  width={40}
                  height={40}
                  alt="icon"
                  className="-ml-3"
                />
                <Image
                  src="/images/svg/placeholder.svg"
                  width={40}
                  height={40}
                  alt="icon"
                  className="-ml-3"
                />
                <span className="-ml-3 rounded-full bg-[#E328AF] px-2 py-1 font-bold">
                  5+
                </span>
              </div>
              <button className="flex items-center space-x-2 rounded-[14px] bg-[#6418C3] px-3 py-2">
                <Image
                  src="/images/svg/add-friend 1.svg"
                  width={24}
                  height={24}
                  alt="icon"
                />
                <p>Invite People</p>
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <button className="rounded-[14px] border border-[#7879F1] px-3 py-2 text-sm lg:text-base font-bold text-white">
                Private
              </button>
              <button className="rounded-[14px] bg-[#7879F1] px-3 py-2 text-sm lg:text-base font-bold text-white">
                Edit
              </button>

              <button className="flex items-center space-x-2 rounded-[14px] border border-[#6418C3] px-3 py-2">
                <Image
                  src="/images/svg/chat (1) 1.svg"
                  width={24}
                  height={24}
                  alt="icon"
                />
                <p className='text-sm lg:text-base'>45 Comments</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 space-x-2">
            <p>Total Progress 60%</p>
            <div className="w-[60%] lg:w-[250px]">
              <div className="h-2 w-full rounded-lg bg-gray-200">
                <div className="h-full w-[60%] rounded-lg bg-[#805AD5]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard