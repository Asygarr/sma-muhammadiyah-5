"use client";

export default function NewsSection({ id }: { id?: string }) {
  const newsData = [
    {
      title:
        "SMA Muhammadiyah 5 Makassar Cetak Alumni Berkualitas, Siap Terima Siswa Baru",
      description: "SMA Muhammadiyah 5 Makassar siap menerima siswa baru. ",
      image: "/images/pendaftaran.jpeg",
      url: "https://www.wartamu.id/sma-muhammadiyah-5-makassar-cetak-alumni-berkualitas-siap-terima-siswa-baru-tahun-ajaran-2024/",
    },
    {
      title: "Detail Profile Sekolah SMA Muhammadiyah 5 Makassar",
      description:
        "SMA Muhammadiyah 5 Makassar adalah sekolah yang berada di Makassar.",
      image: "/images/sekolah-berita.jpeg",
      url: "https://dapo.dikdasmen.go.id/sekolah/BE8FA5C8A6E159BEF6EC",
    },
  ];

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

      {/* Flexbox Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {newsData.map((news, index) => (
          <a
            key={index}
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md overflow-hidden w-80 flex flex-col"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg flex-grow mb-3">
                {news.title}
              </h3>
              <p className="text-blue-900 font-semibold mt-auto">
                Baca Selengkapnya
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
