import Certifcation from "@/components/(AboutPage)/(certifcations)/Certifcation";
import Skills from "@/components/(AboutPage)/Skills/Skills";
import About from "@/components/home-page/about/About";
import React from "react";

export default function page() {
  return (
    <>
      <div className="min-h-screen">
        <About hidden={"hidden"} />
      </div>
      <Skills />
      <Certifcation />
    </>
  );
}
