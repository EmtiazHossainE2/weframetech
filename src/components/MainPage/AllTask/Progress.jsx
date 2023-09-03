import { AvatarGroupsData } from '@/config/fakeData';
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

const Progress = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="taskCard ">
        <div className="d_Flex">
          <div className="flex items-center space-x-2 text-[#5ECFFF]">
            <GoDotFill />
            <p className="font-semibold">Video</p>
          </div>
          <BsThreeDots className="h-6 w-6 text-[#A5A5A5] " />
        </div>
        <p className="pb-5 pt-3 ">
          Create sparring tutorial video for the weekly class.
        </p>
        <div className="w-[250px]">
          <div className="h-2 w-full rounded-lg bg-[#1E1C3A]">
            <div className="h-full w-[80%] rounded-lg bg-[#5ECFFF]"></div>
          </div>
        </div>
        <div className="d_Flex pt-5">
          {AvatarGroupsData.slice(0, 3).map((el, index) => (
            <Image
              key={index}
              src={el.image}
              width={40}
              height={40}
              alt="icon"
              className={index === 0 ? '' : '-ml-20'}
            />
          ))}
          <div className="flex items-center space-x-1 text-[#A5A5A5]">
            <AiOutlineClockCircle className="h-4 w-4" />
            <p className="text-sm font-semibold">Due in 4 days</p>
          </div>
        </div>
      </div>
      <div className="relative h-[229px] w-[300px] rounded-[14px]  bg-[#07051A] shadow-lg">
        <div className="taskCard absolute right-2 left-8 top-12  rotate-[17deg]">
          <div className="d_Flex">
            <div className="flex items-center space-x-2 text-[#FF4A55]">
              <GoDotFill />
              <p className="font-semibold">BUGS FIXING</p>
            </div>
            <BsThreeDots className="h-6 w-6 text-[#A5A5A5] " />
          </div>
          <p className="pb-5 pt-3 ">Payment gateway needs reauthorization.</p>
          <div className="w-[220px]">
            <div className="h-2 w-full rounded-lg bg-[#1E1C3A]">
              <div className="h-full w-[90%] rounded-lg bg-[#FF4A55]"></div>
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
    </div>
  );
};

export default Progress;
