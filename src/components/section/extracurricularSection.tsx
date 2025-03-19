"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const extracurriculars = [
  {
    name: "Ikatan Pelajar Muhammadiyah",
    image: "/images/Logo_IPM.png",
    width: 30,
    height: 30,
    details:
      "Ikatan Pelajar Muhammadiyah (IPM) adalah organisasi otonom Muhammadiyah yang berfokus pada pengembangan kepemimpinan, keislaman, dan keterampilan pelajar. Ekstrakurikuler IPM bertujuan membentuk karakter siswa yang religius, disiplin, mandiri, dan berwawasan luas. Kegiatan IPM meliputi pelatihan kepemimpinan, kajian keislaman, aksi sosial, serta berbagai program pengembangan diri lainnya. Melalui IPM, siswa diajarkan untuk berorganisasi, berkontribusi dalam kegiatan sosial, serta mengamalkan nilai-nilai Islam dalam kehidupan sehari-hari.",
  },
  {
    name: "Hizbul Wathan",
    image: "/images/Logo_HW.png",
    width: 60,
    height: 60,
    details:
      "Hizbul Wathan (HW) adalah organisasi kepanduan yang berlandaskan nilai-nilai Islam dan merupakan bagian dari Muhammadiyah. Ekstrakurikuler HW bertujuan membentuk karakter disiplin, mandiri, serta berjiwa kepemimpinan bagi siswa. Kegiatan dalam HW meliputi latihan keterampilan kepanduan, pembinaan akhlak, pembelajaran kedisiplinan, serta kegiatan alam terbuka seperti berkemah dan bakti sosial. Dengan mengikuti HW, siswa diharapkan memiliki semangat kebersamaan, jiwa sosial yang tinggi, serta mampu mengamalkan nilai-nilai keislaman dalam kehidupan sehari-hari.",
  },
  {
    name: "Tapak Suci",
    image: "/images/Logo_TS.png",
    width: 60,
    height: 60,
    details:
      "Tapak Suci adalah seni bela diri yang merupakan bagian dari Muhammadiyah, mengajarkan keterampilan fisik sekaligus nilai-nilai spiritual Islam. Ekstrakurikuler ini bertujuan membentuk siswa yang tangguh, disiplin, serta berakhlak mulia. Kegiatan dalam Tapak Suci meliputi latihan bela diri, penguatan mental, pengembangan karakter, serta kompetisi kejuaraan. Selain melatih keterampilan bertahan dan menyerang, Tapak Suci juga menanamkan nilai sportivitas, kepemimpinan, dan ketahanan diri, sehingga siswa dapat tumbuh menjadi pribadi yang kuat secara fisik dan spiritual.",
  },
];

export default function ExtracurricularSection({ id }: { id?: string }) {
  const [selectedExtracurricular, setSelectedExtracurricular] =
    useState<any>(null);

  return (
    <>
      <section id={id} className="px-6 md:px-16 py-16 md:py-24 bg-slate-100">
        {/* Headline */}
        <div className="flex justify-center items-center flex-col">
          <div className="w-full md:w-[40rem] text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold">
              Ekstrakurikuler Di{" "}
              <span className="text-blue-900">SMA Muhammadiyah 5</span> Makassar
            </h2>
            <p className="text-gray-600 mt-5">
              Pilihan Ekstrakurikuler di SMA Muhammadiyah 5 Makassar.
            </p>
          </div>
        </div>

        {/* Flex Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {extracurriculars.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full"
            >
              <div className="flex-grow">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                />
                <h3 className="font-bold text-lg mt-5">{item.name}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-5">
                {item.details.split(" ").slice(0, 9).join(" ")}...
              </p>
              <button
                onClick={() => setSelectedExtracurricular(item)}
                className="text-blue-900 font-semibold mt-auto self-start"
              >
                Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedExtracurricular && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-[90%] md:w-[40rem] relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                onClick={() => setSelectedExtracurricular(null)}
              >
                ✕
              </button>

              <div className="flex flex-col items-center">
                <Image
                  src={selectedExtracurricular.image}
                  alt={selectedExtracurricular.name}
                  width={selectedExtracurricular.width}
                  height={selectedExtracurricular.height}
                />
                <h3 className="font-bold text-xl md:text-2xl mt-4">
                  {selectedExtracurricular.name}
                </h3>
                <p className="text-gray-600 text-sm text-center mt-2">
                  {selectedExtracurricular.details}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
