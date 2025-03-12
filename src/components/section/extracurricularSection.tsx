"use client";

import { details } from "framer-motion/client";
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

export default function extracurricularSection({ id }: { id?: string }) {
  return (
    <section id={id} className="px-6 md:px-16 py-16 md:py-24 bg-slate-100">
      {/* Headline */}
      <div className="flex justify-center items-center flex-col">
        <div className="w-full md:w-[40rem] text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Ekstrakurikuler Di{" "}
            <span className="text-blue-600">SMA Muhammadiyah 5</span> Makassar
          </h2>
          <p className="text-gray-600 mt-5">
            Pilihan Ekstrakurikuler di SMA Muhammadiyah 5 Makassar.
          </p>
        </div>
      </div>

      {/* Flex Container */}
      <div className="flex flex-wrap justify-center gap-6">
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
              <button className="text-blue-600 font-semibold mt-auto self-start">
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
