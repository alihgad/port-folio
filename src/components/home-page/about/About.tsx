"use client";
import Image from "next/image";
import React from "react";
import about_image from "./../../../../public/imges/about-image.webp";
import DetailsAbout from "./DetailsAbout";

export default function About({hidden}:{
  hidden?:string 
}) {
  return (
    <>
      <section className="py-10 dark:text-white">
        <div className="container">
          <div className="md:grid grid-cols-2">
            <div className="image my-5 md:my-0">
              <Image
                src={about_image}
                className="md:w-9/12 mx-auto rounded-lg"
                alt={"pc"}
              />
            </div>
            <div className="text flex flex-col justify-center text-center sm:text-left">
              <h3 className="text-3xl font-extrabold ">About Me</h3>
              <p className=" text-lg font-light">
                I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Next, Redux, Node.js, Express,
                MySQL, Sequelize, HTML, CSS,Bootstrap , tailwind and Git. I am a
                quick learner and I am always looking to expand my knowledge and
                skill set. I am a team player and I am excited to work with
                others to create amazing applications.
              </p>
              <div className={`${hidden}`}>
                <DetailsAbout />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
