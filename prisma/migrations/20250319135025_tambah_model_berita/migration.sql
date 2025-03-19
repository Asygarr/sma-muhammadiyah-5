-- CreateTable
CREATE TABLE "Berita" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "penulis" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Berita_pkey" PRIMARY KEY ("id")
);
