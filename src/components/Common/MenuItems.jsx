import Image from 'next/image';
import Link from 'next/link';

const MenuItems = () => {
  return (
    <ul className="big:space-y-6 flex flex-col  space-y-3">
      <li>
        <Link href="/" className="large:text-xl flex space-x-5">
          <span>
            <Image
              src="/images/sidebarIcon/dashboard1.svg"
              width={28}
              height={28}
              alt="icon"
            />
          </span>
          <span className="text-[#464366]">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          href="/email"
          className="large:text-xl flex justify-between space-x-5">
          <div className="flex space-x-5">
            <span>
              <Image
                src="/images/sidebarIcon/email1.svg"
                width={28}
                height={28}
                alt="icon"
              />
            </span>
            <span className="text-[#464366]">Email</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="rounded-full bg-[#5ECFFF] px-1.5 py-[2px]">
              17
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#7879F1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/chat" className="large:text-xl flex space-x-5">
          <span>
            <Image
              src="/images/sidebarIcon/comment1.svg"
              width={28}
              height={28}
              alt="icon"
            />
          </span>
          <span className="text-[#7879F1]">Chat</span>
        </Link>
      </li>
      <li>
        <Link
          href="/kanban"
          className="large:text-xl flex justify-between space-x-5">
          <div className="flex space-x-5">
            <span>
              <Image
                src="/images/sidebarIcon/thumbnail1.svg"
                width={28}
                height={28}
                alt="icon"
              />
            </span>
            <span className="text-[#6418C3]">Kanban</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="#7879F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="large:text-xl flex justify-between space-x-5">
          <div className="flex space-x-5">
            <span>
              <Image
                src="/images/sidebarIcon/contact1.svg"
                width={28}
                height={28}
                alt="icon"
              />
            </span>
            <span className="text-[#7879F1]">Contact</span>
          </div>
          <div>
            <span className="rounded-full bg-[#E328AF] px-4 py-1">New</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/calendar" className="large:text-xl flex space-x-5">
          <span>
            <Image
              src="/images/sidebarIcon/calendar-silhouette1.svg"
              width={28}
              height={28}
              alt="icon"
            />
          </span>
          <span className="text-[#7879F1]">Calendar</span>
        </Link>
      </li>
      <li>
        <Link
          href="/courses"
          className="large:text-xl flex justify-between space-x-5">
          <div className="flex space-x-5">
            <span>
              <Image
                src="/images/sidebarIcon/Video Lesson 2 1.svg"
                width={28}
                height={28}
                alt="icon"
              />
            </span>
            <span className="text-[#7879F1]">Courses</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="#7879F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/shop" className="large:text-xl flex space-x-5">
          <span>
            <Image
              src="/images/sidebarIcon/online-shopping 1.svg"
              width={28}
              height={28}
              alt="icon"
            />
          </span>
          <span className="text-[#7879F1]">Shop</span>
        </Link>
      </li>
      <li>
        <Link
          href="/invoices"
          className="large:text-xl flex justify-between space-x-5">
          <div className="flex space-x-5">
            <span>
              <Image
                src="/images/sidebarIcon/invoice 1.svg"
                width={28}
                height={28}
                alt="icon"
              />
            </span>
            <span className="text-[#7879F1]">Invoices</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="#7879F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/settings" className="large:text-xl flex space-x-5">
          <span>
            <Image
              src="/images/sidebarIcon/setting 1.svg"
              width={28}
              height={28}
              alt="icon"
            />
          </span>
          <span className="text-[#7879F1]">Settings</span>
        </Link>
      </li>
    </ul>
  );
};

export default MenuItems;
