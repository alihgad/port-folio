import React from "react";
import Card from "./Card";
import mahara from "./../../../../public/certifcations/mahara.jpeg";
import meta from "./../../../../public/certifcations/meta.jpeg";
import udacity from "./../../../../public/certifcations/udacity.jpeg";
import proff from "./../../../../public/certifcations/proff.jpeg";
import Route from "./../../../../public/certifcations/route.png";

export default function Certifcation() {
  let Certifecations = [
    {
      title: "Route it traning center ",
      image: Route,
      link:
        "https://drive.google.com/file/d/1FPLZe9nbRODcZQmBUQMHHpvWhXx5w89K/view?usp=sharing",
    },{
      title: "mahara tech",
      image: mahara,
      link:
        "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=35649&code=Hr1jzjgr70&qrcode=1",
    },
    {
      title: "Introduction to Front-End Development",
      image: meta,
      link:
        "https://www.coursera.org/account/accomplishments/verify/WV896WPB9U74",
    },
    {
      title: "The Web Development Chalenger Track",
      image: udacity,
      link: "https://www.udacity.com/certificate/DYJMQGLN",
    },
    {
      title: "Professional Front-End Web Development",
      image: proff,
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
