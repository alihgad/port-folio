"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Styles from "./projects.module.css";
import Link from "next/link";
import Loading from "@/components/global/Loader";

export default function Page() {
  const [projects, setProjects]: [
    (
      | {
          image: any;
          alt: string;
          link: string;
          heading: string;
          description: string;
          date: string;
        }[]
      | any
    ),
    Dispatch<SetStateAction<null>> | any
  ] = useState([]);
  const [isLoading, setIsLoading]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(true);

  useEffect(() => {
    axios
      .get("https://portfolio-api-sigma-ten.vercel.app/projects")
      .then((response) => {
        setProjects(response?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className=" pt-20">
            <div className="next ">
              <h3 className="border-b pb-2 border-blue-300">Next JS</h3>
              <div className="my-3 grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                {projects?.map((proj: any, i: number) => {
                  return (
                    <>
                      {proj.type == "next" ? (
                        <div key={i} className={`${Styles.card} `}>
                          <div className="card text-capitalize shadow-3d ">
                            <div className="overflow-hidden rounded-top-2 ">
                              <div className="relative  ">
                                <div
                                  className={`${Styles.blackLayer} absolute d-flex justify-content-center align-items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50`}
                                >
                                  <p className=" text-white    fs-1">
                                    <Link
                                      className="text-decoration-none text-white"
                                      href={proj.git}
                                      target="_blank"
                                    >
                                      <i className="fab fa-github mr-5"></i>
                                    </Link>
                                    <Link
                                      className="text-decoration-none text-white"
                                      href={proj.link}
                                      target="_blank"
                                    >
                                      <i className="fas fa-eye"></i>
                                    </Link>
                                  </p>
                                </div>
                                <Image
                                  src={`/${proj.image}`}
                                  className={`${Styles.image}  transition-all duration-500`}
                                  alt={proj.alt}
                                  width={"398"}
                                  height={"240"}
                                  loading="lazy"
                                />
                              </div>
                            </div>
                            <div className="card-body ">
                              <h4 className="text-main">{proj.heading}</h4>
                              <p className="mb-1">{proj.description}</p>
                            </div>
                            <div className="card-footer">
                              <small className="text-muted">{proj.date}</small>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </>
                  );
                })}
              </div>
            </div>

            <div className="react">
              <h3 className="border-b pb-2 border-blue-300">React JS</h3>
              <div className="my-3 grid gap-5 md:grid-cols-3 ">
                {projects?.map((proj: any, i: number) => {
                  return (
                    <>
                      {proj.type == "react" ? (
                        <div key={i} className={`${Styles.card} `}>
                          <div className="card text-capitalize shadow-3d ">
                            <div className="overflow-hidden rounded-top-2 ">
                              <div className="relative  ">
                                <div
                                  className={`${Styles.blackLayer} absolute d-flex justify-content-center align-items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50`}
                                >
                                  <p className=" text-white    fs-1">
                                    <Link
                                      className="text-decoration-none text-white"
                                      href={proj.git}
                                      target="_blank"
                                    >
                                      <i className="fab fa-github mr-5"></i>
                                    </Link>
                                    <Link
                                      className="text-decoration-none text-white"
                                      href={proj.link}
                                      target="_blank"
                                    >
                                      <i className="fas fa-eye"></i>
                                    </Link>
                                  </p>
                                </div>
                                <Image
                                  src={`/${proj.image}`}
                                  className={`${Styles.image}  transition-all duration-500`}
                                  alt={proj.alt}
                                  width={"398"}
                                  height={"240"}
                                  loading="lazy"
                                />
                              </div>
                            </div>
                            <div className="card-body ">
                              <h4 className="text-main">{proj.heading}</h4>
                              <p className="mb-1">{proj.description}</p>
                            </div>
                            <div className="card-footer">
                              <small className="text-muted">{proj.date}</small>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </>
                  );
                })}
              </div>
            </div>

            <div className="native">
              <h3 className="border-b pb-2 border-blue-300">Native </h3>
              <div className="my-3 grid gap-5 md:grid-cols-3 ">
                {projects?.map((proj: any, i: number) => {
                  return (
                    <>
                      {proj.type == "native" ? (
                        <div key={i} className={`${Styles.card} `}>
                          <div className="card text-capitalize shadow-3d ">
                            <div className="overflow-hidden rounded-top-2 ">
                              <div className="relative  ">
                                <div
                                  className={`${Styles.blackLayer} absolute d-flex justify-content-center align-items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50`}
                                >
                                  <p className=" text-white    fs-1">
                                    <Link
                                      className="text-decoration-none text-white"
                                      href={proj.git}
                                      target="_blank"
                                    >
                                      <i className="fab fa-github mr-5"></i>
                                    </Link>
                                    <Link
                                      className="text-decoration-none text-white"
                                      href={proj.link}
                                      target="_blank"
                                    >
                                      <i className="fas fa-eye"></i>
                                    </Link>
                                  </p>
                                </div>
                                <Image
                                  src={`${proj.image}`}
                                  className={`${Styles.image}  transition-all duration-500`}
                                  alt={proj.alt}
                                  width={"398"}
                                  height={"240"}
                                  loading="lazy"
                                />
                              </div>
                            </div>
                            <div className="card-body ">
                              <h4 className="text-main">{proj.heading}</h4>
                              <p className="mb-1">{proj.description}</p>
                            </div>
                            <div className="card-footer">
                              <small className="text-muted">{proj.date}</small>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
