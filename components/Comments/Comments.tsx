// components/Post/Comments.js
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// This is a single comment component for displaying one comment
const Comment = ({ user, date, text }) => (
  <div className="flex gap-4 mt-6">
    <div className="relative w-12 h-12 flex-shrink-0">
      <Image
        src="/images/blog.webp" // Placeholder, should be user.image
        alt={`${user}'s profile picture`}
        fill
        className="object-cover rounded-full"
      />
    </div>
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <span className="font-bold">{user}</span>
        <span className="text-sm opacity-60">{date}</span>
      </div>
      <p className="mt-1">{text}</p>
    </div>
  </div>
);

// This is the main Comments component
const Comments = () => {
  // Mock data for display purposes
  const comments = [
    {
      user: "Jane Smith",
      date: "21.07.2025",
      text: "This is a fantastic article! Really enjoyed the read.",
    },
    {
      user: "Mark Johnson",
      date: "21.07.2025",
      text: "Great insights. I learned a lot from this post. Thanks for sharing!",
    },
  ];

  return (
    <div className="mt-16">
      <h1 className="text-4xl font-bold mb-8">Comments</h1>

      {/* Form for writing a new comment */}
      <div className="flex items-start gap-4 mb-12">
        <div className="relative w-12 h-12 flex-shrink-0">
          <Image
            src="/images/blog.webp" // Placeholder for logged-in user's image
            alt="Your profile picture"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="w-full">
          <Textarea placeholder="Write a comment..." className="mb-2" />
          <Button>Post Comment</Button>
        </div>
      </div>

      {/* List of existing comments */}
      <div className="flex flex-col gap-8">
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
