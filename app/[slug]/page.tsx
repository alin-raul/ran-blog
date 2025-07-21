import Menu from "@/components/Homepage/Menu/Menu";
import Image from "next/image";
import React from "react";
import Comments from "@/components/Comments/Comments";

const Post = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      {/* TOP SECTION: TITLE & IMAGE */}
      <header className="flex flex-col lg:flex-row mb-8">
        {/* Left side: Title and Author */}
        <div className="flex flex-col lg:w-1/2 p-2">
          <div className="text-6xl font-bold my-auto">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          </div>
          <div className="flex gap-6 items-center mt-auto pt-4">
            <div className="relative w-16 h-16">
              <Image
                src="/images/blog.webp"
                alt="image"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-bold text-lg">John Doe</span> <br />
              <span className="text-sm opacity-60">20.07.2025</span>
            </div>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="relative w-full lg:w-1/2 h-96 mt-4 lg:mt-0">
          <Image
            src="/images/blog.webp"
            alt="image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </header>

      {/* BOTTOM SECTION: ARTICLE & MENU */}
      <main className="flex flex-col lg:flex-row gap-8">
        {/* Article Content */}
        <div className="lg:w-3/4">
          <div className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur
            hic maxime accusamus, voluptatum magni esse at reprehenderit omnis
            atque tempora dignissimos voluptates odit harum quas. Dignissimos
            sint voluptatibus dolorum.
            <h3 className="text-2xl font-bold mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            dolor dolore qui consequuntur optio iure sed distinctio cumque quasi
            dignissimos. Quo aut molestias magni nulla quas ad veritatis cumque
            doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In pariatur hic maxime accusamus, voluptatum magni esse at
            reprehenderit omnis atque tempora dignissimos voluptates odit harum
            quas. Dignissimos sint voluptatibus dolorum. <br /> Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Tempora dolor dolore
            qui consequuntur optio iure sed distinctio cumque quasi dignissimos.
            Quo aut molestias magni nulla quas ad veritatis cumque doloribus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur
            hic maxime accusamus, voluptatum magni esse at reprehenderit omnis
            atque tempora dignissimos voluptates odit harum quas. Dignissimos
            sint voluptatibus dolorum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Tempora dolor dolore qui consequuntur optio iure
            sed distinctio cumque quasi dignissimos. Quo aut molestias magni
            nulla quas ad veritatis cumque doloribus!
          </div>
          <div className="Post mt-4">
            <Comments />
          </div>
        </div>

        {/* Menu */}
        <aside className="lg:w-1/4">
          <Menu />
        </aside>
      </main>
    </div>
  );
};

export default Post;
