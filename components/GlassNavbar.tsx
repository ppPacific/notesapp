"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Landing", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function GlassNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4">
      {/* Main Glass Container */}
      <nav
        aria-label="Main Navigation"
        className="w-full max-w-2xl rounded-full border border-white/25 bg-white/15 px-4 py-2.5 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] backdrop-blur-md transition-all"
      >
        <div className="flex items-center justify-between md:justify-center">
          {/* Mobile Brand Label */}
          <span className="pl-2 text-sm font-semibold tracking-wide text-white md:hidden">
            Menu
          </span>

          {/* Desktop Oval Buttons */}
          <ul className="hidden items-center gap-2 sm:gap-3 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`inline-block rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border border-white/50 bg-white/35 text-white shadow-sm"
                        : "border border-white/15 bg-white/10 text-white/85 hover:border-white/40 hover:bg-white/25 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/25 md:hidden"
          >
            {isOpen ? (
              /* Close Icon */
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Glass Panel */}
      {isOpen && (
        <div className="mt-2 w-full max-w-2xl rounded-3xl border border-white/25 bg-white/15 p-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] backdrop-blur-md md:hidden">
          <ul className="flex flex-col items-center gap-2.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.name} className="w-full text-center">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                      isActive
                        ? "border border-white/50 bg-white/35 text-white shadow-sm"
                        : "border border-white/15 bg-white/10 text-white/85 hover:bg-white/25 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
