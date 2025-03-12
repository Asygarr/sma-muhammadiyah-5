"use client";

import Image from "next/image";

export default function ProfileSection({ id }: { id?: string }) {
  return (
    <section id={id} className="px-6 md:px-16 py-12 md:py-24">
      {/* Headline */}
      <div className="text-center flex justify-center items-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold w-[40rem]">
          Profil <span className="text-blue-600">SMA Muhammadiyah 5</span>{" "}
          Makassar
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Foto Kepala Sekolah */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/foto-kepsek.jpeg"
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
            Puji syukur ke hadirat Allah SWT atas rahmat-Nya, SMA Muhammadiyah 5
            Makassar terus berkomitmen mencetak generasi Islami, berakhlak
            mulia, dan berdaya saing global. Dengan kurikulum inovatif serta
            dukungan guru dan orang tua, kami berharap siswa berkembang optimal
            dalam akademik, karakter, dan keterampilan hidup.
          </p>
          <p className="text-gray-600 mt-2">
            Kami percaya bahwa pendidikan bukan hanya tentang akademik, tetapi
            juga pembentukan karakter, keterampilan, dan kepemimpinan. Dengan
            dukungan guru, orang tua, serta lingkungan yang kondusif, kami
            berkomitmen mencetak generasi unggul, berdaya saing, beriman, serta
            siap menghadapi tantangan di era global.
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
