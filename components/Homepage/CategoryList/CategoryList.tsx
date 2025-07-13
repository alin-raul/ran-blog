import React from "react";
import Link from "next/link";
import Image from "next/image";
import { categories, categoryStyles } from "@/app/constants";

const CategoryList = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold my-10">Popular Categories</h1>
      <div className="">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => {
            const style =
              categoryStyles[category.color] || categoryStyles.default;

            return (
              <Link
                href={`/blog?cat=${category.slug}`}
                key={category.slug}
                className={`flex items-center gap-3 p-4 rounded-lg transition-colors duration-200 ${style}`}
              >
                <Image
                  src={category.icon}
                  alt={`${category.name} category icon`}
                  width={20}
                  height={20}
                  className="dark:invert opacity-80"
                />
                <span className="font-medium text-sm">{category.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
