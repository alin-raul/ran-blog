import React from "react";
import Link from "next/link";
import Image from "next/image";
import { categoryStyles } from "@/app/constants";
import prisma from "@/lib/prisma";

interface Category {
  id: string;
  slug: string;
  name: string;
  icon: string | null;
  color: string | null;
}

const CategoryList = async () => {
  const data: Category[] = await prisma.category.findMany();

  return (
    <div className="my-16">
      <h1 className="text-4xl font-bold mb-10">Popular Categories</h1>
      <div className="flex flex-wrap gap-4">
        {data?.map((item) => {
          type CategoryColor = keyof typeof categoryStyles;

          const colorKey = (item.color || "default") as CategoryColor;
          const style = categoryStyles[colorKey] || categoryStyles.default;

          return (
            <Link
              href={`/blog?cat=${item.slug}`}
              key={item.id}
              className={`flex items-center gap-3 p-4 rounded-lg transition-colors duration-200 ${style}`}
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={`${item.name} category icon`}
                  width={20}
                  height={20}
                  className="dark:invert opacity-80"
                />
              )}
              <span className="font-medium text-sm">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
