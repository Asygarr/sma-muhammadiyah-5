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
  const [judul, setJudul] = useState("");
  const [text, setText] = useState("");
  const [penulis, setPenulis] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [berita, setBerita] = useState<Berita[]>([]);
  const [activeMenu, setActiveMenu] = useState("news");
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const handleUpdateProfile = async (e: any) => {
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
      const data = await res.json();
      alert(data.error);
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
    formData.append("content", text);

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
      const data = await res.json();
      alert(data.error);
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
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:relative w-64 bg-gray-800 text-white p-5 pt-10 min-h-screen transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0`}
      >
        <div className="flex justify-between items-center md:hidden">
          <h2 className="text-xl font-bold">Admin</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <IconX size={24} />
          </button>
        </div>
        <ul className="mt-4 space-y-2">
          <li
            className={`p-2 cursor-pointer rounded ${
              activeMenu === "news" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveMenu("news")}
          >
            Tambah Berita
          </li>
          <li
            className={`p-2 cursor-pointer rounded ${
              activeMenu === "profile" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveMenu("profile")}
          >
            Profil Kepsek
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="w-full mt-8 p-2 bg-red-600 hover:bg-red-400 rounded"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 h-screen overflow-y-auto">
        <button
          className="md:hidden mb-4 bg-blue-600 text-white p-2 rounded"
          onClick={() => setSidebarOpen(true)}
        >
          <IconMenu size={24} />
        </button>

        {activeMenu === "profile" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Profil Kepala Sekolah</h1>
            <form
              className="space-y-4 bg-white p-6 shadow rounded-lg"
              onSubmit={handleUpdateProfile}
            >
              <label className="text-sm font-bold">
                Upload foto Kepala Sekolah :
              </label>
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
                  className="w-full h-[15rem] object-cover mt-2 rounded"
                />
              )}
              <textarea
                placeholder="Teks sambutan kepala sekolah (max 100 kata)"
                value={textForProfile}
                onChange={(e) => setTextForProfile(e.target.value)}
                className="w-full p-2 h-40 border rounded"
                required
              />
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
          <div>
            <h1 className="text-2xl font-bold mb-4">Tambah Berita</h1>
            <form
              className="space-y-4 bg-white p-6 shadow rounded-lg"
              onSubmit={handleTambahBerita}
            >
              <label className="text-sm font-bold">Upload foto berita :</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border rounded"
                onChange={handleImageChangeBerita}
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-[15rem] object-cover mt-2"
                />
              )}
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
                className="w-full p-2 h-40 border rounded"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded"
              >
                Tambah Berita
              </button>
            </form>
            <div className="overflow-x-auto max-h-80 overflow-y-auto mt-4">
              <h2 className="text-lg font-bold">Daftar Berita</h2>
              <table className="w-full border-collapse border border-gray-300 mt-2 min-w-max">
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
                      <td className="border border-gray-300 p-2">
                        {item.judul}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {item.penulis}
                      </td>
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
          </div>
        )}
      </div>
    </div>
  );
}
