import Image from 'next/image';
import React from 'react'

const Avatar4Group = () => {
  return (
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
    </div>
  );
}

export default Avatar4Group