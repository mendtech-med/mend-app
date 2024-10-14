CREATE TYPE "AudienceLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

CREATE TYPE "AudienceTarget" AS ENUM ('DEVELOPER', 'DESIGNER', 'MARKETER', 'PRODUCT_MANAGER', 'SALES', 'CUSTOMER_SUPPORT', 'HR', 'FINANCE', 'LEGAL', 'OTHER');

CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "emails" TEXT[],
    "phoneNumbers" TEXT[],
    "firstName" TEXT,
    "lastName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Audience" (
    "id" TEXT NOT NULL,
    "target" "AudienceTarget" NOT NULL,
    "level" "AudienceLevel" NOT NULL,
    "brandVoiceId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Audience_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "AudienceBrandVoice" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tone" TEXT[],
    "personality" TEXT[],
    "languageStyle" TEXT[],
    "pointOfView" TEXT[],
    "consistency" TEXT[],
    "clarity" TEXT[],
    "distinctiveness" TEXT[],
    "audienceFocused" TEXT[],
    "accessibility" TEXT[],
    "adaptability" TEXT[],
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AudienceBrandVoice_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Refer" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Refer_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "user_clerkId_key" ON "user"("clerkId");

CREATE UNIQUE INDEX "Audience_projectId_key" ON "Audience"("projectId");

ALTER TABLE "Project" ADD CONSTRAINT "Project_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Audience" ADD CONSTRAINT "Audience_brandVoiceId_fkey" FOREIGN KEY ("brandVoiceId") REFERENCES "AudienceBrandVoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Audience" ADD CONSTRAINT "Audience_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "AudienceBrandVoice" ADD CONSTRAINT "AudienceBrandVoice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Refer" ADD CONSTRAINT "Refer_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
