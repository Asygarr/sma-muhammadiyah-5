"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface News {
  id: string;
  judul: string;
  text: string;
  image: string;
  penulis: string;
}

export default function NewsSection({ id }: { id?: string }) {
  const [newsData, setNewsData] = useState<News[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/berita", { cache: "no-store" });
        if (!res.ok) throw new Error("Gagal mengambil berita");
        const data = await res.json();
        setNewsData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNews();
  }, []);

  return (
    <section id={id} className="px-6 md:px-16 py-12 md:py-24">
      {/* Headline */}
      <div className="flex justify-center items-center flex-col">
        <div className="w-full md:w-[40rem] text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Berita Terbaru Di{" "}
            <span className="text-blue-900">SMA Muhammadiyah 5</span> Makassar
          </h2>
          <p className="text-gray-600 mt-2">
            Berita Terbaru Tentang SMA Muhammadiyah 5 Makassar.
          </p>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center items-center">
        {newsData.length > 0 ? (
          newsData.map((news) => (
            <Link
              key={news.id}
              href={`/berita/${news.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden w-full flex flex-col hover:shadow-lg transition mx-auto"
            >
              <img
                src={news.image}
                alt="Berita"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg flex-grow mb-3">
                  {news.judul}
                </h3>
                <p className="text-sm text-gray-500">Oleh {news.penulis}</p>
                <p className="text-blue-900 font-semibold mt-auto">
                  Baca Selengkapnya
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">
            Belum ada berita...
          </p>
        )}
      </div>
    </section>
  );
}
