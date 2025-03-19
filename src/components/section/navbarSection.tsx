"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("beranda"); // Default aktif di "beranda"

  return (
    <nav className="bg-white shadow-md px-6 md:px-20 py-1 flex justify-between items-center fixed w-full z-50">
      {/* Logo */}
      <Image
        src="/images/logo-sekolah.png"
        alt="logo"
        width={38}
        height={38}
        className="md:h-[50px] md:w-[50px]"
        layout="intrinsic"
      />

      {/* Menu - Desktop */}
      <div className="hidden md:flex space-x-6 font-medium">
        <a
          href="/"
          onClick={() => setActiveSection("beranda")}
          className={`${
            activeSection === "beranda"
              ? "text-blue-900 font-semibold"
              : "hover:text-blue-900"
          }`}
        >
          Beranda
        </a>
        <a
          href="#tentangKami"
          onClick={() => setActiveSection("tentangKami")}
          className={`${
            activeSection === "tentangKami"
              ? "text-blue-900 font-semibold"
              : "hover:text-blue-900"
          }`}
        >
          Tentang Kami
        </a>
        <a
          href="#profil"
          onClick={() => setActiveSection("profil")}
          className={`${
            activeSection === "profil"
              ? "text-blue-900 font-semibold"
              : "hover:text-blue-900"
          }`}
        >
          Profil
        </a>
        <a
          href="#ekstrakurikuler"
          onClick={() => setActiveSection("ekstrakurikuler")}
          className={`${
            activeSection === "ekstrakurikuler"
              ? "text-blue-900 font-semibold"
              : "hover:text-blue-900"
          }`}
        >
          Ekstrakurikuler
        </a>
        <a
          href="#berita"
          onClick={() => setActiveSection("berita")}
          className={`${
            activeSection === "berita"
              ? "text-blue-900 font-semibold"
              : "hover:text-blue-900"
          }`}
        >
          Berita
        </a>
        {/* <a
          href="#alumni"
          onClick={() => setActiveSection("alumni")}
          className={`${
            activeSection === "alumni"
              ? "text-blue-900 font-semibold"
              : "hover:text-blue-900"
          }`}
        >
          Alumni
        </a> */}
        <a
          href="#lokasi"
          onClick={() => setActiveSection("lokasi")}
          className={`${
            activeSection === "lokasi"
              ? "text-blue-900 font-semibold"
              : "hover:text-blue-900"
          }`}
        >
          Lokasi
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
                activeSection === "beranda" ? "text-blue-900 font-semibold" : ""
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
                  ? "text-blue-900 font-semibold"
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
                activeSection === "profil" ? "text-blue-900 font-semibold" : ""
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
                  ? "text-blue-900 font-semibold"
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
                activeSection === "berita" ? "text-blue-900 font-semibold" : ""
              }`}
            >
              Berita
            </a>
            {/* <a
              href="#alumni"
              onClick={() => {
                setActiveSection("alumni");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "alumni" ? "text-blue-900 font-semibold" : ""
              }`}
            >
              Alumni
            </a> */}
            <a
              href="#lokasi"
              onClick={() => {
                setActiveSection("lokasi");
                setIsOpen(false);
              }}
              className={`${
                activeSection === "lokasi" ? "text-blue-900 font-semibold" : ""
              }`}
            >
              Lokasi
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
