import Image from "next/image";
export default function AboutSection() {
  return (
    <div className="w-11/12 mx-auto pt-20 px-5 md:px-0" id="about">
      <p className="text-3xl font-black text-center">
        About <span className="text-[rgb(135,196,182)]">Me</span>
      </p>
      <div className="my-8 flex flex-col md:flex-row">
        <div className="basis-1/3 md:pr-5">
          <p className="text-center font-semibold text-lg">
            <span className="text-[rgb(135,196,182)]">Who</span> Am I?
          </p>
          <p className="mt-4 md:mt-6 text-justify">
            I&#39;m an Undergraduate Informatics Engineering Student at
            Institute Technology Bandung. I have a strong interest in the world
            of technology, especially in Software Engineering and Cyber
            Security. Currently, I am focusing on learning frontend development
            and plan to study backend development in the future to become a
            proficient fullstack developer.
          </p>
        </div>
        <div className="basis-1/3 mt-8 md:mt-0 md:border-x md:px-5">
          <p className="text-center font-semibold text-lg">
            My <span className="text-[rgb(135,196,182)]">Education</span>
          </p>
          <div className="mt-6">
            <div className="my-5">
              <p className="text-[rgb(135,196,182)]">2023 - Present</p>
              <p className="font-semibold">Institut Teknologi Bandung</p>
              <p className="font-light">Informatics Engineering</p>
            </div>
            <div className="my-5">
              <p className="text-[rgb(135,196,182)]">2020 - 2023</p>
              <p className="font-semibold">SMAN 1 Bekasi</p>
              <p className="font-light">Mathematics and Natural Science</p>
            </div>
          </div>
        </div>
        <div className="basis-1/3 mt-8 md:mt-0 md:pl-10">
          <p className="text-center font-semibold text-lg">
            My <span className="text-[rgb(135,196,182)]">Hobbies</span>
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <Image
              src="/Hobbies/basketball.svg"
              alt="basketball"
              width={50}
              height={50}
              className="size-10 duration-500 hover:translate-y-[-5px] "
            />
            <Image
              src="/Hobbies/game.svg"
              alt="playing game"
              width={50}
              height={50}
              className="size-10 duration-500 hover:translate-y-[-5px] "
            />
            <Image
              src="/Hobbies/reading.svg"
              alt="reading"
              width={50}
              height={50}
              className="size-10 duration-500 hover:translate-y-[-5px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
