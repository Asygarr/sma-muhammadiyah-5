import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import path from "path";
import { writeFile, unlink } from "fs/promises";
import fs from "fs";
import { verifyToken } from "@/lib/auth";
import { NextRequest } from "next/server";

const uploadDir = path.join(process.cwd(), "public/images");

export async function GET(req: NextRequest) {
  try {
    const sambutan = await prisma.sambutan.findFirst();
    return NextResponse.json({ sambutan });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}

// export async function POST(req: NextRequest) {
//   const user = verifyToken(req);
//   if (user instanceof NextResponse) return user;

//   try {
//     const formData = await req.formData();
//     const file = formData.get("image") as File;
//     const text = formData.get("text") as string;

//     if (!file || !text) {
//       return NextResponse.json(
//         { error: "Gambar dan teks wajib diisi" },
//         { status: 400 }
//       );
//     }

//     if (text.split(" ").length > 100) {
//       return NextResponse.json(
//         { error: "Teks tidak boleh lebih dari 80 kata" },
//         { status: 400 }
//       );
//     }

//     const fileBuffer = Buffer.from(await file.arrayBuffer());
//     const fileName = `${Date.now()}_${file.name}`;
//     const filePath = path.join(uploadDir, fileName);
//     await writeFile(filePath, fileBuffer);

//     const sambutan = await prisma.sambutan.create({
//       data: {
//         imageUrl: `/images/${fileName}`,
//         text: text,
//       },
//     });

//     return NextResponse.json(
//       { message: "Data berhasil disimpan", sambutan },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Terjadi kesalahan server" },
//       { status: 500 }
//     );
//   }
// }

export async function PUT(req: NextRequest) {
  const user = await verifyToken(req);
  if (user === null) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;
    const text = formData.get("text") as string;

    if (!text) {
      return NextResponse.json({ error: "Teks wajib diisi" }, { status: 400 });
    }

    if (text.split(" ").length > 90) {
      return NextResponse.json(
        { error: "Teks tidak boleh lebih dari 80 kata" },
        { status: 400 }
      );
    }

    const sambutan = await prisma.sambutan.findFirst();
    if (!sambutan) {
      return NextResponse.json(
        { error: "Data tidak ditemukan" },
        { status: 404 }
      );
    }

    let newImageUrl = sambutan.imageUrl;

    if (file) {
      const oldImagePath = path.join(
        process.cwd(),
        "public",
        sambutan.imageUrl
      );
      if (fs.existsSync(oldImagePath)) {
        await unlink(oldImagePath);
      }

      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const fileName = `${Date.now()}_${file.name}`;
      const filePath = path.join(uploadDir, fileName);
      await writeFile(filePath, fileBuffer);

      newImageUrl = `/images/${fileName}`;
    }

    const updatedSambutan = await prisma.sambutan.update({
      where: { id: sambutan.id },
      data: {
        imageUrl: newImageUrl,
        text: text,
      },
    });

    return NextResponse.json({
      message: "Data berhasil diperbarui",
      updatedSambutan,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
