"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IconMenu, IconX } from "@tabler/icons-react";

type Berita = {
  id: string;
  judul: string;
  text: string;
  penulis: string;
  image?: string;
};

export default function Dashboard() {
  const [textForProfile, setTextForProfile] = useState("");
  const [imageForProfile, setImageForProfile] = useState(null);
  const [previewForProfile, setPreviewForProfile] = useState("");

  // berita
  const [judul, setJudul] = useState("");
  const [text, setText] = useState("");
  const [penulis, setPenulis] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [berita, setBerita] = useState<Berita[]>([]);

  const [activeMenu, setActiveMenu] = useState("profile");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }

    fetchBerita();
  }, [router]);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImageForProfile(file);
    setPreviewForProfile(URL.createObjectURL(file));
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("text", textForProfile);
    if (imageForProfile) formData.append("image", imageForProfile);

    const res = await fetch("/api/sambutan", {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    if (res.ok) {
      alert("Data berhasil diperbarui!");
    } else {
      alert("Gagal memperbarui data");
    }
  };

  // Berita
  const fetchBerita = async () => {
    const res = await fetch("/api/berita", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setBerita(data);
  };

  const handleImageChangeBerita = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleTambahBerita = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) formData.append("image", image);
    formData.append("judul", judul);
    formData.append("penulis", penulis);
    formData.append("text", text);

    const res = await fetch("/api/berita", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (res.ok) {
      alert("Berita berhasil ditambahkan!");
      fetchBerita();
      setJudul("");
      setText("");
      setPenulis("");
      setImage(null);
      setPreview("");
    } else {
      alert("Gagal menambahkan berita");
    }
  };

  const handleDeleteBerita = async (id: string) => {
    const res = await fetch(`/api/berita/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      alert("Berita berhasil dihapus!");
      fetchBerita();
    } else {
      alert("Gagal menghapus berita");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="flex h-screen bg-gray-800">
      {/* Sidebar */}
      <div className="w-64 h-[60rem] bg-gray-800 text-white p-5 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-4">Admin</h2>
          <ul>
            <li
              className={`p-2 cursor-pointer ${
                activeMenu === "profile" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveMenu("profile")}
            >
              Profil Sekolah
            </li>
            <li
              className={`p-2 cursor-pointer ${
                activeMenu === "news" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveMenu("news")}
            >
              Tambah Berita
            </li>
            <button
              onClick={handleLogout}
              className="p-2 mt-8 bg-red-800 hover:bg-red-500 rounded cursor-pointer"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      {activeMenu === "profile" && (
        <div className="flex-1 p-5 h-[60rem] bg-white">
          <button
            className="sm:hidden mb-4 bg-blue-600 text-white p-2 rounded"
            //   onClick={() => setSidebarOpen(true)}
          >
            <IconMenu size={24} />
          </button>
          <h1 className="text-2xl font-bold mb-4">Profil Sekolah</h1>
          <form
            onSubmit={handleUpdate}
            className="space-y-4 bg-white p-6 shadow rounded-lg"
          >
            <textarea
              placeholder="Teks sambutan (max 100 kata)"
              value={textForProfile}
              onChange={(e) => setTextForProfile(e.target.value)}
              className="w-full p-2 h-[20rem] border rounded"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
            />
            {previewForProfile && (
              <img
                src={previewForProfile}
                alt="Preview"
                className="w-full h-40 object-cover mt-2 rounded"
              />
            )}
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded"
            >
              Update
            </button>
          </form>
        </div>
      )}

      {activeMenu === "news" && (
        <div className="p-5 h-[60rem] bg-white">
          <h1 className="text-2xl font-bold mb-4">Tambah Berita</h1>
          <form onSubmit={handleTambahBerita} className="space-y-4">
            <input
              type="text"
              placeholder="Judul Berita"
              className="w-full p-2 border rounded"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Penulis"
              className="w-full p-2 border rounded"
              value={penulis}
              onChange={(e) => setPenulis(e.target.value)}
              required
            />
            <textarea
              placeholder="Teks berita"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 h-[15rem] border rounded"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChangeBerita}
              className="w-full p-2 border rounded"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-40 object-cover mt-2"
              />
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Tambah Berita
            </button>
          </form>

          <h2 className="text-lg font-bold mt-2">Daftar Berita</h2>
          <table className="w-full border-collapse border border-gray-300 mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Judul</th>
                <th className="border border-gray-300 p-2">Penulis</th>
                <th className="border border-gray-300 p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {berita.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border border-gray-300 p-2">{item.judul}</td>
                  <td className="border border-gray-300 p-2">{item.penulis}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleDeleteBerita(item.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
