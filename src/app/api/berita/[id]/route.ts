import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { message: "ID berita tidak ditemukan" },
        { status: 400 }
      );
    }

    const berita = await prisma.berita.findUnique({
      where: { id },
    });

    if (!berita) {
      return NextResponse.json(
        { message: "Berita tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(berita, { status: 200 });
  } catch (error) {
    console.error("Error fetching berita:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan pada server" },
      { status: 500 }
    );
  }
}
