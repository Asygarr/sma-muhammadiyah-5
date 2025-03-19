import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import prisma from "@/lib/prisma";

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET);

// export async function POST(req: NextRequest) {
//   try {
//     const { username, password } = await req.json();

//     // Cek apakah username sudah ada
//     const existingUser = await prisma.admin.findUnique({ where: { username } });

//     if (existingUser) {
//       return NextResponse.json(
//         { error: "Username sudah digunakan" },
//         { status: 400 }
//       );
//     }

//     // Hash password sebelum disimpan
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Simpan user ke database
//     const newUser = await prisma.admin.create({
//       data: { username, password: hashedPassword },
//     });

//     return NextResponse.json(
//       { message: "User berhasil didaftarkan", user: newUser },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Terjadi kesalahan saat registrasi" },
//       { status: 500 }
//     );
//   }
// }

export async function PUT(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    // Cari user berdasarkan username
    const user = await prisma.admin.findUnique({ where: { username } });

    if (!user) {
      return NextResponse.json(
        { error: "User tidak ditemukan" },
        { status: 404 }
      );
    }

    // Bandingkan password dengan hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Password salah" }, { status: 401 });
    }

    // Generate JWT Token dengan jose
    const token = await new SignJWT({ id: user.id, username: user.username })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("3d")
      .sign(SECRET_KEY);

    return NextResponse.json(
      { message: "Login berhasil", token },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan saat login" },
      { status: 500 }
    );
  }
}
