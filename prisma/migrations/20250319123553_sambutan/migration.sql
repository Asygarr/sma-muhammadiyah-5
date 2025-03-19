-- CreateTable
CREATE TABLE "Sambutan" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sambutan_pkey" PRIMARY KEY ("id")
);
