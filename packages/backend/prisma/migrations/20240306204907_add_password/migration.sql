-- AlterTable
ALTER TABLE "Auth" ADD COLUMN     "password" TEXT;

-- AlterTable
ALTER TABLE "Vacancies" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "keySkills" JSONB NOT NULL,
ADD COLUMN     "passMessage" TEXT;
