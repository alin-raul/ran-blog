// components/Footer/Footer.tsx

import React from "react";
import Link from "next/link";
// 1. Import the constants from your central file
import { FOOTER_COLUMNS, FOOTER_DESCRIPTION } from "@/app/constants";

const Footer = () => {
  // 2. A reusable class string for all links to keep styling consistent
  const linkClasses =
    "text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors";

  return (
    <footer className="border-t">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Section 1: Brand and Description (now using constants) */}
          <div className="lg:w-1/3 flex-2">
            <div className="flex items-center mb-4">
              <h1 className="text-xl">
                <span className="font-black">RAN</span>|Blog
              </h1>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {FOOTER_DESCRIPTION}
            </p>
          </div>

          {/* Section 2: Link columns (now data-driven) */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* 3. Map over the FOOTER_COLUMNS array to generate each column */}
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {/* 4. Map over the links within each column */}
                  {column.links.map((link) => (
                    <li key={link.name}>
                      {/* 5. Conditionally render an `<a>` or `<Link>` tag */}
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClasses}
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link href={link.href} className={linkClasses}>
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-12 pt-8">
          <p className="text-sm  text-neutral-500">
            © {new Date().getFullYear()} RAN's Blog. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
