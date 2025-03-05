"use client";

export default function alumniSection({ id }: { id?: string }) {
  const alumniData = [
    {
      name: "Fajar Perkasa",
      year: "Angkatan 2009",
      description:
        "Fajar adalah seorang UI/UX designer yang bekerja di Inggris dan salah satu alumni berprestasi.",
      image: "/images/alumni-1.png",
    },
    {
      name: "Andi Satya Windi",
      year: "Angkatan 2014",
      description:
        "Windi adalah seorang UI/UX designer yang bekerja di Inggris dan salah satu alumni berprestasi.",
      image: "/images/alumni-2.png",
    },
  ];

  return (
    <>
      {/* Section Profil Alumni */}
      <section id={id} className="px-6 md:px-16 py-12 md:py-24">
        <div className="flex justify-center items-center flex-col">
          <div className="w-full md:w-[40rem] text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold">
              Profil Alumni{" "}
              <span className="text-blue-600">SMA Muhammadiyah 5</span> Makassar
            </h2>
            <p className="text-gray-600 mt-2">
              Profil Alumni SMA Muhammadiyah 5 Makassar.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 py-8">
          {alumniData.map((alumni, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start max-w-[30rem]"
            >
              {/* Gambar Alumni (Ukuran Diperbesar) */}
              <img
                src={alumni.image}
                alt={alumni.name}
                className="w-56 h-56 md:w-60 md:h-60 object-cover rounded-lg"
              />

              {/* Informasi Alumni */}
              <div className="px-6 md:px-8 pt-4 md:pt-0 flex-1">
                <h3 className="font-bold text-xl md:text-2xl">{alumni.name}</h3>
                <p className="text-gray-500 text-sm">{alumni.year}</p>
                <p className="text-gray-600 text-sm mt-2">
                  {alumni.description}
                </p>
                {/* <p className="text-blue-600 font-semibold mt-auto cursor-pointer">
                  Baca Selengkapnya
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
