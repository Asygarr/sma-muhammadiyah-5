"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("beranda");

  return (
    <nav className="bg-white shadow-md px-6 md:px-20 py-1 flex justify-between items-center fixed w-full z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/images/logo-sekolah.png"
          alt="logo"
          width={38}
          height={38}
          className="md:h-[60px] md:w-[50px]"
        />
      </div>

      {/* Menu & Login - Desktop */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        {/* List Menu */}
        <div className="flex space-x-6 font-medium">
          {[
            { name: "Beranda", href: "#beranda" },
            { name: "Tentang Kami", href: "#tentangKami" },
            { name: "Profil", href: "#profil" },
            { name: "Ekstrakurikuler", href: "#ekstrakurikuler" },
            { name: "Berita", href: "#berita" },
            { name: "Lokasi", href: "#lokasi" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveSection(item.href.slice(1))}
              className={`${
                activeSection === item.href.slice(1)
                  ? "text-blue-900 font-semibold"
                  : "hover:text-blue-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Tombol Login - Desktop */}
      <div className="hidden md:flex items-center">
        <Link
          href="/login"
          className="ml-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
        >
          Masuk
        </Link>
      </div>

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
            className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col space-y-4 py-6 px-6 md:hidden"
          >
            {[
              { name: "Beranda", href: "#beranda" },
              { name: "Tentang Kami", href: "#tentangKami" },
              { name: "Profil", href: "#profil" },
              { name: "Ekstrakurikuler", href: "#ekstrakurikuler" },
              { name: "Berita", href: "#berita" },
              { name: "Lokasi", href: "#lokasi" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href.slice(1));
                  setIsOpen(false);
                }}
                className={`${
                  activeSection === item.href.slice(1)
                    ? "text-blue-900 font-semibold"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Tombol Login di Mobile */}
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md text-center hover:bg-blue-800 transition"
            >
              Masuk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
