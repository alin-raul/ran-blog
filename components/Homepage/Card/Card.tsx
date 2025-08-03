// components/Homepage/Card/Card.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PostWithCategory } from "@/lib/types";

const Card = ({ post }: { post: PostWithCategory }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Image Container */}
      {post.featuredImage && (
        <div className="relative w-full md:w-1/2 h-80 overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}

      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="opacity-80 mb-2 flex items-center gap-4">
          {/* Format the date for display */}
          <span className="text-sm">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
          <span className="text-red-400 font-semibold text-sm">
            {post.category.name.toUpperCase()}
          </span>
        </div>

        <h1 className="text-2xl font-bold my-2">{post.title}</h1>

        {/* Show a snippet of the content */}
        <p
          className="mb-4 opacity-60"
          dangerouslySetInnerHTML={{
            __html: post.content.substring(0, 150) + "...",
          }}
        />

        <Button
          asChild
          className="w-fit hover:cursor-pointer mt-auto"
          variant="link"
        >
          <Link href={`/posts/${post.slug}`}>Read more</Link>
        </Button>
      </div>
    </div>
  );
};

export default Card;
