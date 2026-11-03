/*
  Warnings:

  - You are about to drop the column `profile` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Vet` table. All the data in the column will be lost.
  - You are about to drop the `Animal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tutor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'RECEP', 'VET');

-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'PENDING_INVITE', 'DEACTIVATED');

-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_tutorId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profile",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "inviteSentAt" TIMESTAMP(3),
ADD COLUMN     "lastAccessAt" TIMESTAMP(3),
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'RECEP',
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'PENDING_INVITE',
ALTER COLUMN "password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Vet" DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "Animal";

-- DropTable
DROP TABLE "Tutor";

-- DropEnum
DROP TYPE "profile";

-- DropEnum
DROP TYPE "sex";

-- CreateTable
CREATE TABLE "PetOwner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "PetOwner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "sex" "Sex" NOT NULL,
    "birthDate" DATE NOT NULL,
    "weight" DOUBLE PRECISION,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "petOwnerId" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PetOwner_email_key" ON "PetOwner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PetOwner_cpf_key" ON "PetOwner"("cpf");

-- CreateIndex
CREATE INDEX "PetOwner_deletedAt_idx" ON "PetOwner"("deletedAt");

-- CreateIndex
CREATE INDEX "Pet_deletedAt_idx" ON "Pet"("deletedAt");

-- CreateIndex
CREATE INDEX "Vet_deletedAt_idx" ON "Vet"("deletedAt");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_petOwnerId_fkey" FOREIGN KEY ("petOwnerId") REFERENCES "PetOwner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
