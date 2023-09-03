import { AvatarGroupsData } from '@/config/fakeData';
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

const Done = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="taskCard ">
        <div className="d_Flex">
          <div className="flex items-center space-x-2 text-[#FF4A55]">
            <GoDotFill />
            <p className="font-semibold">BUGS FIXING</p>
          </div>
          <BsThreeDots className="h-6 w-6 text-[#A5A5A5] " />
        </div>
        <p className="pb-5 pt-3 ">
          Action Button needed for Google Maps visits.
        </p>
        <div className="w-[250px]">
          <div className="h-2 w-full rounded-lg bg-[#1E1C3A]">
            <div className="h-full w-[100%] rounded-lg bg-[#FF4A55]"></div>
          </div>
        </div>
        <div className="d_Flex pt-5">
          {AvatarGroupsData.slice(0, 4).map((el, index) => (
            <Image
              key={index}
              src={el.image}
              width={40}
              height={40}
              alt="icon"
              className={index === 0 ? '' : '-ml-12'}
            />
          ))}
          <div className="flex items-center space-x-1 text-[#A5A5A5]">
            <AiOutlineClockCircle className="h-4 w-4" />
            <p className="text-sm font-semibold">Due in 4 days</p>
          </div>
        </div>
      </div>
      <div className="taskCard ">
        <div className="d_Flex">
          <div className="flex items-center space-x-2 text-[#38E25D]">
            <GoDotFill />
            <p className="font-semibold">Database</p>
          </div>
          <BsThreeDots className="h-6 w-6 text-[#A5A5A5] " />
        </div>
        <p className="pb-5 pt-3 ">Update new instructor photos.</p>
        <div className="w-[250px]">
          <div className="h-2 w-full rounded-lg bg-[#1E1C3A]">
            <div className="h-full w-[100%] rounded-lg bg-[#38E25D]"></div>
          </div>
        </div>
        <div className="d_Flex pt-5">
          {AvatarGroupsData.slice(0, 4).map((el, index) => (
            <Image
              key={index}
              src={el.image}
              width={40}
              height={40}
              alt="icon"
              className={index === 0 ? '' : '-ml-12'}
            />
          ))}
          <div className="flex items-center space-x-1 text-[#A5A5A5]">
            <AiOutlineClockCircle className="h-4 w-4" />
            <p className="text-sm font-semibold">Due in 4 days</p>
          </div>
        </div>
      </div>
      <div className="taskCard ">
        <div className="d_Flex">
          <div className="flex items-center space-x-2 text-[#E328AF]">
            <GoDotFill />
            <p className="font-semibold">Instructor Meeting</p>
          </div>
          <BsThreeDots className="h-6 w-6 text-[#A5A5A5] " />
        </div>
        <p className="pb-5 pt-3 ">
          Review/correct yellow belt techniques.
        </p>
        <div className="w-[250px]">
          <div className="h-2 w-full rounded-lg bg-[#1E1C3A]">
            <div className="h-full w-[100%] rounded-lg bg-[#E328AF]"></div>
          </div>
        </div>
        <div className="d_Flex pt-5">
          {AvatarGroupsData.slice(0, 4).map((el, index) => (
            <Image
              key={index}
              src={el.image}
              width={40}
              height={40}
              alt="icon"
              className={index === 0 ? '' : '-ml-12'}
            />
          ))}
          <div className="flex items-center space-x-1 text-[#A5A5A5]">
            <AiOutlineClockCircle className="h-4 w-4" />
            <p className="text-sm font-semibold">Due in 4 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Done;
