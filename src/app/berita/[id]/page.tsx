import { notFound } from "next/navigation";
import { headers } from "next/headers";

export default async function page({ params }: { params: { id: string } }) {
  const host = (await headers()).get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/berita/${params.id}`);

  if (!res.ok) {
    return notFound();
  }

  const berita = await res.json();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-gray-900">
      {/* Hero Image */}
      <div className="relative w-full h-96 mb-6">
        <img
          src={berita.image}
          alt="Berita"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            {berita.judul}
          </h1>
        </div>
      </div>

      {/* Informasi Penulis & Tanggal */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Oleh{" "}
          <span className="font-semibold text-blue-700">{berita.penulis}</span>{" "}
          - {new Date(berita.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Konten Berita */}
      <article className="text-lg leading-relaxed text-gray-800">
        {berita.text
          ? berita.text
              .split(/\r?\n\r?\n/) // Bisa mendeteksi semua pemisah
              .map((paragraph: string, index: number) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))
          : "Loading..."}
      </article>
    </main>
  );
}
