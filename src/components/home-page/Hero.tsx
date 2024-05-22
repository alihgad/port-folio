"use client";

import { Button } from "@/components/ui/button";
import ali from "./../../../public/imges/icon.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <>
      <section className="md:grid flex flex-col gap-y-20 md:grid-cols-3 h-screen pt-36 md:pt-0 ">
        <div className="flex flex-col  justify-center items-center md:items-start  sm:pl-6 lg:pl-40 w-full col-span-2  ">
          <p className="text-3xl font-extrabold">Hello, I&apos;m</p>
          <div className="my-5">
            <TypeAnimation
              sequence={[
                "ALi Hassan",
                1000,
                "Front-End developer",
                1000,
                "MERN-stack developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-blue-400 text-3xl md:text-7xl font-semibold"
            />
          </div>
          <div>
            <Button className=" hover:shadow-blue-400 shadow-md shadow-blue-300 dark:shadow-lg  hover:shadow-xl transition-all duration-500 dark:hover:shadow-blue-900 dark:shadow-blue-900 mr-5 bg-blue-400 hover:bg-blue-300 border-blue-400 border-2 rounded-full hover:text-white">
              <a href="/contact" className="font-bold text-white dark:hover:text-black">Hire me</a>
            </Button>
            <Button
              className="hover:shadow-blue-400 shadow-md shadow-blue-400 dark:shadow-lg dark:hover:text-black hover:shadow-xl transition-all duration-500 dark:hover:shadow-blue-900 dark:shadow-blue-900 border-blue-400 border-2  hover:bg-blue-100 rounded-full"
              variant={"ghost"}
            >
              <a href="./ALi hassan Front-end developer.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className=" flex justify-center items-center w-2/3   ">
            <div
              id="ali"
              className="border-2 border-blue-400  w-full overflow-hidden shadow-2xl shadow-blue-400  "
            >
              <Image src={ali} alt="ali" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


