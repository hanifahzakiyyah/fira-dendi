import { HomeIcon, UsersIcon, CalendarIcon, DocumentTextIcon, CheckCircleIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = ({ isScrollEnabled }) => {


  return (
    <nav className={ !isScrollEnabled? "fixed opacity-0 bottom-0 left-0 right-0 bg-purple-800/70 backdrop-blur-sm text-pink-200 py-5 z-50" : "fixed bottom-0 left-0 right-0 bg-purple-800/80 backdrop-blur-sm text-pink-200 py-5 z-50 opacity-1"}>
      <div className="max-w-screen-lg mx-auto flex justify-center items-center gap-6">
        <a href="#home" className="hover:text-purple-100 text-pink-200 transition-all duration-300 active:scale-90">
          <HomeIcon className="w-8 h-8" />
        </a>
        <a href="#mempelai" className="hover:text-purple-100 text-pink-200 transition-all duration-300 active:scale-90">
          <UsersIcon className="w-8 h-8" />
        </a>
        <a href="#tanggal" className="hover:text-purple-100 text-pink-200 transition-all duration-300 active:scale-90 ">
          <CalendarIcon className="w-8 h-8" />
        </a>
        <a href="#adab" className="hover:text-purple-100 text-pink-200 transition-all duration-300 active:scale-90">
          <DocumentTextIcon className="w-8 h-8" />
        </a>
        <a href="#konfirmasi" className="hover:text-purple-100 text-pink-200 transition-all duration-300 active:scale-90">
          <CheckCircleIcon className="w-8 h-8" />
        </a>
        <a href="#chat" className="hover:text-purple-100 text-pink-200 transition-all duration-300 active:scale-90">
          <ChatBubbleLeftRightIcon className="w-8 h-8" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
