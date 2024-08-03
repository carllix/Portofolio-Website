"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="bg-black sticky top-0">
      <nav className="w-11/12 flex flex-row mx-auto py-5">
        <div className="basis-1/4 flex items-center">
          <Link href="/" className="font-extrabold text-2xl text-slate-50">
            CARLO
          </Link>
        </div>
        <div className="basis-1/2 flex items-center justify-evenly text-slate-50 font-bold">
          <Link
            href="/"
            className={`py-1 ${
              pathname === "/" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`py-1 ${
              pathname === "/about" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`py-1 ${
              pathname === "/projects" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`py-1 ${
              pathname === "/contact" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Contact
          </Link>
        </div>
        <div className="basis-1/4 flex justify-end">
          <Button variant="outline" className="bg-blue-500 border-none text-slate-50 text-sm hover:bg-black hover:outline outline-blue-500 hover:text-slate-50">
            <Link href="/myportofolio">Download My Portofolio</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}
