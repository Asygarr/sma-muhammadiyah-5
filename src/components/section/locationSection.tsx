"use client";

export default function LocationSection({ id }: { id?: string }) {
  return (
    <section id="lokasi" className="px-6 md:px-16 py-16 md:py-24 bg-white">
      <div className="flex justify-center items-center flex-col">
        <div className="w-full md:w-[40rem] text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Lokasi Sekolah{" "}
            <span className="text-blue-900">SMA Muhammadiyah 5</span> Makassar
          </h2>
          <p className="text-gray-600 mt-5">
            Berikut adalah lokasi sekolah kami yang dapat Anda kunjungi.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <iframe
            className="w-full h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.74368102868254!2d119.42668591007205!3d-5.111850571522038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefd7b00dfe64f%3A0x2c487ea6c2cb4451!2sSMA%20Muhammadiyah%205%20Makassar!5e0!3m2!1sid!2sid!4v1741785797398!5m2!1sid!2sid"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
