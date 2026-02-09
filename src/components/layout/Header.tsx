"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-neutral-900 text-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <span className="font-bold text-lg">Purwita</span>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#faq">FAQ</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500 to-purple-500"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}