// lib/prisma.ts
import { PrismaClient } from "@/app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

// 1. A function that creates the extended client.
const prismaClientSingleton = () => {
  return new PrismaClient().$extends(withAccelerate());
};

// 2. Infer the type of the extended client.
type PrismaClientExtended = ReturnType<typeof prismaClientSingleton>;

// 3. Define the global variable with the correct, inferred type.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientExtended | undefined;
};

// 4. Use the singleton function to create or retrieve the client instance.
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Export the client as the default export.
export default prisma;

// 5. Save the instance to the global variable in development.
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
