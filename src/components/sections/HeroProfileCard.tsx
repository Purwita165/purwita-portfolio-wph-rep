"use client";

import HeroProfileCard from "./HeroProfileCard";

export default function HeroSection() {
  return (
    <section className="bg-neutral-900 text-white px-6 pt-24 pb-20">
      <div className="mx-auto max-w-[360px] flex flex-col items-center text-center gap-6">

        {/* Chip */}
        <div className="inline-flex items-center rounded-full bg-neutral-800 px-4 py-1 text-sm text-neutral-300">
          Alex’s Portfolio
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold leading-tight">
          I am a{" "}
          <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Front-End Developer
          </span>
          <span className="block">& Web Programming Instructor</span>
        </h1>

        {/* Description */}
        <p className="text-sm text-neutral-400 leading-relaxed">
          Hi, I’m Alex, a passionate web developer with over{" "}
          <span className="text-neutral-200 font-medium">
            3 years of experience
          </span>{" "}
          in creating responsive websites and teaching modern web technologies.
        </p>

        {/* CTA */}
        <a
          href="#portfolio"
          className="mt-2 inline-flex items-center justify-center w-full py-3 rounded-full
                     bg-gradient-to-r from-pink-500 to-purple-600 font-semibold"
        >
          View Portfolio
        </a>

        {/* Profile Card */}
        <HeroProfileCard />

      </div>
    </section>
  );
}