"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "../Buttons/ModeToggle/ModeToggle";

const Links = [
  { name: "Homepage", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  // State to track scroll position and visibility
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // The function that handles the scroll logic
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Show navbar if scrolling up or at the very top of the page
    if (currentScrollY < lastScrollY || currentScrollY < 10) {
      setIsVisible(true);
    } else {
      // Hide navbar if scrolling down
      setIsVisible(false);
    }

    // Remember the new scroll position for the next comparison
    setLastScrollY(currentScrollY);
  };

  // Add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Re-run this effect when lastScrollY changes

  return (
    // Main nav container: sticky, animated, and themed
    <nav
      className={`
        sticky top-0 z-50 w-full bg-background/70 backdrop-blur-sm
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between p-4 ">
          <Link href="/">
            <h1 className="text-lg">
              <span className="font-black">RAN</span>|Blog
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        {/* Bottom section: Navigation links */}
        <div className="flex py-2 px-4 gap-6">
          {Links.map((link) => (
            <Link
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
