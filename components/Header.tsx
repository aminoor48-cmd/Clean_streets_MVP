"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/map", label: "Map" },
  { href: "/report/new", label: "Report an issue" },
  { href: "/profile", label: "Profile" },
  { href: "/login", label: "Login" },
] as const;

function linkClassName(pathname: string, href: string) {
  const isActive = pathname === href;
  return isActive
    ? "rounded-lg bg-teal-50 px-3 py-2 font-medium text-teal-800"
    : "rounded-lg px-3 py-2 text-stone-700 hover:bg-stone-100 hover:text-stone-900";
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-teal-800"
          onClick={closeMenu}
        >
          CleanStreet
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClassName(pathname, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-stone-700 hover:bg-stone-100 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? (
            <span aria-hidden="true" className="block text-xl leading-none">
              ×
            </span>
          ) : (
            <span aria-hidden="true" className="block space-y-1.5">
              <span className="block h-0.5 w-5 bg-stone-800" />
              <span className="block h-0.5 w-5 bg-stone-800" />
              <span className="block h-0.5 w-5 bg-stone-800" />
            </span>
          )}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-stone-200 px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClassName(pathname, link.href)}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
