import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Featured = () => {
  return (
    // Reduced top margin for better mobile view
    <div className="mt-10 lg:mt-20">
      {/* Responsive text size */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <b>Hey, Raul dev here!</b> Discover my stories and creative ideas.
      </h1>
      {/* Stacks vertically by default, row on large screens */}
      <div className="flex flex-col lg:flex-row items-center mt-10 gap-8">
        {/* Removed fixed width, flex handles it */}
        <div className="relative w-full h-80 lg:h-96">
          <Image
            src="/images/blog.webp"
            alt="image"
            fill
            // Consistent rounded corners
            className="object-cover rounded-xl"
          />
        </div>
        {/* Centered text and items for a cleaner look */}
        <div className="flex flex-col justify-center lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mb-6 opacity-60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quasi
            libero aspernatur voluptate a, repellat fuga fugiat, tempora
            accusamus quam iusto officiis numquam animi nulla adipisci aliquam
            nihil? Nihil, commodi?
          </p>
          <Button className="w-fit hover:cursor-pointer">Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
