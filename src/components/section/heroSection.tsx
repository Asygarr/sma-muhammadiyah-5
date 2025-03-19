"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="flex flex-col md:flex-row items-center justify-center gap-12 mt-20 px-6 md:px-12 py-1.5 md:pt-8 max-w-screen-lg mx-auto"
    >
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900">
          SMA <span className="text-blue-900">Muhammadiyah</span> 5 Makassar
        </h1>
        <p className="text-base text-gray-600 mt-4 md:text-lg">
          SMA Muhammadiyah 5 Makassar adalah sekolah yang mencetak siswa
          kompetitif, Islami, berakhlak mulia, berdaya saing global, berilmu,
          beriman, kreatif, mandiri, serta memiliki kepedulian sosial dan
          semangat kolaborasi dalam kehidupan bermasyarakat.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <Link
            href="#tentangKami"
            className="text-xs md:text-sm px-4 py-3 bg-blue-900 text-white md:px-6 md:py-3 rounded-full font-semibold shadow-md hover:bg-blue-600"
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative md:w-1/2 flex justify-center">
        <Image
          src="/images/sekolah-hero.jpg"
          alt="School Hallway"
          className="rounded-lg shadow-xl"
          width={300}
          height={250}
        />

        {/* Floating Testimonials */}
        <div className="absolute bottom-5 left-7 bg-white p-3 shadow-xl rounded-lg text-sm md:w-[60%]">
          <p className="italic">
            "Belajar Itu Menyenangkan, Kuncinya Jangan Pernah Menyerah Oleh
            Apapun Itu"
          </p>
        </div>
      </div>
    </section>
  );
}
