"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [activeId, setActiveId] = useState('home');
  const sectionRefs = useRef({});

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

  const handleLinkClick = (id) => {
    setActiveId(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
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
              src="computer.svg"
              alt="computer"
              width={32}
              height={32}
              className="inline"
            />
            <span className="text-[rgb(135,196,182)] ml-3">Carlo</span> Angkisan
          </Link>
        </div>
        <div className="basis-1/2 flex items-center justify-evenly font-semibold">
          <Link
            href="#about"
            className={`py-1 duration-100 hover:text-[rgb(135,196,182)] ${
              activeId === "about" ? "text-[rgb(135,196,182)]" : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About Me
          </Link>
          <Link
            href="#projects"
            className={`py-1 duration-100 hover:text-[rgb(135,196,182)] ${
              activeId === "projects" ? "text-[rgb(135,196,182)]" : ""
            }`}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </Link>
          <Link
            href="#achievements"
            className={`py-1 duration-100 hover:text-[rgb(135,196,182)] ${
              activeId === "achievements" ? "text-[rgb(135,196,182)]" : ""
            }`}
            onClick={() => handleLinkClick("achievements")}
          >
            Achievements
          </Link>
          <Link
            href="#contact"
            className={`py-1 duration-100 hover:text-[rgb(135,196,182)] ${
              activeId === "contact" ? "text-[rgb(135,196,182)]" : ""
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
