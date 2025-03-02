"use client";

import React from "react";
import Image from "next/image";

export default function profileSection() {
  return (
    <section className="px-6 md:px-16 py-12">
      {/* Headline */}
      <div className="text-center flex justify-center items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold w-[40rem]">
          Profil <span className="text-blue-600">SMK Muhammadiyah 5</span>{" "}
          Makassar
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Foto Kepala Sekolah */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/foto-kepsek.png"
            alt="Kepala Sekolah"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Sambutan Kepala Sekolah */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h3 className="text-xl md:text-3xl font-bold">
            Sambutan Kepala Sekolah SMA Muhammadiyah 5 Makassar
          </h3>
          <p className="text-gray-600 mt-3">
            Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
            berprestasi di segala bidang yang dapat bersaing di dunia
            internasional.
          </p>
          <p className="text-gray-600 mt-2">
            Sekolah juga merupakan tempat anak-anak mendapatkan dukungan untuk
            melengkapi pembelajarannya di sekolah.
          </p>
          <p className="text-gray-600 mt-2">
            Kami berkomitmen untuk memberikan pendidikan terbaik bagi siswa
            kami. Kami juga berkomitmen untuk membantu siswa kami mencapai cita
            - cita mereka. Kami berharap siswa kami dapat menjadi generasi yang
            berprestasi dan dapat bersaing di dunia internasional.
          </p>

          {/* Tombol */}
          {/* <button className="mt-6 px-6 py-3 w-[12rem] bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition">
            Baca Selanjutnya →
          </button> */}
        </div>
      </div>
    </section>
  );
}
