"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLink = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      pathname === path
        ? "bg-gray-100/60 text-black shadow-md border border-gray-300/60"
        : "text-gray-600 hover:text-black hover:bg-gray-100/60 hover:shadow-md hover:border hover:border-gray-300/60"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-gray-200/70 border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          RenderLab
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-2">
          <Link href="/" className={navLink("/")}>
            Home
          </Link>
          <Link href="/articles" className={navLink("/articles")}>
            Articles
          </Link>
          <Link href="/about" className={navLink("/about")}>
            About
          </Link>
        </nav>

      </div>
    </header>
  );
}