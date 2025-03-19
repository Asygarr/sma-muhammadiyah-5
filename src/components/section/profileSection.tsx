"use client";

import { Type } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

type Sambutan = {
  imageUrl: string;
  text: string;
};

export default function ProfileSection({ id }: { id?: string }) {
  const [sambutan, setSambutan] = useState<Sambutan>({
    imageUrl: "",
    text: "",
  });

  useEffect(() => {
    fetchSambutan();
  }, []);

  const fetchSambutan = async () => {
    const res = await fetch("/api/sambutan", {
      cache: "no-store",
    });

    const data = await res.json();
    setSambutan(data.sambutan);
  };

  return (
    <section id={id} className="px-6 md:px-16 py-12 md:py-24">
      {/* Headline */}
      <div className="text-center flex justify-center items-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold w-[40rem]">
          Profil <span className="text-blue-900">SMA Muhammadiyah 5</span>{" "}
          Makassar
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Foto Kepala Sekolah */}
        <div className="w-full md:w-1/2">
          {/* <Image
            src="/images/foto-kepsek.jpeg"
            alt="Kepala Sekolah"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          /> */}
          {sambutan.imageUrl ? (
            <Image
              src={sambutan.imageUrl}
              alt="Kepala Sekolah"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          ) : null}
        </div>

        {/* Sambutan Kepala Sekolah */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h3 className="text-xl md:text-3xl font-bold">
            Sambutan Kepala Sekolah SMA Muhammadiyah 5 Makassar
          </h3>
          <div className="text-gray-600 mt-3">
            {sambutan.text
              ? sambutan.text.split("\r\n\r\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </section>
  );
}
