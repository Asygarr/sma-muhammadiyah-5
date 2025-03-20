import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { writeFile, unlink } from "fs/promises";
import path from "path";
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
  if (user === null) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const judul = formData.get("judul")?.toString();
    const image = formData.get("image") as File;
    const penulis = formData.get("penulis")?.toString();
    const text = formData.get("text")?.toString();

    if (!text || !penulis || !image || !judul) {
      return NextResponse.json(
        { message: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    const beritaCount = await prisma.berita.count();
    if (beritaCount >= 20) {
      return NextResponse.json(
        { message: "Maksimal berita yang bisa ditampilkan hanya 20" },
        { status: 400 }
      );
    }

    // Simpan gambar di public/uploads
    const filePath = `/uploads/${Date.now()}-${image.name}`;
    const fullPath = path.join(process.cwd(), "public", filePath);
    await writeFile(fullPath, Buffer.from(await image.arrayBuffer()));

    // Simpan data berita ke database
    const berita = await prisma.berita.create({
      data: { judul: judul, image: filePath, penulis: penulis, text: text },
    });

    return NextResponse.json(berita, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Gagal menyimpan berita" },
      { status: 500 }
    );
  }
}

// delete berita
export async function DELETE(req: NextRequest) {
  const user = await verifyToken(req);
  if (user === null) {
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

    // hapus foto di local storage
    const fullPath = path.join(process.cwd(), "public", berita.image);
    try {
      await unlink(fullPath);
    } catch (error) {
      console.error("Error deleting file:", error);
    }

    await prisma.berita.delete({ where: { id } });
    return NextResponse.json({ message: "Berita berhasil dihapus" });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal menghapus berita" },
      { status: 500 }
    );
  }
}
