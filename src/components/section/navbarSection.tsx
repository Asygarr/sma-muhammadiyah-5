"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("beranda"); // Default aktif di "beranda"

  return (
    <nav className="bg-white shadow-md px-6 md:px-12 py-5 flex justify-between items-center fixed w-full z-50">
      {/* Logo */}
      <a href="/" className="text-base md:text-2xl font-bold">
        <span className="text-black">SMA </span>
        <span className="text-blue-600">MUHAMMADIYAH </span>
        <span className="text-black">5 </span>
      </a>

      {/* Menu - Desktop */}
      <div className="hidden md:flex space-x-6 font-medium">
        <a
          href="/"
          onClick={() => setActiveSection("beranda")}
          className={`${
            activeSection === "beranda"
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-600"
          }`}
        >
          Beranda
        </a>
        <a
          href="#tentangKami"
          onClick={() => setActiveSection("tentangKami")}
          className={`${
            activeSection === "tentangKami"
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-600"
          }`}
        >
          Tentang Kami
        </a>
        <a
          href="#profil"
          onClick={() => setActiveSection("profil")}
          className={`${
            activeSection === "profil"
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-600"
          }`}
        >
          Profil
        </a>
        <a
          href="#ekstrakurikuler"
          onClick={() => setActiveSection("ekstrakurikuler")}
          className={`${
            activeSection === "ekstrakurikuler"
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-600"
          }`}
        >
          Ekstrakurikuler
        </a>
        <a
          href="#berita"
          onClick={() => setActiveSection("berita")}
          className={`${
            activeSection === "berita"
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-600"
          }`}
        >
          Berita
        </a>
        <a
          href="#alumni"
          onClick={() => setActiveSection("alumni")}
          className={`${
            activeSection === "alumni"
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-600"
          }`}
        >
          Alumni
        </a>
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
            className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 py-6 px-6 md:hidden"
          >
            <a
              href="#beranda"
              onClick={() => {
                setActiveSection("beranda");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "beranda" ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Beranda
            </a>
            <a
              href="#tentangKami"
              onClick={() => {
                setActiveSection("tentangKami");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "tentangKami"
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              Tentang Kami
            </a>
            <a
              href="#profil"
              onClick={() => {
                setActiveSection("profil");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "profil" ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Profil
            </a>
            <a
              href="#ekstrakurikuler"
              onClick={() => {
                setActiveSection("ekstrakurikuler");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "ekstrakurikuler"
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              Ekstrakurikuler
            </a>
            <a
              href="#berita"
              onClick={() => {
                setActiveSection("berita");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "berita" ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Berita
            </a>
            <a
              href="#alumni"
              onClick={() => {
                setActiveSection("alumni");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "alumni" ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Alumni
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
