import React from "react";
import Image from "next/image";
import { categories, categoryStyles } from "@/app/constants";

const MostPopular = () => {
  return (
    <div>
      {categories.map((category) => {
        const style = categoryStyles[category.color] || categoryStyles.default;

        return (
          <div className="my-8" key={category.name}>
            <div
              className={`py-1.5 px-3 rounded-3xl w-fit text-xs font-bold ${style}  pointer-events-none `}
            >
              {category.name}
            </div>
            <h1 className="text-xl font-sans my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </h1>
            <div className="flex opacity-80">
              <span className="font-sans">
                John Does <span className="opacity-60">- 13.07.2025</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Categories = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const style = categoryStyles[category.color] || categoryStyles.default;

        return (
          <div className="cursor-pointer" key={category.name}>
            <div
              className={`py-3 px-4 rounded-lg w-fit text-xs font-bold ${style}`}
            >
              {category.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const EditorsPick = () => {
  return (
    <div>
      {categories.map((category) => {
        const style = categoryStyles[category.color] || categoryStyles.default;

        return (
          <div className="my-8" key={category.name}>
            <div className="flex items-center gap-4">
              <div className="relative w-full h-full aspect-square max-w-24">
                <Image
                  src={"/images/blog.webp"}
                  alt="blog-image"
                  fill
                  className="object-cover rounded-full border-4"
                />
              </div>
              <div className="">
                <div
                  className={`py-1.5 px-3 rounded-3xl w-fit text-xs font-bold ${style}  pointer-events-none `}
                >
                  {category.name}
                </div>
                <h1 className="text-xl font-sans my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </h1>
                <div className="flex opacity-80">
                  <span className="font-sans">
                    John Does <span className="opacity-60">- 13.07.2025</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Menu = () => {
  return (
    <div className="flex-2">
      <div className="mt-10 xl:mt-0">
        <h1 className="text-lg opacity-60">What's hot</h1>
        <h1 className="text-4xl font-bold mt-2 mb-10">Most Popular</h1>
        <MostPopular />
      </div>

      <div className="mt-20">
        <h1 className="text-lg opacity-60">Discover by topic</h1>
        <h1 className="text-4xl font-bold mt-2 mb-6">Categories</h1>
        <Categories />
      </div>

      <div className="mt-20">
        <h1 className="text-lg opacity-60">Chosen by the editor</h1>
        <h1 className="text-4xl font-bold mt-2 mb-6">Editors Pick</h1>
        <EditorsPick />
      </div>
    </div>
  );
};

export default Menu;
