import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({
  key,
  image,
  alt,
  link,
  title,
}: {
  key: number;
  image: any;
  alt: string;
  link: string;
  title: string;
}) {
  return (
    <>
      <div key={key} className="col-md-4 col-sm-6 col-12 card">
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
