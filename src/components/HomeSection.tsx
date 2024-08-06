import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function HomeSection() {
  return (
    <div className="flex w-11/12 mx-auto mt-10 items-center" id="home">
      <div className="basis-2/3 pr-20">
        <p className="text-xl">Hi, Everyone!</p>
        <p className="text-5xl font-extrabold mt-2 mb-5">
          I&#39;m{" "}
          <span className="text-[rgb(135,196,182)]">Carlo Angkisan</span>
        </p>
        <p className="mb-4 text-lg font-semibold">
          <span className="text-[rgb(135,196,182)]">Spartan</span> | Frontend
          Developer
        </p>
        <div className="mb-6 flex space-x-5">
          <Link
            href="https://www.linkedin.com/in/carloangkisan"
            target="_blank"
          >
            <FaLinkedin className="size-6 duration-500 hover:translate-y-[-5px] hover:text-[rgb(135,196,182)]" />
          </Link>
          <Link href="https://github.com/carllix" target="_blank">
            <FaGithub className="size-6 duration-500 hover:translate-y-[-5px] hover:text-[rgb(135,196,182)]" />
          </Link>
          <Link href="https://www.instagram.com/carlooangkisan" target="_blank">
            <FaInstagram className="size-6 duration-500 hover:translate-y-[-5px] hover:text-[rgb(135,196,182)]" />
          </Link>
        </div>
        <div>
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
          className="rounded-full"
        />
      </div>
    </div>
  );
}
