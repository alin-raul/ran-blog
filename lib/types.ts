import { Prisma } from "@/app/generated/prisma";

// Define the query validator once. This is our single source of truth.
const postWithCategory = Prisma.validator<Prisma.PostDefaultArgs>()({
  include: { category: true },
});

// Create and export the type based on that validator.
export type PostWithCategory = Prisma.PostGetPayload<typeof postWithCategory>;
