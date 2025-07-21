"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, PenSquare } from "lucide-react";
import { RichTextEditor } from "@/components/RichTextEditor/RichTextEditor";
import { categories } from "@/app/constants";

// Assuming `categories` has a proper type, e.g.:
// interface Category { name: string; slug: string; ... }
// const categories: Category[] = [ ... ];

const WritePage: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);

  const handlePublish = () => {
    const postData = { title, content, category, featuredImage };
    console.log("Publishing Post:", postData);
    // Add your API call to save the post data
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFeaturedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 lg:p-8">
      {/* ... header and other inputs are the same ... */}
      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary flex items-center gap-3">
          <PenSquare className="h-10 w-10" />
          Create New Post
        </h1>
        <p className="text-muted-foreground mt-2">
          Fill in the details below to create and publish your new blog post.
        </p>
      </header>

      <div className="space-y-8">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="text-lg font-semibold mb-2 block">
            Post Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., How to Build a Blog with Next.js"
            className="text-2xl h-14 p-4"
          />
        </div>

        {/* Featured Image and Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <label className="text-lg font-semibold mb-2 block">
              Featured Image
            </label>
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-secondary transition-colors"
            >
              {featuredImage ? (
                <img
                  src={featuredImage}
                  alt="Preview"
                  className="h-full w-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                </div>
              )}
              <input
                id="image-upload"
                type="file"
                className="hidden"
                onChange={handleImageUpload}
                accept="image/*"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="category"
              className="text-lg font-semibold mb-2 block"
            >
              Category
            </label>
            <Select onValueChange={setCategory} value={category}>
              <SelectTrigger id="category" className="h-12">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Rich Text Editor */}
        <div>
          <label className="text-lg font-semibold mb-2 block">
            Post Content
          </label>
          <RichTextEditor
            content={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
      </div>
      {/* ... footer is the same ... */}
      <footer className="mt-8 text-right">
        <Button onClick={handlePublish} size="lg" className="text-lg">
          Publish Post
        </Button>
      </footer>
    </div>
  );
};

export default WritePage;
