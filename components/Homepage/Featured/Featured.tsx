import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Featured = () => {
  return (
    <div>
      <h1 className="text-7xl mt-40">
        <b>Hey, Raul dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="lg:flex py-4 justify-center mt-10 gap-8">
        <div className="relative lg:w-1/2 h-96 overflow-hidden">
          <Image
            src="/images/blog.webp"
            alt="image"
            fill
            className="object-cover rounded-4xl"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mb-4 opacity-60">
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
