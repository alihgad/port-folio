import Image from "next/image";
import React from "react";
import about_image from './../../../public/imges/about-image.webp'

export default function About() {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <div className="md:grid grid-cols-2">
            <div className="image ">
                <Image src={about_image} className="w-8/12 mx-auto" alt={'pc'}/>
            </div>
            <div className="text flex justify-center flex-col">
                <h3 className="text-3xl font-extrabold mb-5">About Me</h3>
              <p className=" text-lg font-light">
                I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Redux, Node.js, Express,
                PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner
                and I am always looking to expand my knowledge and skill set. I
                am a team player and I am excited to work with others to create
                amazing applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
