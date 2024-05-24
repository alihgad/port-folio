import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function DetailsAbout() {
  return (
    <Tabs
      defaultActiveKey="skills"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="skills" title="Skills">
        <div className="flex gap-5">
          <ul className="list-disc pl-5">
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>JavaScript</li>
            <li>Bootstrap 5</li>
            <li>tailwind css</li>
            <li>JQuery</li>
            <li>React Js</li>
          </ul>
          <ul className="list-disc pl-5">
            <li>Next Js</li>
            <li>TypeScript</li>
            <li>Node Js</li>
            <li>Express JS </li>
            <li>MySql</li>
            <li>Squlieze</li>
            
          </ul>
        </div>
      </Tab>
      <Tab eventKey="education" title="Education">
      <ul className="list-disc pl-5">
          <li>Back-end diploma at route Academy </li>
          <li>Front-end diploma at route Academy </li>
          <li>faculty of agriculture at Al-Azhar university</li>
        </ul>
      </Tab>
      <Tab eventKey="Certifications" title="Certifications">
      <ul className="list-disc pl-5">
          <li>HTML & CSS from Mahara Tech (ITI) </li>
          <li>Introduction To Front-End Development (meta) </li>
          <li>Web Development Chalenger Track (itida + udacity)</li>
          <li>Professional Front-End Web Development (itida + udacity)</li>
        </ul>
      </Tab>
    </Tabs>
  );
}

export default DetailsAbout;
