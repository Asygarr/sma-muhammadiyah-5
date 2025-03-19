import React from "react";

import { IconTarget, IconListCheck } from "@tabler/icons-react";

export default function VisiMisiSection({ id }: { id?: string }) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 mt-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center items-center flex-col px-4">
          <div className="w-full md:w-[40rem]">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Visi & Misi <span className="text-black">SMA Muhammadiyah 5</span>{" "}
              Makassar
            </h2>
          </div>
          <p className="text-gray-50 mb-8">
            Tujuan utama dan langkah strategis SMA Muhammadiyah 5 Makassar.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 px-6">
          {/* Visi */}
          <div className="bg-white bg-opacity-20 p-6 rounded-xl flex flex-col items-center w-full md:w-1/2">
            <IconTarget size={48} className="text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visi</h3>
            <p className="opacity-90">
              Kompetitif, Islami, dan berakhlak mulia berdasarkan Al-Qur’an dan
              As-Sunnah.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white bg-opacity-20 p-6 rounded-xl flex flex-col items-center w-full md:w-1/2">
            <IconListCheck size={48} className="text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Misi</h3>
            <ul className="text-left list-disc px-4">
              <li>Menguatkan keimanan dan ketakwaan.</li>
              <li>Mengintegrasikan IPTEK dan IMTAQ.</li>
              <li>Menyelenggarakan pembelajaran efektif.</li>
              <li>Mempersiapkan siswa unggul akademik.</li>
              <li>Mengembangkan budaya mutu dan akhlak.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
