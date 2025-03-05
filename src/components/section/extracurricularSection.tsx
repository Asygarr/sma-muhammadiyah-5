"use client";

import Image from "next/image";

const extracurriculars = [
  {
    name: "Praja Muda Karana",
    year: "2002",
    image: "/images/pramuka.png",
  },
  {
    name: "Palang Merah Remaja",
    year: "2003",
    image: "/images/pmi.png",
  },
  {
    name: "Pecinta Alam",
    year: "2008",
    image: "/images/pecinta-alam.png",
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
        {extracurriculars.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start w-full md:w-1/2 lg:w-1/4"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="font-bold text-lg text-start">{item.name}</h3>
            <p className="text-gray-600 text-sm text-start">
              Pertama kali dibentuk team tahun {item.year}
            </p>
            <button className="mt-4 text-blue-600 font-semibold">
              Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
