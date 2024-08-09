import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function HomeSection() {
  return (
    <div
      className="flex flex-col-reverse text-center w-11/12 mx-auto mt-10 items-center md:flex-row md:text-left"
      id="home"
    >
      <div className="basis-2/3">
        <p className="text-md mt-3 md:text-xl md:mt-0">Hi, Everyone!</p>
        <p className="text-2xl font-extrabold mt-2 md:text-5xl">
          I&#39;m{" "}
          <span className="text-[rgb(135,196,182)]">Carlo Angkisan</span>
        </p>
        <p className="text-sm font-semibold mt-2 md:text-lg md:mt-5">
          <span className="text-[rgb(135,196,182)]">Spartan</span> | Frontend
          Developer
        </p>
        <div className="flex space-x-5 mt-3 justify-center md:mt-4 md:justify-start">
          <Link
            href="https://www.linkedin.com/in/carloangkisan"
            target="_blank"
          >
            <FaLinkedin className="size-5 md:size-6 duration-500 hover:translate-y-[-5px] hover:text-[rgb(135,196,182)]" />
          </Link>
          <Link href="https://github.com/carllix" target="_blank">
            <FaGithub className="size-5 md:size-6 duration-500 hover:translate-y-[-5px] hover:text-[rgb(135,196,182)]" />
          </Link>
          <Link href="https://www.instagram.com/carlooangkisan" target="_blank">
            <FaInstagram className="size-5 md:size-6 duration-500 hover:translate-y-[-5px] hover:text-[rgb(135,196,182)]" />
          </Link>
        </div>
        <div className="mt-5 md:mt-6">
          <Button>
            <Link
              href="https://www.linkedin.com/in/carloangkisan"
              target="_blank"
            >
              Hire me
            </Link>
          </Button>
          <Button variant="secondary" className="ml-5">
            Download CV
          </Button>
        </div>
      </div>
      <div className="basis-1/3">
        <Image
          src="/Home/profile.jpg"
          alt="Foto Profil"
          width={500}
          height={500}
          className="rounded-full size-48 md:size-auto"
        />
      </div>
    </div>
  );
}
