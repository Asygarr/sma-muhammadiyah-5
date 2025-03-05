"use client";

import {
  IconDeviceLaptop,
  IconBuilding,
  IconSchool,
} from "@tabler/icons-react";

export default function whySection({ id }: { id?: string }) {
  const features = [
    {
      icon: (
        <IconDeviceLaptop size={48} stroke={1.5} className="text-blue-600" />
      ),
      title: "Fasilitas Lengkap",
      description: "Penunjang belajar dengan kualitas terbaik",
    },
    {
      icon: <IconBuilding size={48} stroke={1.5} className="text-blue-600" />,
      title: "Lingkungan Nyaman",
      description: "Berada di lingkungan yang nyaman dan asri",
    },
    {
      icon: <IconSchool size={48} stroke={1.5} className="text-blue-600" />,
      title: "Pengajar Kompeten",
      description: "Guru terbaik dengan pengalaman",
    },
  ];

  return (
    <section id={id} className="py-16 md:py-[6rem] bg-white text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center flex-col">
          <div className="w-full md:w-[40rem]">
            <h2 className="text-2xl md:text-4xl font-bold">
              Kenapa Harus{" "}
              <span className="text-blue-600">SMA Muhammadiyah 5</span>{" "}
              Makassar?
            </h2>
          </div>
          <div className="w-full md:w-[30rem]">
            <p className="text-gray-600 mt-4">
              Alasan kenapa harus memilih untuk bergabung dengan SMA
              Muhammadiyah 5 Makassar.
            </p>
          </div>
        </div>
        {/* <p className="text-gray-600 mt-4">
          Alasan kenapa harus memilih untuk bergabung dengan SMK Negeri
          Makassar.
        </p> */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-[15rem] p-6 flex flex-col items-center bg-white shadow-lg rounded-xl text-center transition-transform transform hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
