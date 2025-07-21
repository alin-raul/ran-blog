// app/about/page.js

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lightbulb, Code, PenSquare, ArrowRight } from "lucide-react";

// A reusable card component for highlighting core values
const ValueCard = ({ icon: Icon, title, children }) => (
  <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <div className="flex items-center gap-4 mb-3">
      <Icon className="h-8 w-8 text-primary" />
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <p className="text-muted-foreground">{children}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Section 1: Hero/Introduction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary">
            A Little About Me
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            I'm a passionate developer and writer, transforming complex ideas
            into elegant, user-friendly digital experiences. My journey is
            driven by curiosity and a love for building things that matter.
          </p>
          <Button asChild className="mt-8 text-lg" size="lg">
            <Link href="/contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        {/* Image */}
        <div className="relative w-full max-w-sm mx-auto lg:max-w-none h-80 lg:h-96">
          <Image
            src="/images/blog.webp" // Replace with a high-quality photo of yourself
            alt="A photo of the author, Raul"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Section 2: My Mission/Story */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h2 className="text-4xl font-bold mb-6">My Mission</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          My mission is to demystify technology and share the joy of creation. I
          believe that everyone has the potential to bring their ideas to life,
          and I'm here to provide the tools, tutorials, and inspiration to make
          that happen. Whether it's through a line of code or a well-crafted
          blog post, my goal is to empower and educate.
        </p>
      </div>

      {/* Section 3: Core Values */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard icon={Lightbulb} title="Creativity">
            I approach every project as a chance to innovate and think outside
            the box, finding unique solutions to challenging problems.
          </ValueCard>
          <ValueCard icon={Code} title="Craftsmanship">
            I'm committed to writing clean, efficient, and maintainable code,
            believing that quality is the cornerstone of any great product.
          </ValueCard>
          <ValueCard icon={PenSquare} title="Clarity">
            In both my writing and development, I strive for clarity and
            simplicity, making complex topics accessible to everyone.
          </ValueCard>
        </div>
      </div>

      {/* Section 4: Call to Action */}
      <div className="text-center p-12 bg-secondary rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start a Conversation?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore my latest articles, check out my projects, or reach out
          directly. I'm always open to discussing new ideas and collaborations.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/blog">Read The Blog</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
