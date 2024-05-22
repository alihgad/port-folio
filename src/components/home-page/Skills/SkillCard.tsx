import styels from "./skills.module.css";
import CIcon from "@coreui/icons-react";
import { cibJquery, cibNextJs } from "@coreui/icons";




export default function SkillCard({skill , icon}:{
    skill: string;
    icon: string[];
}) {
  return (
    <>
      <div className=" justify-center  flex shadow-sm hover:shadow-2xl transation-all duration-500 hover:shadow-blue-400 shadow-blue-400 shadow  dark:bg-gray-500 bg-blue-500 rounded-[100%] w-44 h-44 items-center">
            <div className={`${styels.icon} my-3`}>
              <CIcon icon={icon} size="5xl" />
              <p className="mt-2">{skill}</p>
            </div>
          </div>
    </>
  );
}
