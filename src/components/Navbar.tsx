"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    const sections = ["home", "about", "projects", "achievements", "contact"];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        sectionRefs.current[id] = section;
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = sectionRefs.current[id];
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveId(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black sticky top-0 z-50">
      <nav className="w-11/12 flex flex-row mx-auto py-5 justify-between">
        <div className="basis-1/4 flex items-center">
          <Link
            href="/"
            className="font-bold text-2xl"
            onClick={() => handleLinkClick("home")}
          >
            <Image
              src="/computer.svg"
              alt="computer"
              width={32}
              height={32}
              className="inline"
            />
            <span className="text-[rgb(135,196,182)] ml-3">Carlo</span> Angkisan
          </Link>
        </div>
        <div className="basis-1/2 flex items-center justify-evenly font-semibold">
          {["about", "projects", "achievements", "contact"].map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`py-1 duration-100 hover:text-[rgb(135,196,182)] ${
                activeId === id ? "text-[rgb(135,196,182)]" : ""
              }`}
              onClick={() => handleLinkClick(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
