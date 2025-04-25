import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { put, del } from "@vercel/blob";
import { verifyToken } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const berita = await prisma.berita.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(berita, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal mengambil data berita" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const user = await verifyToken(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;
    const title = formData.get("judul") as string;
    const penulis = formData.get("penulis") as string;
    const content = formData.get("content") as string;

    if (!title || !content || !penulis || !file) {
      return NextResponse.json(
        { error: "Judul, konten, penulis wajib diisi dan upload gambar anda!" },
        { status: 400 }
      );
    }

    if (file && Array.isArray(file)) {
      return NextResponse.json(
        { error: "Hanya satu gambar yang diizinkan" },
        { status: 400 }
      );
    }

    if (title.split(" ").length > 25) {
      return NextResponse.json(
        { error: "Judul tidak boleh lebih dari 25 kata" },
        { status: 400 }
      );
    }

    const totalBerita = await prisma.berita.count();
    if (totalBerita >= 12) {
      return NextResponse.json(
        {
          error:
            "Maksimal berita yang dapat ditambahkan adalah 20, tolong hapus berita yang lama",
        },
        { status: 400 }
      );
    }

    let imageUrl = "";

    if (file) {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const fileName = `articles/${Date.now()}_${file.name}`;

      const { url } = await put(fileName, fileBuffer, { access: "public" });
      imageUrl = url;
    }

    const newBerita = await prisma.berita.create({
      data: {
        judul: title,
        text: content,
        image: imageUrl,
        penulis: penulis,
      },
    });

    return NextResponse.json({
      message: "Berita berhasil ditambahkan",
      berita: newBerita,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Gagal menambahkan berita" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const user = await verifyToken(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await req.json();
    const berita = await prisma.berita.findUnique({ where: { id } });

    if (!berita) {
      return NextResponse.json(
        { message: "Berita tidak ditemukan" },
        { status: 404 }
      );
    }

    if (berita.image.startsWith("https://")) {
      try {
        await del(berita.image);
      } catch (error) {
        console.warn("Gagal menghapus gambar dari Vercel Blob:", error);
      }
    }

    await prisma.berita.delete({ where: { id } });

    return NextResponse.json({ message: "Berita berhasil dihapus" });
  } catch (error) {
    console.error("Error menghapus berita:", error);
    return NextResponse.json(
      { message: "Gagal menghapus berita" },
      { status: 500 }
    );
  }
}
