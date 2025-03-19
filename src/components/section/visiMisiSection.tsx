import React from "react";

import { IconTarget, IconListCheck } from "@tabler/icons-react";

export default function VisiMisiSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="max-w-4xl mx-auto py-16 md:py-[6rem] text-center"
    >
      <div className="flex justify-center items-center flex-col px-4">
        <div className="w-full md:w-[40rem]">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Visi & Misi{" "}
            <span className="text-blue-900">SMA Muhammadiyah 5</span> Makassar
          </h2>
        </div>
        <p className="text-gray-600 mb-8">
          Tujuan utama dan langkah strategis SMA Muhammadiyah 5 Makassar.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        {/* Visi */}
        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center w-full h-[17rem] md:w-1/2 transition-transform transform hover:scale-105">
          <IconTarget size={48} className="text-blue-900 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Visi</h3>
          <p className="text-gray-600">
            Kompetitif, Islami, dan berakhlak mulia berdasarkan Al-Qur’an dan
            As-Sunnah.
          </p>
        </div>

        {/* Misi */}
        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center w-full h-[17rem] md:w-1/2 transition-transform transform hover:scale-105">
          <IconListCheck size={48} className="text-blue-900 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Misi</h3>
          <ul className="text-gray-600 text-left list-disc px-4">
            <li>Menguatkan keimanan dan ketakwaan.</li>
            <li>Mengintegrasikan IPTEK dan IMTAQ.</li>
            <li>Menyelenggarakan pembelajaran efektif.</li>
            <li>Mempersiapkan siswa unggul akademik.</li>
            <li>Mengembangkan budaya mutu dan akhlak.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
