"use client";

import Image from "next/image";
import { SECTION_STYLE, CONTAINER_STYLE } from "@/components/ui/sectionStyles";

const skills = [
  { name: "HTML", value: 100 },
  { name: "Redux", value: 85 },
  { name: "JavaScript", value: 90 },
  { name: "React", value: 90 },
  { name: "CSS", value: 80 },
  { name: "TypeScript", value: 70 },
];

export default function SkillSection() {
  return (
    <section
      id="skills"
      style={SECTION_STYLE}>
      <div style={CONTAINER_STYLE}>
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="font-bold">My Core Skill</h2>
          <p className="text-neutral-300 text-xl leading-[34px]">
            An overview of the key technologies and frameworks I specialize in
          </p>
        </div>

        {/* Icon Cluster */}
        <div className="relative flex justify-center">
          <div className="relative w-64 h-64 rounded-full animate-spin-slow">
            {/* Orbit icons */}
            <SkillIcon src="/icons/html.svg" className="top-0 left-1/2" />
            <SkillIcon src="/icons/css.svg" className="right-0 top-1/2" />
            <SkillIcon src="/icons/js.svg" className="bottom-0 left-1/2" />
            <SkillIcon src="/icons/react.svg" className="left-0 top-1/2" />
            <SkillIcon src="/icons/ts.svg" className="top-6 left-6" />
          </div>

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-primary-gradient shadow-primary flex items-center justify-center">
              <Image
                src="/icons/redux.svg"
                alt="Redux"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        {/* Skill Bars */}
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-xl">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>

              <div className="h-[42px] bg-neutral-300/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-gradient"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      <div className="w-12 h-12 rounded-lg bg-neutral-500 shadow-primary flex items-center justify-center">
        <Image src={src} alt="" width={24} height={24} />
      </div>
    </div>
  );
}
