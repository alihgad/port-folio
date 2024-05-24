import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({
  image,
  alt,
  link,
  title,
}: {
  image: any;
  alt: string;
  link: string;
  title: string;
}) {
  return (
    <>
      <div key={alt} className="col-md-9 col-lg-6 col-xl-5 col-sm-12 col-12 card">
        <Image src={image} className={` w-full md:h-80  `} alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"></p>
          <Link target="_blank" href={link} className="btn btn-primary">
            More Details
          </Link>
        </div>
      </div>
    </>
  );
}
