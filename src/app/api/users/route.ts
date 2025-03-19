import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

// GET: Ambil semua user
export async function GET() {
  try {
    const users = await prisma.admin.findMany({
      select: { id: true, username: true }, // Jangan tampilkan password
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data" },
      { status: 500 }
    );
  }
}

// POST: Tambah user baru dengan hash password
// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { username, password } = body;

//     // cek user di db
//     const user = await prisma.admin.findUnique({ where: { username } });
//     if (user) {
//       return NextResponse.json({ error: "User sudah ada" }, { status: 400 });
//     }

//     if (!username || !password) {
//       return NextResponse.json(
//         { error: "Username dan password wajib diisi" },
//         { status: 400 }
//       );
//     }

//     // Hash password sebelum disimpan
//     const hashedPassword = await bcrypt.hash(password, 10);

//     await prisma.admin.create({
//       data: { username, password: hashedPassword },
//     });

//     return NextResponse.json(
//       { message: "User berhasil ditambahkan" },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Gagal menambahkan user" },
//       { status: 500 }
//     );
//   }
// }
