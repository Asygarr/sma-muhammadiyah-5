"use client";

import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function FooterSection() {
  return (
    <footer className="bg-blue-700 text-white py-6 px-6 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Bagian Kiri */}
        <div className="md:w-[30rem] pt-2 text-center md:text-left">
          <h3 className="text-xl font-bold">SMAM5</h3>
          <p className="text-sm mt-2">
            Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
            berprestasi di segala bidang yang dapat bersaing di dunia
            internasional.
          </p>
        </div>

        {/* Bagian Kanan (Social Media & Credit) */}
        <div className="md:w-[28rem] flex flex-col items-center md:items-end">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-4">
            <IconBrandFacebook size={28} />
            <IconBrandTwitter size={28} />
            <IconBrandInstagram size={28} />
            <IconBrandYoutube size={28} />
          </div>

          {/* Credit */}
          <p className="text-sm mt-4 text-center md:text-end">
            Dibuat Oleh{" "}
            <span className="font-semibold">
              Mahasiswa KKP+ Fakultas Teknik Universitas Muhammadiyah Makassar
            </span>{" "}
            &copy;2025
          </p>
        </div>
      </div>
    </footer>
  );
}
