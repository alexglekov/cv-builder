-- CreateTable
CREATE TABLE "Vacancies" (
    "id" TEXT NOT NULL,
    "vacancyId" TEXT,
    "name" TEXT,
    "salaryFrom" INTEGER,
    "salaryTo" INTEGER,
    "currency" TEXT,
    "typeId" TEXT,
    "typeName" TEXT,
    "addressCity" TEXT,
    "addressStreet" TEXT,
    "addressRaw" TEXT,
    "publishedAt" TEXT,
    "createdAt" TEXT,
    "archived" BOOLEAN,
    "vacancyUrl" TEXT,
    "employerName" TEXT,
    "employerId" TEXT,
    "employerUrl" TEXT,
    "employerLogoUrl" TEXT,
    "requirements" TEXT,
    "responsibilities" TEXT,
    "scheduleId" TEXT,
    "scheduleName" TEXT,
    "professionalRoleId" TEXT,
    "professionalRoleName" TEXT,
    "experienceId" TEXT,
    "experienceName" TEXT,
    "employmentId" TEXT,
    "employmentName" TEXT,
    "passLevel" TEXT,
    "profileId" INTEGER NOT NULL,
    "advice" TEXT,

    CONSTRAINT "Vacancies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vacancies" ADD CONSTRAINT "Vacancies_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
