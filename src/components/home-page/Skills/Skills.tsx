"use client";
import * as ci from "@coreui/icons";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <>
      <section>
        <div className="container flex justify-between py-16 text-white dark:text-black flex-wrap gap-10  ">
          <SkillCard icon={ci.cibHtml5Shield} skill="HTML 5" />
          <SkillCard icon={ci.cibCss3Shiled} skill="CSS 3" />
          <SkillCard icon={ci.cibBootstrap} skill="Bootstrap 5" />
          <SkillCard icon={ci.cibJavascript} skill="JavaScript" />
          <SkillCard icon={ci.cibJquery} skill="JQuery" />
          <SkillCard icon={ci.cibReact} skill="React JS" />
          <SkillCard icon={ci.cibNextJs} skill="Next JS" />
          <SkillCard icon={ci.cibMysql} skill="My sql" />
          <SkillCard icon={ci.cibNodeJs} skill="Node js" />
        </div>
      </section>
    </>
  );
}
