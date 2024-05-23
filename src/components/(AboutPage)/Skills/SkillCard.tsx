import styels from "./skills.module.css";
import CIcon from "@coreui/icons-react";

export default function SkillCard({
  skill,
  icon,
}: {
  skill: string;
  icon: string[];
}) {
  return (
    <>
      <div className= {` justify-center items-center  flex shadow-sm hover:shadow-2xl transation-all duration-500 hover:shadow-blue-400 shadow-blue-400   dark:bg-gray-500 bg-blue-500 rounded-[100%] w-44 h-44 `}>
        <div className={`${styels.icon}  flex flex-col justify-center items-center my-3 `}>
          <CIcon icon={icon} size="5xl" className="transition-all duration-500" />
          <p className="mt-2">{skill}</p>
        </div>
      </div>
    </>
  );
}
