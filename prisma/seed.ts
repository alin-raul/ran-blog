import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding categories...");

  const categories = [
    {
      name: "Tech & Code",
      slug: "tech-and-code",
      icon: "/icons/code.svg",
      color: "sky",
    },
    {
      name: "Career Growth",
      slug: "career-growth",
      icon: "/icons/briefcase.svg",
      color: "emerald",
    },
    {
      name: "Life & Musings",
      slug: "life-and-musings",
      icon: "/icons/coffee.svg",
      color: "amber",
    },
    {
      name: "Adventures",
      slug: "adventures",
      icon: "/icons/globe.svg",
      color: "rose",
    },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
