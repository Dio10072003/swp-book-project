'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Đã thêm FaStarHalfAlt để hiển thị nửa sao chính xác hơn
import { FaBookOpen, FaInfoCircle, FaPhoneAlt, FaChevronRight, FaStar, FaFire, FaFeatherAlt, FaStarHalfAlt } from 'react-icons/fa'; 
import Image from 'next/image';

export default function Home() {
  const [greet, setGreet] = useState('Hello');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreet('Good Morning');
    else if (hour < 18) setGreet('Good Afternoon');
    else setGreet('Good Evening');
  }, []);

  const books = [
    {
      id: 1,
      title: 'Code Mastery: Advanced Techniques',
      author: 'Jane Doe',
      price: '99.000đ',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41w7mJ0Oj-L._SX258_BO1,204,203,200_.jpg',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'The Art of Clean Code',
      author: 'John Smith',
      price: '125.000đ',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg',
      rating: 4.8,
    },
    {
      id: 3,
      title: 'Beyond the Code: Software Architecture',
      author: 'Alex Brown',
      price: '150.000đ',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51LnQxpLsuL._SX379_BO1,204,203,200_.jpg',
      rating: 4.2,
    },
    {
      id: 4,
      title: 'Mastering JavaScript ES6+',
      author: 'Emily White',
      price: '110.000đ',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41N5hdRcw6L._SX258_BO1,204,203,200_.jpg',
      rating: 4.7,
    },
    {
      id: 5,
      title: 'Python for Data Science',
      author: 'David Green',
      price: '180.000đ',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41uPjEenkFL._SX379_BO1,204,203,200_.jpg',
      rating: 4.9,
    },
    {
      id: 6,
      title: 'Designing User Interfaces',
      author: 'Sophia Lee',
      price: '135.000đ',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41fnWzYPvFL._SX331_BO1,204,203,200_.jpg',
      rating: 4.6,
    },
  ];

  const explore = [
    {
      href: '/AboutPage',
      icon: <FaInfoCircle className="text-4xl text-blue-500 dark:text-blue-300" />,
      label: 'Our Story',
      desc: 'Discover our passion and journey in the world of coding literature.',
    },
    {
      href: '/Contact',
      icon: <FaPhoneAlt className="text-4xl text-green-500 dark:text-green-300" />,
      label: 'Contact Us',
      desc: 'We are always happy to help and hear your feedback!',
    },
    {
      href: '/Categories',
      icon: <FaBookOpen className="text-4xl text-purple-500 dark:text-purple-300" />,
      label: 'Browse Categories',
      desc: 'Dive into various programming languages and tech topics.',
    },
  ];

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Function to render star ratings - Cập nhật để hiển thị nửa sao chính xác hơn
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />); // Sử dụng FaStarHalfAlt
    }
    while (stars.length < 5) {
      stars.push(<FaStar key={`empty-${stars.length}`} className="text-gray-300 dark:text-gray-600" />);
    }
    return <div className="flex items-center gap-1">{stars}</div>;
  };

  return (
    // ĐÃ XÓA THẺ <main> BÊN NGOÀI NÀY
    <> {/* Sử dụng Fragment thay vì thẻ <main> */}
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center mb-20 bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
      >
        {/* Background gradient overlay for subtle effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-pink-100/30 to-purple-100/30 dark:from-yellow-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-3xl z-0"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-600 dark:text-pink-400 drop-shadow-lg mb-6 leading-tight">
            <span className="block text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{greet},</span>
            Welcome to <span className="text-yellow-500 dark:text-yellow-300">Coder-Bookstore</span>!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Your ultimate destination for inspiring coding books and resources to elevate your skills and fuel your passion.
          </p>
          <Link
            href="/Books" // Đảm bảo khớp với đường dẫn trong Header và cấu trúc file
            className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform"
            aria-label="Browse all books at Coder-Bookstore"
          >
            Explore Our Collection <FaChevronRight className="inline-block ml-2 -mr-1 text-sm" />
          </Link>
        </div>
      </motion.section>

      {/* Featured Books Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 dark:text-purple-400 mb-12 text-center drop-shadow-md">
          <FaFire className="inline-block text-yellow-500 mr-3 align-middle" />
          Sách Nổi Bật <span className="text-pink-500">& Mới Nhất</span>
        </h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        >
          {books.map(({ id, title, author, price, img, rating }) => (
            <motion.article
              key={id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div className="relative w-full h-72 overflow-hidden rounded-t-2xl">
                <Image
                  src={img}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  priority={id <= 3}
                  className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-2 leading-snug">{title}</h3>
                  <p className="text-base text-gray-500 dark:text-gray-400 mb-3">by <span className="font-semibold">{author}</span></p>
                  <div className="flex items-center mb-3">
                    {renderStars(rating)}
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">({rating})</span>
                  </div>
                  <p className="font-extrabold text-2xl text-yellow-600 dark:text-yellow-400 mb-4">{price}</p>
                </div>
                <Link
                  href={`/Books/${id}`} // Đảm bảo khớp với cấu trúc đường dẫn của bạn
                  className="inline-flex items-center justify-center gap-2 text-pink-500 font-semibold hover:text-pink-700 dark:hover:text-pink-300 transition-colors duration-200 mt-auto bg-pink-50 dark:bg-gray-700 py-2 rounded-lg hover:bg-pink-100 dark:hover:bg-gray-600"
                  aria-label={`Details about ${title}`}
                >
                  Xem chi tiết <FaChevronRight className="text-sm" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <div className="text-center mt-16">
          <Link
            href="/Books" // Đảm bảo khớp với đường dẫn trong Header và cấu trúc file
            className="inline-block px-8 py-3 text-lg bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 hover:scale-105 transition-transform duration-300 ease-in-out"
            aria-label="View all books"
          >
            Xem tất cả sách <FaChevronRight className="inline-block ml-2 text-sm" />
          </Link>
        </div>
      </motion.section>

      {/* Explore More Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-700 dark:text-pink-400 mb-12 text-center drop-shadow-md">
          <FaFeatherAlt className="inline-block text-purple-500 mr-3 align-middle" />
          Khám Phá Thêm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {explore.map(({ href, icon, label, desc }) => (
            <motion.div
              key={href}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center justify-center"
            >
              <div className="mb-5 p-4 rounded-full bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 dark:from-yellow-950 dark:via-pink-950 dark:to-purple-950 shadow-inner">
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{label}</h3>
              <p className="text-base text-gray-600 dark:text-gray-400">{desc}</p>
              <Link
                href={href}
                className="mt-6 inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-800 dark:hover:text-purple-200 transition-colors duration-200"
                aria-label={`Go to ${label}`}
              >
                Tìm hiểu thêm <FaChevronRight className="text-sm" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action or Testimonial Section (New) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="text-center py-16 bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 dark:from-pink-900/50 dark:via-purple-900/50 dark:to-yellow-900/50 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <h2 className="text-4xl font-extrabold text-pink-700 dark:text-pink-400 mb-6">
          Sẵn Sàng Nâng Tầm Kỹ Năng Của Bạn?
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-8">
          Tham gia cộng đồng Coder-Bookstore ngay hôm nay để không bỏ lỡ những kiến thức mới nhất!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/Register" // Đảm bảo khớp với đường dẫn trong Header và cấu trúc file
            className="inline-block px-8 py-3 bg-purple-600 text-white text-lg rounded-full font-bold shadow-lg hover:bg-purple-700 hover:scale-105 transition-transform duration-300"
            aria-label="Register now"
          >
            Đăng Ký Ngay
          </Link>
          <Link
            href="/Contact" // Đảm bảo khớp với đường dẫn trong Header và cấu trúc file
            className="inline-block px-8 py-3 bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-300 text-lg rounded-full font-bold shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-105 transition-transform duration-300 border border-purple-600 dark:border-purple-400"
            aria-label="Learn more about us"
          >
            Tìm Hiểu Thêm
          </Link>
        </div>
      </motion.section>
    </> // ĐÃ XÓA THẺ <main> BÊN NGOÀI NÀY
  );
}