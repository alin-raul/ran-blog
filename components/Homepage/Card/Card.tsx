import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Card = () => {
  return (
    <div className="flex py-4 justify-center mt-10 gap-8">
      <div className="relative w-1/2 h-96 overflow-hidden">
        <Image
          src="/images/blog.webp"
          alt="image"
          fill
          className="object-cover rounded-4xl"
        />
      </div>
      <div className="w-1/2 flex flex-col ">
        <div className="flex opacity-80">
          <span className="justify-start ">
            13.07.2025 -{" "}
            <span className="text-red-400 font-semibold">CODING</span>
          </span>
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-xl font-bold my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mb-4 opacity-60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quasi
            libero aspernatur voluptate a, repellat fuga fugiat, tempora
            accusamus quam iusto officiis numquam animi nulla adipisci aliquam
            nihil? Nihil, commodi?
          </p>
        </div>

        <Button className="w-fit hover:cursor-pointer" variant={"link"}>
          Read more
        </Button>
      </div>
    </div>
  );
};

export default Card;
