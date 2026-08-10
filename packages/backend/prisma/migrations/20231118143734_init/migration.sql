-- CreateEnum
CREATE TYPE "ROLES" AS ENUM ('ADMIN', 'MANAGER', 'USER');

-- CreateEnum
CREATE TYPE "SignUpProvider" AS ENUM ('GOOGLE', 'LOCAL');

-- CreateEnum
CREATE TYPE "LANGRANK" AS ENUM ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "profileUri" TEXT,
    "role" "ROLES" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auth" (
    "id" SERIAL NOT NULL,
    "refreshToken" TEXT,
    "signUpProvider" "SignUpProvider" NOT NULL,
    "providerRefreshToken" TEXT,
    "userId" INTEGER,

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Languages" (
    "id" SERIAL NOT NULL,
    "rank" "LANGRANK" NOT NULL,
    "profileId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profiles" (
    "id" INTEGER NOT NULL,
    "specialty" VARCHAR DEFAULT 'default',
    "education" VARCHAR DEFAULT 'default',
    "domains" VARCHAR[],
    "biography" TEXT DEFAULT 'default',

    CONSTRAINT "Profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" TEXT NOT NULL,
    "position" VARCHAR NOT NULL,
    "start" DATE NOT NULL,
    "end" DATE NOT NULL,
    "respAndAchs" TEXT[],
    "userId" INTEGER NOT NULL,
    "actual" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cv" (
    "key" TEXT NOT NULL,
    "domains" TEXT[],
    "title" VARCHAR NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cv_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "ProjectsTechnologies" (
    "projectId" INTEGER NOT NULL,
    "technologyId" SMALLINT NOT NULL,

    CONSTRAINT "ProjectsTechnologies_pkey" PRIMARY KEY ("projectId","technologyId")
);

-- CreateTable
CREATE TABLE "Technologies" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "type" VARCHAR NOT NULL,

    CONSTRAINT "Technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Techtypes" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "Techtypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Langnames" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "Langnames_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Auth_userId_key" ON "Auth"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Techtypes_name_key" ON "Techtypes"("name");

-- AddForeignKey
ALTER TABLE "Auth" ADD CONSTRAINT "Auth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Languages" ADD CONSTRAINT "Languages_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Langnames"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Languages" ADD CONSTRAINT "Languages_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Profiles" ADD CONSTRAINT "Profiles_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Cv" ADD CONSTRAINT "Cv_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProjectsTechnologies" ADD CONSTRAINT "ProjectsTechnologies_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProjectsTechnologies" ADD CONSTRAINT "ProjectsTechnologies_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technologies"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Technologies" ADD CONSTRAINT "Technologies_type_fkey" FOREIGN KEY ("type") REFERENCES "Techtypes"("name") ON DELETE CASCADE ON UPDATE CASCADE;
