import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="flex h-screen overflow-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex flex-1 flex-col overflow-hidden overflow-y-auto`}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main className="flex-1  p-4">{children}</main>
      </div>
    </section>
  );
};

export default Layout;
