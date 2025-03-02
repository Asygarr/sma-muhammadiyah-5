"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-md px-6 md:px-12 py-5 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-base md:text-2xl font-bold">
        <span className="text-black">SMA </span>
        <span className="text-blue-600">MUHAMMADIYAH </span>
        <span className="text-black">5 </span>
      </Link>

      {/* Menu - Desktop */}
      <div className="hidden md:flex space-x-6 font-medium">
        <Link href="/" className="text-blue-600">
          Beranda
        </Link>
        <div className="relative group">
          <button className="hover:text-blue-600">Tentang Kami</button>
          <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-2 rounded-md">
            <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
              Profil
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
              Visi Misi
            </Link>
          </div>
        </div>
        <Link href="#" className="hover:text-blue-600">
          Program
        </Link>
        <Link href="#" className="hover:text-blue-600">
          Guru
        </Link>
        <Link href="#" className="hover:text-blue-600">
          Siswa
        </Link>
        <Link href="#" className="hover:text-blue-600">
          Berita
        </Link>
        <Link href="#" className="hover:text-blue-600">
          Fitur
        </Link>
      </div>

      {/* Contact Button */}
      {/* <Link
        href="#"
        className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold"
      >
        Contact
      </Link> */}

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 py-6 px-6 md:hidden"
          >
            <Link href="/" className="text-blue-600">
              Beranda
            </Link>
            <Link href="#">Tentang Kami</Link>
            <Link href="#">Program</Link>
            <Link href="#">Guru</Link>
            <Link href="#">Siswa</Link>
            <Link href="#">Berita</Link>
            <Link href="#">Fitur</Link>
            {/* <Link
              href="#"
              className="bg-blue-600 text-white px-2 py-2 rounded-full text-center"
            >
              Contact
            </Link> */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
