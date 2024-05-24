import React from "react";
import Card from "./Card";
import mahara from "./../../../../public/certifcations/mahara.jpeg";
import meta from "./../../../../public/certifcations/meta.jpeg";
import udacity from "./../../../../public/certifcations/udacity.jpeg";
import proff from "./../../../../public/certifcations/proff.jpeg";

export default function Certifcation() {
  let Certifecations = [
    {
      title: "mahara tech",
      image: mahara,
      desc: "",
      link:
        "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=35649&code=Hr1jzjgr70&qrcode=1",
    },
    {
      title: "Introduction to Front-End Development",
      image: meta,
      desc: "",
      link:
        "https://www.coursera.org/account/accomplishments/verify/WV896WPB9U74",
    },
    {
      title: "The Web Development Chalenger Track",
      image: udacity,
      desc: "",
      link: "https://www.udacity.com/certificate/DYJMQGLN",
    },
    {
      title: "Professional Front-End Web Development",
      image: proff,
      desc: "",
      link: "https://www.udacity.com/certificate/EHSNCN9G",
    },
  ];

  return (
    <>
      <div className="container mb-5">
        <h1 className="flex justify-center dark:text-white my-5">
          Certifcation
        </h1>
        <div className="flex flex-wrap gap-10  justify-center">
          {Certifecations.map((c) => {
            return (
              <>
              <Card
                alt={c.title}
                title={c.title}
                image={c.image}
                link={c.link}
              />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
