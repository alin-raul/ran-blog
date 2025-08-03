// components/Homepage/Pagination/Pagination.tsx

"use client"; // This component uses onClick, so it's a client component

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface PaginationProps {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}

const Pagination = ({ page, hasPrev, hasNext }: PaginationProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-between mt-12">
      <Button
        disabled={!hasPrev}
        onClick={() => router.push(`/?page=${page - 1}`)}
      >
        Previous
      </Button>
      <Button
        disabled={!hasNext}
        onClick={() => router.push(`/?page=${page + 1}`)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
