"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 py-1.5 max-w-screen-lg mx-auto">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          SMA <span className="text-blue-600">Muhammadiyah</span> 5 Makassar
        </h1>
        <p className="text-base text-gray-600 mt-4 md:text-lg">
          Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
          berprestasi di segala bidang yang dapat bersaing di dunia
          internasional.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <Link
            href="#"
            className="text-xs md:text-sm px-4 py-3 bg-blue-600 text-white md:px-6 md:py-3 rounded-full font-semibold shadow-md hover:bg-blue-700"
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative md:w-1/2 flex justify-center">
        <Image
          src="/images/sekolah.jpg"
          alt="School Hallway"
          width={400}
          height={350}
        />

        {/* Floating Testimonials */}
        <div className="absolute bottom-5 left-7 bg-white p-3 shadow-md rounded-lg text-sm md:w-[60%]">
          <p className="italic">
            "Belajar Itu Menyenangkan, Kuncinya Jangan Pernah Menyerah Oleh
            Apapun Itu"
          </p>
        </div>
      </div>
    </section>
  );
}
