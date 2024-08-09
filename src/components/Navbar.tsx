"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
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
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black fixed top-0 left-0 right-0 z-10">
      <nav className="w-11/12 flex flex-row mx-auto py-5 justify-between">
        <div className="flex items-center md:basis-1/2">
          <Link
            href="/"
            className="font-bold text-xl"
            onClick={() => handleLinkClick("home")}
          >
            <Image
              src="/computer.svg"
              alt="computer"
              width={32}
              height={32}
              className="inline size-6"
            />
            <span className="text-[rgb(135,196,182)] ml-3">Carlo</span> Angkisan
          </Link>
        </div>
        <div className="hidden md:flex basis-1/2 items-center justify-evenly font-semibold">
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
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}
      >
        <button
          className="absolute top-5 right-5 text-3xl"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
        {["about", "projects", "achievements", "contact"].map((id) => (
          <Link
            key={id}
            href={`#${id}`}
            className={"text-lg mb-5 duration-100 hover:text-[rgb(135,196,182)]"}
            onClick={() => handleLinkClick(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
}
