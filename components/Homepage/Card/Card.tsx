import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Card = () => {
  return (
    // Stacks vertically on mobile, row on medium screens and up
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Image container now takes full width on mobile */}
      <div className="relative w-full md:w-1/2 h-80 overflow-hidden my-2">
        <Image
          src="/images/blog.webp"
          alt="image"
          fill
          // Consistent rounded corners
          className="object-cover rounded-xl"
        />
      </div>
      {/* Text content takes full width on mobile */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="opacity-80 mb-2">
          <span>13.07.2025 - </span>
          <span className="text-red-400 font-semibold">CODING</span>
        </div>
        {/* Removed flex utils that are no longer needed */}
        <div>
          <h1 className="text-2xl font-bold my-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mb-4 opacity-60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quasi
            libero aspernatur voluptate a, repellat fuga fugiat, tempora
            accusamus quam iusto officiis numquam animi nulla adipisci aliquam
            nihil? Nihil, commodi?
          </p>
        </div>
        <Button className="w-fit hover:cursor-pointer mt-auto" variant={"link"}>
          Read more
        </Button>
      </div>
    </div>
  );
};

export default Card;
