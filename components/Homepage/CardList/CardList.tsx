// components/Homepage/CardList/CardList.tsx

import React from "react";
import Card from "../Card/Card";
import prisma from "@/lib/prisma";
import Pagination from "../Card/Pagination/Pagination";
import { PostWithCategory } from "@/lib/types"; // Your shared type

const POST_PER_PAGE = 4;

const CardList = async ({ page }: { page: number }) => {
  const [posts, count] = (await Promise.all([
    prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: (page - 1) * POST_PER_PAGE,
      orderBy: { createdAt: "desc" },
      include: {
        category: true,
      },
    }),
    prisma.post.count(),
  ])) as [PostWithCategory[], number];

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * page < count;

  return (
    <div>
      <h1 className="text-4xl font-bold my-10">Recent Posts</h1>
      <div className="flex flex-col gap-12">
        {posts.map((post) => (
          <Card post={post} key={post.id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
