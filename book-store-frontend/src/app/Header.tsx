'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { JSX } from 'react';

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [greet, setGreet] = useState("Chào bạn");
  const [currentTime, setCurrentTime] = useState("");
  // Sử dụng vị trí đã lưu trong bộ nhớ để cá nhân hóa
  const [currentLocation] = useState("An Nhơn, Bình Định"); // Vị trí mặc định dựa trên ngữ cảnh đã lưu

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreet("Chào buổi sáng");
    else if (hour < 18) setGreet("Chào buổi chiều");
    else setGreet("Chào buổi tối");

    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 shadow-xl dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 text-white font-sans">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-300 drop-shadow-md"
        >
          <Image
            src="/images/Coder-BookStore-Logo.svg" // <-- ĐÃ THAY ĐỔI TỪ .png THÀNH .svg Ở ĐÂY
            alt="Coder-Bookstore Logo"
            width={40}
            height={40}
            className="object-contain mr-1"
          />
          <span>Coder-Bookstore</span>
        </Link>

        {/* Desktop menu and User/Time Info */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="font-semibold text-base uppercase tracking-wide flex items-center gap-4">
            <Link href="/" className="hover:text-teal-200 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10">
              Trang Chủ
            </Link>
            <Link href="/Books" className="hover:text-teal-200 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10">
              Sách
            </Link>
            <Link href="/AboutPage" className="hover:text-teal-200 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10">
              Về Chúng Tôi
            </Link>
            <Link href="/Contact" className="hover:text-teal-200 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10">
              Liên Hệ
            </Link>
          </nav>
          
          {/* User/Auth Links & Time/Greeting */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/Login" className="flex items-center gap-1 hover:text-white transition-colors duration-200 px-3 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 shadow-inner">
              <FaUserCircle className="text-xl" /> Đăng nhập
            </Link>
            <Link href="/Register" className="hover:text-white transition-colors duration-200 px-3 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 shadow-inner">
              Đăng ký
            </Link>
            <span className="text-yellow-100 bg-black bg-opacity-25 px-3 py-1 rounded-full shadow-inner text-xs flex flex-col items-center">
              <span className="font-bold">{greet}, {currentTime}</span>
              <span className="text-gray-300 text-opacity-80 mt-0.5">{currentLocation}</span>
            </span>
          </div>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
        >
          {open ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 px-6 pb-6 space-y-3 text-white font-semibold uppercase tracking-wide text-base">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block hover:text-teal-200 transition-colors duration-200 py-2 rounded-md hover:bg-white hover:bg-opacity-10"
          >
            Trang Chủ
          </Link>
          <Link
            href="/Books"
            onClick={() => setOpen(false)}
            className="block hover:text-teal-200 transition-colors duration-200 py-2 rounded-md hover:bg-white hover:bg-opacity-10"
          >
            Sách
          </Link>
          <Link
            href="/AboutPage"
            onClick={() => setOpen(false)}
            className="block hover:text-teal-200 transition-colors duration-200 py-2 rounded-md hover:bg-white hover:bg-opacity-10"
          >
            Về Chúng Tôi
          </Link>
          <Link
            href="/Contact"
            onClick={() => setOpen(false)}
            className="block hover:text-teal-200 transition-colors duration-200 py-2 rounded-md hover:bg-white hover:bg-opacity-10"
          >
            Liên Hệ
          </Link>
          <hr className="border-t border-white border-opacity-20 my-2" />
          <Link
            href="/Login"
            onClick={() => setOpen(false)}
            className="block hover:text-teal-200 transition-colors duration-200 py-2 rounded-md hover:bg-white hover:bg-opacity-10"
          >
            Đăng nhập
          </Link>
          <Link
            href="/Register"
            onClick={() => setOpen(false)}
            className="block hover:text-teal-200 transition-colors duration-200 py-2 rounded-md hover:bg-white hover:bg-opacity-10"
          >
            Đăng ký
          </Link>
          <div className="flex justify-center pt-4">
            <span className="text-xs font-bold text-yellow-100 bg-black bg-opacity-30 px-3 py-1 rounded-full shadow-inner flex flex-col items-center">
              <span>{greet}, {currentTime}</span>
              <span className="text-gray-300 text-opacity-80 mt-0.5">{currentLocation}</span>
            </span>
          </div>
        </nav>
      )}
    </header>
  );
}