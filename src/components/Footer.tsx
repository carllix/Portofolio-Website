import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#121212] mt-20 px-5 md:px-0" id="contact">
      <div className="w-11/12 mx-auto py-10">
        <p className="text-3xl font-black">
          Contact <span className="text-[rgb(135,196,182)]">Me</span>
        </p>
        <p className="mt-2">
          Hi there! I&#39;m always excited to connect with new people. If you
          have any questions, want to discuss a project, or just want to chat,
          drop me a message!
        </p>
        <div className="mt-4 flex items-center">
          <FaEnvelope className="text-[rgb(135,196,182)] size-4" />
          <a
            href="mailto:carloangkisan21@gmail.com"
            className="ml-3"
            target="_blank"
          >
            carloangkisan21@gmail.com
          </a>
        </div>
        <div className="mt-1 flex items-center">
          <FaLinkedin className="text-[rgb(135,196,182)] size-4" />
          <a
            href="https://www.linkedin.com/in/carloangkisan"
            className="ml-3"
            target="_blank"
          >
            Carlo Angkisan
          </a>
        </div>
        <div className="mt-1 flex items-center">
          <FaWhatsapp className="text-[rgb(135,196,182)] size-4" />
          <a
            href="https://wa.me/62895322790395"
            className="ml-3"
            target="_blank"
          >
            +62 895-3227-90395
          </a>
        </div>
        <hr className="my-5" />
        <p className="text-center">
          © 2024 Carlo Angkisan. All rights reserved.
        </p>
      </div>
    </div>
  );
}
